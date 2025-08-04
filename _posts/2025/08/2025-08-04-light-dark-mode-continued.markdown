---
layout: post
type: post
title:  "Light and Dark Mode Continued"
date:   2025-08-04 15:00:00
tags: ['CSS', 'Meta', '100 Days To Offload']
blurb: Added a toggle to the footer of my site to easily change from light and dark mode.
comments: 114971882473670582
    id: 
---

Why are we doing this again and so soon? Well I really wanted a toggle between light and dark so people that visit the site could easily change between light and dark mode. This meant the following light and dark mode setup would need to be tweaked.

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

I've broken out the color schemes and now declare them as follows. 

~~~ css
body {
    --background-color: rgb(240,240,240);
    --text-color: rgb(26, 26, 26);
    --link-color: rgb(1, 85, 106);
    --foreground-color: rgb(0, 87, 59);
    color-scheme: light;
}
/* Dark mode styles */
body.dark-mode {
    --background-color: rgb(26, 26, 26);
    --text-color: rgb(240,240,240);
    --link-color: rgb(25, 209, 255);
    --foreground-color: rgb(32, 255, 188);
    color-scheme: dark;
}
~~~

This allows for dark-mode to be specified via JavaScript from the button in the footer.

~~~ javascript
// Set the initial theme
setTheme(initialTheme);

// Listen for changes in the user's preferred color scheme
prefersDarkScheme.addEventListener('change', e => {
    const newTheme = e.matches ? 'dark' : 'light';
    setTheme(newTheme);
});

// Update local storage when theme is toggled
document.getElementById('theme-toggle').addEventListener('click', function() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    setTheme(isDarkMode ? 'light' : 'dark');
});
~~~

I do see some flickering with this implementation so I will probably continue or revisit this again in the future to eliminate that and improve the setup in some other ways as well.

You can try this out for yourself by clicking on either the sun or the moon in the footer depending on your default settings.

This is day {{ page.tag_numbers["100 Days To Offload"] }}  of #100DaysToOffload.