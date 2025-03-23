---
layout: page
title: 'now'
permalink: /now/
mainnav: false
---

__What I'm doing now__

Updated March 22, 2025

### Personal
Leah and I have booked AirBNB's and we're still going to France.

My position at JELD-WEN was eliminated and I was let go on 3/13/25. So, the job search begins!

### Movies/TV
Just finished Severance and this season hits a little different now. Dylan is literally rejected by a door company in the second episode.
Also, we've just finished the latest seasons of Traitors and Traitors UK. Those UK folks played a really fun game.

### Music
I've still been listening to the Wicked soundtrack and the new Kendrick album. There has also been a bit of indie rock in there again.

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