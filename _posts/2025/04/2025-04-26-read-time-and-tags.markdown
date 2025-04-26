---
layout: post
title:  "Read Time and Tags"
date:   2025-04-26 15:00:00
tags: ['Meta', '100 Days To Offload']
blurb: Having dramatically scaled back this site to make the restyling easier I have been slowly adding back in some removed features.
comments:
    id: 114405991731505054
---

Having dramatically scaled back this site to make the restyling easier I have been slowly adding back in some removed features. One thing I've wanted to enable for a while is making a posts tags visible. I have continued to add tags to posts as they're going out but that extra bit of information has not been shared anywhere. 

Now I've added to each post on the blog page so anyone visiting the site can see how a post is tagged when deciding whether or not to click into read the whole article. These also appear again once you've clicked through to the full post.

Below are the current light and dark mode versions of the current stylings. 

{% include img.html src='/blog/read-time-and-tags/tag-dark.webp' alt='Image of the dark version of the Meta and 100 Days to Offload tags associated with this blog post' %}

{% include img.html src='/blog/read-time-and-tags/tag-light.webp' alt='Image of the dark version of the Meta and 100 Days to Offload tags associated with this blog post' %}

The tags are styled as buttons which when clicked take you to the tag index page. Initially I had the tags slugified[^1] which didn't take you to the correct part of the page. This has been removed so each link has a # and should navigate you to the part of the tag index page with similar posts. I am also adding a feature to the [todo] page for related posts using this tagging. As more posts are added the opportunities to link between posts and filter for specific types of posts increases. I think there will be more to come there.

Another feature I've added to the site is a read time calculator. The site is using the [jekyll_reading_time] gem to calculate the average read time of each post. For now I've included this information with each post blurb on the blog page as well as at the top of each post. Adding this feature has really highlighted for me that I mostly post short form blog posts. Essentially, each of these could could have just been a tweet/toot (Xitter/Mastodon). The current longest post is about 8 minutes in read time and it's the [personality test results].

I don't know that I want to be writing novels or anything but I do want to dig into some things more. Thinking that an average of five minutes would be a good amount of time to aim for. That of course is an arbitrary metric and not something I would force. I tend to be overly succinct in my writing so I'll be working on that.

These are things I've liked from other sites I've visited and decided to incorporate here. I'm not sure if I like the styling of the tags but that is fairly easy to change. I don't know if I like the linking or the format of the [tag index page] either.

Anyway, as with everything else around here it's a work in progress.

This is day 10 of #100DaysToOffload.

[jekyll_reading_time]: https://github.com/mslinn/jekyll_reading_time
[todo]: /todo
[tag index page]: /tags
[personality test results]: /blog/2025/03/24/personality-test

[^1]: A slug refers to human readable and URL friendly text like the format of the URL for this post. Often this involves replacing spaces with dashes and removing special characters. The term is carried over from the print world.