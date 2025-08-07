---
layout: post
type: post
title:  "Selfhosting FreshRSS"
date:   2025-08-07 17:00:00
tags: ['RSS', 'Meta', '100 Days To Offload']
blurb: I finally did it! I went ahead and setup FreshRSS on my PC to transition away from Feedly.
comments:
    id: 
---

I finally did it! I went ahead and setup FreshRSS on my PC to transition away from Feedly. I've been using Feedly since Google Reader shut down and have enjoyned it, in part because I was grandfathered into having seemingly unlimited feeds.

What really started this is the incessant advertisement but I'm also interested in doing other self host things like Immich and Jellyfin to name a few.

Anyway, I was seeing a few posts on Mastodon about FreshRSS from [Joel] and others so I went ahead and did it. I followed this [setup] to get everything installed including [nginx] so I can use an app on my phone when I'm away from my computer/house. This is the first persistent docker container I have running on my machine. I think I may switch Jellyfin over to using a container too if just for the portability. Things went mostly smooth apart from when I borked my dns completely and had to undo some things and wait for everything to update.

One of the first things I did once very thing was up and running was to do some much needed maintenance on the feeds I'm subscribed to. After 12 years of being on Feedly without really any clean up it was time. There were a few feeds that had not been updated in a decade.

Then once it was cleaned up and I had read through all the remaining feeds it was time to take the OPML for Blaugust and dump that in and have a never ending list of things to read. I imagine I'll prune that group list and integrate it with the rest of my setup over time. Until then I'm excited to see what people will be posting for the rest of the month of August.

We're almost halfway through the year and I'm not even halfway through the 100 Days to Offload. Can you claim completion of Blaugust at the end even if you didn't sign up? Probably not.

Anyway FreshRSS installation and a little customization has gone pretty well and I've learned a bit about Docker, nginx, and the dns required to use a third party app. I'm on iOS and am using NetNewsWire. If anyone has suggestions to other RSS feed apps that support FreshRSS I'm interested in trying them.


This is day {{ page.tag_numbers["100 Days To Offload"] }}  of #100DaysToOffload.

[Joel]: https://hachyderm.io/@joel@fosstodon.org
[setup]: https://www.selfhostedninja.com/freshrss-your-self-hosting-setup-and-management-guide/
[nginx]: https://nginx.org