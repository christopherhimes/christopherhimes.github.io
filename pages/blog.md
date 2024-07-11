---
layout: default
title: Blog
mainnav: true
permalink: /blog/
---

<div class="home">

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
        {{ post.excerpt }}
        <a href="{{ post.url | relative_url }}">
          More...
        </a>
        <!-- <div class="category-title">Categories: 
          {% for category in post.categories %}
            <span class="category">{{ category }}</span>
          {% endfor %}          
        </div> -->
      </li>
    {% endfor %}
  </ul>

  <!-- <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p> -->

</div>
