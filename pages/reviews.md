---
layout: page
title: 'reviews'
permalink: /reviews/
mainnav: false
---
<div class="blog-grid">
  {% for post in site.posts %}
    {% if post.tags contains 'review' %}
      <a class="blog-card blog-card-link" href="{{ post.url }}">
            <img src="{{ post.share-img | default: '/assets/img/new-face-650x650.webp' }}" alt="{{ post.title }}" class="card-image">
            <div  class="card-content">
            <h3 class="card-title">{{ post.title }}</h3>
            <p>[{{ post.media_type }}]</p>
            </div>
      </a>
    {% endif %}
  {% endfor %}
</div>

<style>
.blog-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: .5em; 
}


.blog-card {
  display: block;
  position: relative;
  width: 100%;
  /* height: 400px; */
  border-radius: 15px;
  border: solid 2px var(--link-color); 
  overflow: hidden;
  text-decoration:none;
}

.blog-card:hover {
  background-color:none;
  transform: scale(1.02);
  transition: transform 0.3s ease-in-out;
  z-index:100;
}

.card-content {
  padding: 1rem;
}

.card-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  object-fit: cover;
}

.card-title {
  margin: 85% 0 10px;
  font-size: 1.2rem;
  color: var(--foreground-color);
}


/* Responsive adjustments */
@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
</style>