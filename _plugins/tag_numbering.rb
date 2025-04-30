# _plugins/tag_numbering.rb

module Jekyll
    class TagIndexer < Generator
      safe true
      priority :low
  
      def generate(site)
        tag_map = Hash.new { |hash, key| hash[key] = [] }
  
        # Step 1: Group posts by tag
        site.posts.docs.each do |post|
          post.data['tags']&.each do |tag|
            tag_map[tag] << post
          end
        end
  
        # Step 2: Sort posts and assign numbers
        tag_map.each do |tag, posts|
          sorted_posts = posts.sort_by { |p| p.data['date'] }
  
          sorted_posts.each_with_index do |post, index|
            post.data['tag_numbers'] ||= {}
            post.data['tag_numbers'][tag] = index + 1
          end
        end
      end
    end
  end
  