---
layout: post
type: post
title:  "Light and Dark"
date:   2025-03-23 18:10:00
tags: [css, meta]
blurb: I'm a fan of dark mode on sites, in development editors, and the operating system too. 

comments:
    id: 114214249048607987
---

<!--more-->

I'm a fan of dark mode on sites, in development editors, and in the operating system too. Staring at a mostly white screen all day is exhausting and I like the way the content on screen emerges from the darkness with dark mode enabled.

Inspired by [this post] from James G, I set about creating a light mode for this site. This is the reverse from what James had done as he started with a light mode but the the ideas are the same.

My :root to make this work currently looks like this.

~~~
:root {
    color-scheme: light dark;
    --dark-background-color: rgb(26, 26, 26);
    --dark-foreground-color: rgb(32, 255, 188);
    --dark-link-color: rgb(25, 209, 255);
    --dark-text-color: rgb(240,240,240);

    --light-background-color: rgb(240,240,240);
    --light-foreground-color: rgb(0, 119, 83);    
    --light-link-color: rgb(1, 151, 189);
    --light-text-color: rgb(26, 26, 26);

    --line-color: rgba(211, 211, 211, 30%);
  }
~~~

The ```color-scheme``` term is required to respect the users setting. 

With the global variables set it's just a matter of using ```light-dark()``` to set the appropriate colors.

~~~
p, li, ul {
    color: light-dark(var(--light-text-color), var(--dark-text-color));
}
~~~

I still really prefer the dark mode version of the site, so check that out if you're interested. It's just a matter of toggling between light and dark in the browser settings. In Zen browser it's in ```General > Language and Appearance``` which means I don't even have to scroll in the settings.

Which ever mode you prefer I hope you like what you see.

[this post]: https://jamesg.blog/2024/11/24/dark-mode