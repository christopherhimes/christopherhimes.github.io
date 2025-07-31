---
layout: page
title: Music Listening
mainnav: false
permalink: /experiments/music-listening/
---


  <style>
    #tracks {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 15px;
      margin-top: 20px;
    }
    .track-item {
      position: relative;
      cursor: pointer;
      overflow: hidden;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      background: #f0f0f0;
    }
    .track-item img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      display: block;
      transition: transform 0.3s ease;
    }
    .track-item:hover img {
      transform: scale(1.1);
    }
    /* Overlay container hidden by default */
    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.75);
      color: #fff;
      padding: 10px;
      font-size: 14px;
      opacity: 0;
      transition: opacity 0.3s ease;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding-left: 8px;
      padding-right: 8px;
    }
    .track-item:hover .overlay {
      opacity: 1;
    }
  </style>

<div id="tracks">Loading...</div>

<script>
console.log("hello");
fetch('../../../.netlify/functions/hide-token')
    .then(response => response.json())
    .then(data => {
        console.log("in here at least");
        const API_KEY = data.message;
        const USER = 'cshmes';
        const URL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USER}&api_key=${API_KEY}&format=json&limit=11`;

        async function fetchRecentTracks() {
            try {
                const response = await fetch(URL, { headers: { 'User-Agent': 'Last.fm Dashboard Demo' } });
                if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const tracks = data.recenttracks.track;

                if (!tracks || tracks.length === 0) {
                document.getElementById('tracks').textContent = 'No recent tracks found.';
                return;
                }

                const container = document.getElementById('tracks');
                container.innerHTML = '';

                tracks.forEach(track => {
                const artist = track.artist['#text'];
                const name = track.name;
                // Use medium image (usually index 2), fallback gracefully if missing
                const imageUrl = (track.image && track.image[2]) ? track.image[2]['#text'] : '';
                if (!imageUrl) {
                    // If no image, skip this track or use a placeholder image
                    return;
                }
                // Create grid item div
                const div = document.createElement('div');
                div.className = 'track-item';

                div.innerHTML = `
                    <img src="${imageUrl}" alt="Album art for ${name}">
                    <div class="overlay">
                    <div>
                        <strong>${name}</strong><br/>
                        <span>${artist}</span>
                    </div>
                    </div>
                `;

                container.appendChild(div);
                });
            } catch (error) {
                document.getElementById('tracks').textContent = `Error fetching data: ${error.message}`;
            }
            }

            fetchRecentTracks();
})
</script>

