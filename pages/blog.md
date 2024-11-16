---
layout: page
title: Blog
mainnav: true
permalink: /blog/
---

{% for post in site.posts %}
  <article class="blog-entry">
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    <h2>
      <a class="blog-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </h2>
    <p>{{ post.blurb }}</p>
  </article>
{% endfor %}


