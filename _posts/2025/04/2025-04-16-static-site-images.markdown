---
layout: post
title:  "Static Site Images"
date:   2025-04-16 11:30:00
tags: ['Meta', 'Images', '100 Days To Offload']
blurb: I was recently reaking this blog post by Kev Quirk about image handling on his static site which inspired me to spend some time fixing the images on this site.

comments:
    id: 
---

I was recently reaking this blog post by Kev Quirk about [image handling] on his static site which inspired me to spend some time fixing the images on this site.

My includes are fairly similar to his but I'm passing a class as well.

~~~
{% raw %}
{{=<% %>=}}<img class="blogimg" alt="{{include.alt}}" loading="lazy" src="/assets/img/{{include.src}}" />
{% endraw %}
~~~

The image line in each post is identical to his handling.

~~~
{% raw %}
{% include img.html src='' alt='' %}
{% endraw %}
~~~

Fun side note in creating this post I learned that you have to use &#123;% raw %&#125; and &#123;% endraw %&#125; tags so the [liquid code] wouldn't run and replace that information. Also, these tags do not stack so you cannot show this code by putting raw/raw/endraw/endraw.

With this at least partially corrected I'll be adding images to more posts going forward and revisiting the dark and light mode update with some images.

And here just because it would be bad form to have a post about images without including an image.

{% include img.html src='/blog/static-images/static-dinosaur.webp' alt='T-Rex roaring in an urban downtown area' %}
Photo by [Huang Yingone]
      
This is day 5 of #100DaysToOffload.

[image handling]: https://kevquirk.com/blog/how-i-manage-jekyll-content
[liquid code]: https://heymichellemac.com/jekyll-liquid-tags-code-snippet
[Huang Yingone]: https://unsplash.com/@yingone?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash