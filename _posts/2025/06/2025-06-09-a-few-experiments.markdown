---
layout: post
type: post
title:  "A Few Experiments"
date:   2025-06-08 16:50:00
tags: ['experiments', 'meta', '100 Days To Offload']
blurb: Working on a few content type experiments and reporting on them.
comments:
    id: 114649754851430965
---
First thing first, I added the post date to the 'recent posts' section of the home page of the site to add a little more context. With some of these experiments that section may need to change again but I much prefer this little bit of extra content.

## Media

One thing I've really enjoyed reading on other folks personal sites is what types of media they are consuming and how they felt about it. Reviews of books, music, movies, etc, seem like an interesting way to break away from some of the more meta/technical posts. 

The nice thing here too would be the lack of required presentation. As in I don't have to have accomplished anything apart from reading, watching, listening, and forming an opinion. 

I'll have a more lengthy write up when I roll it out completely but for now posts are all tagged with a type and I can use that to communicate the type of content in the blog section and if necessary limit the scope of an RSS feed. For example if you wanted to subscribe to standard blog posts and not movie reviews, there could be separate feed roll for that. For now you'll see [post] included in the main blog for everything as I haven't yet posted any other type.

## Stats

As a companion enhancement to the Media section I thought it would be neat to present some site specific stats once there are more posts and types of posts. As of now the site only uses a standard Jekyll implementation with no database. 

I'm curious just how far this can be taken and when do the demands of displaying information about what is here require a database. Will probably use a javascript library to display some charts and graphs, but I'm not sure which one as of yet.

## Links

Similar to Media, I've seen a few implementations of this idea but I'm working on an implementation of a post that appears in the blog with a quick blurb and a direct link to an article. There would not be any dedicated page for this post so it would require some additional setup to make it work as expected. Trying to decide if this is worth doing or if a small blog post would be a better way to handle this idea. Sometimes you just want to say, "here is an interesting article go read it!"

## Webmentions

Disappointed that I ripped out this implementation. I just wasn't sure the best way to integrate it with what I'm already doing with mastodon comments. I think it would be nice if folks had another way to comment but I'm just not happy with the way I was handling it. Something to revisit sometime soon.

## Portfolio

It's on the [/todo] and I think the steps to implement the Media section can also be used to make this happen. Portfolio pieces hit the blog which is the waterhose of information that happens on this site and since they're tagged with a type of 'portfolio' for example can be filtered and presented in a different manner on a dedicated portfolio page.

[/todo]: /todo