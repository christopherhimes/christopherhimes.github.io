---
layout: page
title: 'now'
permalink: /now/
mainnav: false
---

__What I'm doing now__

Updated December 5, 2024

### Personal
Leah and I have gone from planning a wedding to planning a trip to France. We're looking at Airbnbs which has been pretty intersting actually.

### Movies/TV
Started watching Dune Prophesy and am enjoying the last season of What We do in the Shadows.
Saw Wicked and will be going again this weekend.

### Music
I've been listening to the Wicked sountrack and the new Kendrick album.
{% if page.title == 'now' %}
<script type="text/javascript">

fetch('../../.netlify/functions/hide-token')
    .then(response => response.json())
    .then(data => {
        // console.log(data.message)
        const api_key = data.message
        const MY_USERNAME = 'cshmes';
        const request = new XMLHttpRequest();
        // console.log(api_key)
        request.open('GET', 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user='+[MY_USERNAME]+'&api_key='+api_key+'&format=json');
        request.send(); 

        request.onload = () => {
            if (request.status === 200) {
                // console.log("Success");

                var track = JSON.parse(request.response).recenttracks.track[0];
                var song = track.name;
                var artist = track.artist['#text'];
                var album = track.album['#text'];

                const container = document.getElementById('result');
                container.innerHTML = 'Last listened to 🎵 ' + song + ' - <i>' + artist + '</i> - <u>' + album + "</u> 🎵 as scrobbled by <a href='https://last.fm/user/cshmes'>last.fm</a>"; 
                // console.log(JSON.parse(request.response).recenttracks.track[0]);  
            } 
        };

        request.onerror = () => {
        console.log("error")
        };
    })

</script>
<div id="result"></div>
{% endif %}