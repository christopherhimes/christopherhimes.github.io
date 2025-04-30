---
layout: page
title: hundred
# mainnav: true
permalink: /hundred/
---

[100 Days To Offload] is a challenge to publish 100 posts on your personal blog in a year.

This is a dedicated page to list out the current progress for this challenge.

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

[100 Days To Offload]: https://100daystooffload.com/