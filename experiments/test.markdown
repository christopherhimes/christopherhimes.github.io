---
layout: page
title: cards revisited
mainnav: false
permalink: /experiments/cards-revisited/
---

  <style>
    .card {
      position: relative;
      width: 300px;
      height: 200px;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s ease-in-out;
    }

    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
    }

    .card-content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0,0,0,0.6);
      color: white;
      padding: 15px;
      opacity: 0;
      transform: translateY(100%);
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    .card-content h2 {
      margin: 0 0 10px;
      font-size: 24px;
      transition: transform 0.3s ease-in-out;
    }

    .card-content p {
      font-size: 16px;
      transition: transform 0.3s ease-in-out;
    }

    .card:hover {
      transform: scale(1.05);
    }

    .card:hover img {
      transform: scale(1.1) rotate(3deg);
      filter: brightness(1.1);
    }

    .card:hover .card-content {
      opacity: 1;
      transform: translateY(0);
    }

    .card:hover .card-content h2 {
      transform: translateX(10px);
    }

    .card:hover .card-content p {
      transform: translateX(-10px);
    }
  </style>

  <div class="card">
    <img src="https://via.placeholder.com/300x200" alt="Card Image">
    <div class="card-content">
      <h2>Sample Card</h2>
      <p>This is a sample card with a hover effect inspired by Chris Glass's website.</p>
    </div>
  </div>
  <div class="card">
    <img src="https://via.placeholder.com/300x200" alt="Card Image">
    <div class="card-content">
      <h2>Sample Card</h2>
      <p>This is a sample card with a hover effect inspired by Chris Glass's website.</p>
    </div>
  </div>
  <div class="card">
    <img src="https://via.placeholder.com/300x200" alt="Card Image">
    <div class="card-content">
      <h2>Sample Card</h2>
      <p>This is a sample card with a hover effect inspired by Chris Glass's website.</p>
    </div>
  </div>
