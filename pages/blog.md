---
layout: page
title: blog
mainnav: true
permalink: /blog/
---

{% for post in site.posts %}
  <article class="blog-entry">
    <h2>
      <a class="blog-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </h2>
    <p>{{ post.date | date: "%b %-d, %Y" }}</p>
    <p>{{ post.blurb }}</p>
  </article>
  <hr />
{% endfor %}


