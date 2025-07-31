---
layout: page
title: Music Listening
mainnav: false
permalink: /experiments/music-listening/
---


<style>
#tracks { margin-top: 20px; }
.track { margin-bottom: 10px; }
.track strong { color: #333; }
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
        const URL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USER}&api_key=${API_KEY}&format=json&limit=10`;

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
                const album = track.album['#text'] || 'Unknown album';
                const date = track.date ? track.date['#text'] : 'Now Playing';

                const div = document.createElement('div');
                div.className = 'track';
                div.innerHTML = `<strong>${name}</strong> by ${artist} <em>(${album})</em> at ${date}`;
                container.appendChild(div);
            });
            } catch (error) {
            document.getElementById('tracks').textContent = `Error fetching data: ${error.message}`;
            }
        }

        fetchRecentTracks();
})
</script>

