---
layout: post
title:  "Adding Pagination"
date:   2025-04-07 19:30:00
tags: ['Meta', 'Blog', 'Pagination']
blurb: Adding back in pagination on this here website.

comments:
    id: 
---
I don't remember exactly why I removed the pagination for this site but with the increase of blogs posts I felt that I needed to add it back.

After trying and failing to get the standard _jekyll-paginate_ to work I went ahead and setup _jekyll-paginate-v2._ This was easier than some had implied and look now there are multiple pages on this here blog.

This was on the [todo] list so I updated that as well.

First you must install the gem.

~~~
gem install jekyll-paginate-v2
~~~

Then make sure to update _config.yml. Obviously you don't need all of these settings but this is what I'm using currently.

~~~
plugins:
  - jekyll-paginate-v2

pagination:
  enabled: true
  per_page: 5
  permalink: '/blog/page/:num/'
  title: ':title - page :num'
  limit: 0
  sort_field: 'date'
  sort_reverse: true
~~~

One thing that did trip me up is I needed to set two permalinks, one for the page itself and another within the pagination.

~~~
---
layout: page
title: blog
permalink: /blog/
pagination:
  enabled: true
  permalink: /blog/page/:num/
---
~~~ 

From here I added some padding to the pagination and centered it to make sure it was easy to see.

[todo]: /todo