---
layout: post
type: post
title:  "Lighthouse Revisited"
date:   2025-04-29 13:30:00
modified_date: 2025-04-30 12:00:00
tags: ['Meta', '100 Days To Offload', 'Performance', 'Accessibility', 'SEO', 'Best Practices', 'Light and Dark', 'Lighthouse']
blurb: After a bit of trial and error both the mobile and desktop versions of the site have 100% for all four categories! 🎉
comments:
    id: 114422472573351994
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
.medium-green {background-color: rgb(0, 87, 59);}
.bright-green {background-color: rgb(32, 255, 188);}
.medium-blue {background-color: rgb(1, 85, 106);}
.bright-blue {background-color: rgb(25, 209, 255);}
</style>

One thing about this site that I'm not happy with is I don't have the necessary tests in place to ensure changes meet the standard of quality I want. Case in point, a [few months back] I got the site to a good [lighthouse] score. Not just good, the site was at 100% for performance, accessibility, best practices, and SEO on desktop. Mobile had 95% for performance and accessibility.

## Desktop (original)

{% include img.html src='/blog/lighthouse/lighthouse-desktop.webp' alt='Past lighthouse scores of 100% in all categories' %}

## Mobile (original)

{% include img.html src='/blog/lighthouse/lighthouse-mobile.webp' alt='Past lighthouse scores of 100% in all categories but performance and accessibility at 95%' %}

I had not rerun the lighthouse test in a while. The recent run was not good as pictured below.

{% include img.html src='/blog/lighthouse-revisited/lighthouse-score-current.webp' alt='Recent light mode scores with 87% for performance, 95% for accessibility, and 100% for best practices and SEO' %}

First thing that jumps out, and maybe it's because it's in <span style="color:red">red</span>, is the "Largest Contentful Paint element". My face apparently is just too big. To address this I resized the image to match the dimension it will be displayed. Just to be sure I introduced a little bit of lossy compression using cwebp in the command line. Not enough that you should notice but just enough to reduce the file size a little more.

~~~
cwebp -q 85 new-face-325x325.webp -o home-face-325x325.webp
~~~

From there I got a lower score than before with the report saying the image was low resolution and it was expecting something around 488 pixels square. I ended up resolving this issue by starting over and providing an image of 650x650 for the 325x325 square. This appears to be a requirement for serving to higher density screens.

One thing I did find interesting is that it appears lighthouse is using the light mode as a default. This of course exposes that I did not do enough testing of [color contrast] when setting up the [light mode]. Based on the feedback from the contrast test I've updated the light mode to the following.

<div class="box white">rgb(240,240,240)</div><div class="box medium-green">rgb(0, 87, 59)</div><div class="box medium-blue">rgb(1, 85, 106)</div>

{% include img.html src='/blog/lighthouse-revisited/light-mode-updated.webp' alt='Home page in the latest version of light mode with slightly darker blue and green' %}

As you may expect the dark mode which existed first and was used in the original test meets the contrast requirements.

One more thing I did was to shift some css styling to a sheet that is loaded asynchronously versus the inline critical styling. This has been a bit of guess and check on my part and I'm not sure I have everything where it needs to be just yet. If you see any jumps or restyling when a page loads please let me know.

One thing slowing down the site was font awesome icons for email, mastodon, bluesky, RSS feed, and github. I tried a few different ways to speed this up but ultimately went with doing away with the icons altogether. For now it's kinda nice not having a company's logo on my site.

I worked through the mobile score first as this is usually the most difficult to get right. The standards are understandably higher due to the variety of devices and connections. The main issue here was the picture of my face which was either too large of a file or low resolution. These things seem like opposites but there is a balancing act between quality images and file size. Ultimately I ended up recreating the image from its source and working with the compression of cwebp to get to a high enough quality image while having a low load time in the browser.

Here are the results of these efforts!

## Desktop
{% include img.html src='/blog/lighthouse-revisited/lighthouse-desktop.webp' alt='Desktop Lighthouse score results with all four categories listed at 100%' %}

## Mobile
{% include img.html src='/blog/lighthouse-revisited/lighthouse-mobile.webp' alt='Mobile Lighthouse score results with all four categories listed at 100%' %}

After a bit of trial and error both the mobile and desktop versions of the site have 100% for all four categories! 🎉

There are some optional items on the lighthouse page that I would like to pursue as well so this will likely get revisited again. For now things are faster and more people can interact comfortably with the site.

This is day {{ page.tag_numbers["100 Days To Offload"] }}  of #100DaysToOffload.

[few months back]: /blog/2024/07/26/lighthouse
[lighthouse]: https://github.com/GoogleChrome/lighthouse
[color contrast]: https://dequeuniversity.com/rules/axe/4.10/color-contrast
[light mode]: /blog/2025/04/16/light-and-dark-revisited