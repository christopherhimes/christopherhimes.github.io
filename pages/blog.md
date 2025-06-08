---
layout: page
title: blog
# mainnav: true
permalink: /blog/
pagination:
  enabled: true
  permalink: /blog/page/:num/
---
{% for post in paginator.posts %}
  <article class="blog-entry">
    {% if post.layout == "none" %}
      <h2>
        <a class="blog-link" href="{{ post.external_url }}">{{ post.title }}</a> via <a class="blog-link" href="{{ post.external_main }}">{{ post.external_title }}</a>
      </h2>
      <p>{{ post.date | date: "%b %-d, %Y" }} [{{ post.type }}]</p>
      <p>{{ post.blurb }}</p>
      {% if post.tags %}
      <div class="post-tags">
        {% for tag in post.tags %}
          <a class="tag-button" href="{{ site.baseurl }}/tags/#{{ tag }}">{{ tag }}</a>
        {% endfor %}
      </div>
      {% endif %}
    {% else %}
      <h2>
        <a class="blog-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>
      <p>{{ post.date | date: "%b %-d, %Y" }}&nbsp; [{{ post.type }}]&nbsp;<span class="reading_time">read in {{ post.content | reading_time }}</span></p>
      <p>{{ post.blurb }}</p>
      <p><a class="blog-link" href="{{ post.url | prepend: site.baseurl }}">Read More...</a></p>
      {% if post.tags %}
      <div class="post-tags">
        {% for tag in post.tags %}
          <a class="tag-button" href="{{ site.baseurl }}/tags/#{{ tag }}">{{ tag }}</a>
        {% endfor %}
      </div>
      {% endif %}
    {% endif %}
  </article>
  <hr />
{% endfor %}

<!-- Pagination links -->
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="previous">
      previous</a>
  {% else %}
    <span class="previous">previous</span>
  {% endif %}
  <span class="page_number ">
    page: {{ paginator.page }} of {{ paginator.total_pages }}
  </span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="next">next</a>
  {% else %}
    <span class="next ">next</span>
  {% endif %}
</div>