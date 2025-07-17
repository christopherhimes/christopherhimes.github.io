require "mini_magick"
require "fileutils"
require "tempfile"
# require "pango"
# require "cairo"

module Jekyll
  class OpenGraphImageGenerator < Generator
    safe true
    priority :low

    def generate(site)
      output_dir = File.join(site.source, "assets", "og-images")
      FileUtils.mkdir_p(output_dir)

      static_image_path = File.join(site.source, "assets", "img", "new-face-650x650.png")

      site.posts.docs.each do |post|
        title = post.data["title"] || "Untitled"
        date = post.date.strftime("%B %-d, %Y") rescue nil
        blurb = post.data["blurb"] || post.data["blurb"] || ""
        slug = post.data["slug"] || post.basename_without_ext
        output_filename = "#{slug}.webp"
        output_path = File.join(output_dir, output_filename)
        public_path = File.join("/assets/og-images", output_filename)

        share_image = post.data["share-img"] || ""
        
        Jekyll.logger.info "Title: ", title
        Jekyll.logger.info "share-img", share_image

        if share_image == "" or !File.exist?(File.join(File.join(site.source, post.data["share-img"])))
          share_image = static_image_path
        else
          share_image = File.join(site.source, post.data["share-img"])
        end

        unless File.exist?(output_path)
          generate_image(title, share_image, output_path, date, blurb)
          Jekyll.logger.info "Generated OG image:", output_path
        end

        post.data["og_image"] = public_path
      end
    end

    def generate_image(title, image_path, output_path, date = nil, blurb = nil)
      canvas = MiniMagick::Image.open(generate_background)
      stripe_image = MiniMagick::Image.open(generate_stripe)

      circle_image_path = apply_circular_mask(image_path)
      circle_image = MiniMagick::Image.open(circle_image_path)

      canvas = canvas.composite(stripe_image) do |c|
        c.compose "Over"
        c.geometry "+0+0"
      end

      canvas = canvas.composite(circle_image) do |c|
        c.compose "Over"
        c.geometry "+40+105"
      end

      text_image = create_text_image(title, date, blurb)
      canvas = canvas.composite(text_image) do |c|
        c.compose "Over"
        c.geometry "+470+60"
      end

      title_image = create_title_image(title)
      canvas = canvas.composite(title_image) do |c|
        c.compose "Over"
        c.geometry "+470+60"
      end

      canvas.format "webp"
      canvas.write(output_path)

      circle_image.destroy!
      text_image.destroy!
    end

    def generate_background
      bg = Tempfile.new(["bg", ".png"])
      MiniMagick::Tool::Convert.new do |convert|
        convert.size "1200x630"
        convert.xc "#1A1A1A"
        convert << bg.path
      end
      bg.path
    end

    def generate_stripe
      width = 1200
      height = 7
      start_color = "#20FFBC"
      end_color = "#19D1FF"

      stripe = Tempfile.new(["stripe", ".png"])
      MiniMagick::Tool::Convert.new do |convert|
        convert.size "#{height}x#{width}"
        convert << "gradient:#{start_color}-#{end_color}"
        convert.rotate "-90"
        convert << stripe.path
      end
      stripe.path

    end

    def apply_circular_mask(image_path)
      size = 400
      output = Tempfile.new(["masked", ".png"]).path

      image = MiniMagick::Image.open(image_path)
      image.resize "#{size}x#{size}^"
      image.gravity "center"
      offset = (image.width - 400) / 2

      Jekyll.logger.info "Image Width: ", image.width

      image.crop "#{size}x#{size}+#{offset}+0"


      mask_path = Tempfile.new(["mask", ".png"]).path
      MiniMagick::Tool::Convert.new do |convert|
        convert.size "#{size}x#{size}"
        convert.xc "black"
        convert.fill "white"
        convert.draw "circle #{size / 2},#{size / 2} #{size / 2},1"
        convert << mask_path
      end

      result_path = Tempfile.new(["result", ".png"]).path
      MiniMagick::Tool::Convert.new do |convert|
        convert << image.path
        convert << mask_path
        convert.alpha "off"
        convert.compose "CopyOpacity"
        convert.composite
        convert << result_path
      end

      result_path
    end

    def create_title_image(title)
      width = 700
      height = 520
      title_file = Tempfile.new(["title", ".png"])
      MiniMagick::Tool::Convert.new do |convert|
        # convert.size "#{width}x#{height}"
        convert.gravity "NorthWest"
        convert.background "none"
        # convert.xc "none"

        convert.font "Lato"
        convert.fill "#20FFBC"

        # Title
        base_size = 64
        estimated_char_width = base_size
        estimated_text_width = title.length * estimated_char_width + (base_size * 5)
        scale_factor = [1.0, width / estimated_text_width].min
        final_font_size = [(base_size * scale_factor).to_i, 24].max

        convert.pointsize final_font_size.to_s
        convert << "pango:#{title}"
        convert << title_file.path
      end
      MiniMagick::Image.open(title_file.path)
    end

    def create_text_image(title, date, blurb)
      width = 740
      height = 540
      text_file = Tempfile.new(["text", ".png"])

      MiniMagick::Tool::Convert.new do |convert|
        convert.size "#{width}x#{height}"
        convert.gravity "NorthWest"
        convert.xc "none"

        # convert.font "Lato"
        convert.fill "#20FFBC"

        # Title
        # base_size = 64
        # estimated_char_width = base_size * 0.6
        # estimated_text_width = title.length * estimated_char_width
        # scale_factor = [1.0, width / estimated_text_width].min
        # final_font_size = [(base_size * scale_factor).to_i, 24].max


        # convert.pointsize final_font_size.to_s
        # convert.draw "text 0,20 '#{escape(title)}'"

        # Date
        if date
          convert.pointsize "26"
          convert.fill "#DCDCDC"
          convert.draw "text 0,100 '#{escape(date)}'"
        end

        # Blurb
        if blurb.to_s.strip != ""
          wrapped = wrap_text(blurb, 50)
          convert.pointsize "28"
          convert.fill "#F0F0F0"
          wrapped.each_with_index do |line, idx|
            y = 200 + idx * 34
            convert.draw "text 0,#{y} '#{escape(line)}'"
          end
        end

        # URL
        if date
          convert.pointsize "26"
          convert.fill "#20FFBC"
          convert.draw "text 410,500 'christopherhimes.com'"
        end
        convert << text_file.path
      end

      MiniMagick::Image.open(text_file.path)
    end

    def wrap_text(text, max_chars)
      text.to_s.scan(/.{1,#{max_chars}}(?:\s+|$)/).map(&:strip)
    end

    def escape(text)
      text.to_s.gsub("'", "\\\\'")
    end
  end
end
