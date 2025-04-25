---
layout: page
title: hundred
# mainnav: true
permalink: /hundred/
pagination:
  enabled: true
  permalink: /hundred/page/:num/
---
{% for post in paginator.posts %}
  <article class="blog-entry">
    <h2>
      <a class="blog-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </h2>
    <p>{{ post.date | date: "%b %-d, %Y" }}</p>
    <p>{{ post.blurb }}</p>
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