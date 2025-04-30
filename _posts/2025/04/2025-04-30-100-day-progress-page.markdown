---
layout: post
title:  "Dedicated 100 Days To Offload Progress Page"
date:   2025-04-30 13:30:00
tags: ['Meta', '100 Days To Offload', ]
blurb: I've added a /hundred page that will list out all the available posts that have been tagged with '100 Days To Offload.'
comments:
    id: 114427762812698997
---
This one feels a bit like padding but I wanted to post it anyway. I have a few things in mind with the blog but I wanted to test the waters a bit with a dedicated page to the progress of the [100 Days To Offload] challenge.

I've added a [hundred] page that will list out all the available posts that have been tagged with '100 Days To Offload.' I've removed pagination, descriptions, tags, etc. and will just be presenting the number in the series, title, and original post date.

This of course is not an essential page for the site but what I wanted to focus on with its creation is filtering blog posts with [liquid]. Which again is the template engine used by [jekyll] and others for generating static pages.

As of publishing this post the [hundred] page is generated using the following code.

{% highlight liquid linenos %}
{% raw %}
{% assign tagged_posts = site.posts | where_exp: "post", "post.tags contains '100 Days To Offload'" %}
{% assign total = tagged_posts | size %}
{% assign tagged_posts = tagged_posts %}

<ul class="💯">
  {% for post in tagged_posts %}
    <li>
      {{ total | minus: forloop.index0 }}. 
      <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
    </li>
  {% endfor %}
</ul>
{% endraw %}
{% endhighlight %}

Since CSS supports using emoji for classes I had to go ahead and use 💯 to remove the bullets and padding from this unordered list.

{% highlight css linenos %}
.💯 {
    list-style: none;
    padding-left: 0;
}
{% endhighlight %}

I thought it was fun anyway.
 
The nice thing about having an existing tag with posts is that I can use this to experiment with loading pages prior to getting into the next project which is putting together a portfolio of sorts. With the right filtering and tagging the portfolio can be generated based on blog posts rather than a brand new construction. I'm sure I will need to populate these upcoming posts with more details to better support a more visual presentation that I have planned for them.

I'm a bit torn between the simplicity of the site currently and wanting to have some more visual representation. The trade off for now will be a portfolio section that is a bit more visual while keeping most of the site simple. I'm not a front-end developer but I would like to add something here that is a bit more engaging.

I've also went ahead and updated every post in this series so I don't have to keep track of which post is which. Now each post includes a tag number that can be referenced as follows.

{% highlight liquid linenos %}
{% raw %}
This is day {{ page.tag_numbers["100 Days To Offload"] }}  of #100DaysToOffload.
{% endraw %}
{% endhighlight %}

Each post within a series does not know how many other posts are in that series. Because of this a plugin was required to make this happen. Here is the plugin that I created to enable this functionality.

{% highlight ruby linenos %}
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
{% endhighlight %}

One downside to this is that GitHub Pages will not support this plugin but I use Netlify so that should not be an issue.

This is day {{ page.tag_numbers["100 Days To Offload"] }}  of #100DaysToOffload.

[100 Days To Offload]: https://100daystooffload.com/
[hundred]: /hundred
[jekyll]: https://jekyllrb.com/
[liquid]: https://github.com/Shopify/liquid/wiki