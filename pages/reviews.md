---
layout: page
title: 'reviews'
permalink: /reviews/
mainnav: false
---
<div class="blog-grid">
  {% for post in site.posts limit:8 %}
    {% if post.tags contains 'review' %}
      <a href="{{ post.url }}" class="blog-card-link">
        <div class="blog-card">
          <div class="card-content">
            <img src="{{ post.share-img | default: '/assets/img/new-face-650x650.webp' }}" alt="{{ post.title }}" class="card-image">
            <h3 class="card-title">{{ post.title }}</h3>
            <p>[{{ post.type }}]</p>
          </div>
        </div>
      </a>
    {% endif %}
  {% endfor %}
</div>

<style>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 0px;
  /* max-width: 1400px; */
  /* margin: 0 auto;  */
}

.blog-card-link {
  text-decoration: none;
  color: inherit;
}

.blog-card {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 133.33%; /* 3:4 aspect ratio */
  background: var(--background-color); /* Almost black background */
  border-radius: 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  overflow: hidden;
  display: flex;
}

.blog-card:hover {
  transform: rotate(-2deg) translateY(-5px);
  box-shadow: 6px 6px 12px var(--foreground-color),
              -6px -6px 12px var(--link-color);
}

.card-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: white; /* White text for dark background */
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
  .blog-card {
    padding-bottom: 100%; /* More square shape on mobile */
  }
  .card-title {
    margin: 65% 0 10px;
  }
}
</style>