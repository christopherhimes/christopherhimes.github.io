---
layout: post
title:  "Light and Dark Mode Revisited"
date:   2025-04-16 14:30:00
modified_date: 2025-04-30 12:00:00
tags: ['CSS', 'Meta', '100 Days To Offload']
blurb: I wanted to revisit the light and dark update as the original described some changes but didn't display how these changes impacted the experience on the site. Now that images are working a bit better I figured I would show exactly what's happening on the site in its current state.


comments:
    id: 114349289759138068
---

<style>
.box {
  float: left;
  /* height: 50px; */
  /* width: 50px; */
  padding: 15px;
  text-align: center;
  vertical-align: center;
  margin-bottom: 15px;
  border: 1px solid light-dark(rgb(26, 26, 26), rgb(240,240,240));
  color: black;
  /* clear: both; */
}
.white {background-color: rgb(240,240,240);}
.black {background-color: rgb(26, 26, 26);color:white;}
.medium-green {background-color: rgb(0, 119, 83);}
.bright-green {background-color: rgb(32, 255, 188);}
.medium-blue {background-color: rgb(1, 151, 189);}
.bright-blue {background-color: rgb(25, 209, 255);}
</style>

I wanted to revisit the light and dark update as the original described some changes but didn't display how these changes impacted the experience on the site. Now that images are working a bit better I figured I would show exactly what's happening on the site in its current state.

The dark mode which is the primary way I view the site uses an almost black background with bright green and blue for the headers and links respectively.

<div class="box black">rgb(26, 26, 26)</div><div class="box bright-green">rgb(32, 255, 188)</div><div class="box bright-blue">rgb(25, 209, 255)</div>

{% include img.html src='/blog/light-and-dark/dark-mode.webp' alt='Dark mode version of this site with a near black background, bright blue links, white text, and bright green header text' %}

The light mode which I imagine will be the way most people view the site uses an almost white background with medium green and blue for the headers and links respectively.

<div class="box white">rgb(240,240,240)</div><div class="box medium-green">rgb(0, 119, 83)</div><div class="box medium-blue">rgb(1, 151, 189)</div>

{% include img.html src='/blog/light-and-dark/light-mode.webp' alt='Light mode version of this site with a near white background, medium blue links, near black text, and medium green header text' %}

Additionally, I've simplified the setup for light and dark based on a recent blog by [James G] that was a follow up to his original post that inspired this setup in the first place. Previously the CSS suffered from the same redundancy he discussed in his blog post where every time a color was used it checked light-dark. Now this is baked into the :root variables like so:

~~~ css
:root {
    color-scheme: light dark;
    --background-color: light-dark(rgb(240,240,240), rgb(26, 26, 26));
    --foreground-color: light-dark(rgb(0, 119, 83), rgb(32, 255, 188));
    --link-color: light-dark(rgb(1, 151, 189), rgb(25, 209, 255));
    --text-color: light-dark(rgb(26, 26, 26), rgb(240,240,240));
    --line-color: rgba(211, 211, 211, 30%);
}
~~~

This allows h1 to be styled like so:

~~~ css
h1 {
    color: var(--foreground-color);
} 
~~~

One last thing is the use of gradients which also change in response to the light or dark settings from the user. One example is the site-tile which is just how my name at the top left on desktop or the top center on mobile is classed. The variables plug in just the same here but the added simplicity really helps the more complex -webkit-gradient lines legibility.

~~~ css 
.site-title {
    font-family: 'lato-normal', Arial, Helvetica, sans-serif;
    font-size: 1.2em;
    background: -webkit-gradient(linear, left top, right bottom, from(var(--foreground-color)), to(var(--link-color)));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
}
~~~

These screenshots were taken by me on 4/11/25.

This is day {{ page.tag_numbers["100 Days To Offload"] }}  of #100DaysToOffload.

[James G]: https://jamesg.blog/2025/04/03/light-dark-root