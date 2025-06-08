---
layout: post
type: post
title:  "Updated Code Block Styling"
date:   2025-04-30 13:30:00
tags: ['Meta', '100 Days To Offload', "Web Development"]
blurb: Really didn’t like the look of code on the previous post. This has been on the todo list and I just went ahead and made it happen today. Now code is styled using rouge and monokai styling.
comments:
    id: 114428066848908841
---
Really didn't like the look of code on the previous post. This has been on the [todo] list and I just went ahead and made it happen today. Now code is styled using [rouge] and monokai styling.

Here is an example of html formatting with line numbers.

{% highlight html linenos %}
<marquee>Hello World!</marquee>
{% endhighlight %}

Here is a result of the impressive code.

<marquee>Hello World!</marquee>

This was implemented by updating the _config.yml for the site like so.

{% highlight text linenos %}
markdown: kramdown
kramdown:
  input: GFM
  syntax_highlighter: rouge
{% endhighlight %}

With the inclusion of styling css in the header.

{% highlight html linenos %}
<link rel="stylesheet" href="{{ "/assets/css/syntax_monokai.css" | relative_url }}" media="print" onload="this.onload=null;this.removeAttribute('media');" fetchpriority="low">
{% endhighlight %}

Not a lot to get it readable which is nice. I'm done with same day changes now I think.

This is day {{ page.tag_numbers["100 Days To Offload"] }}  of #100DaysToOffload.

[todo]: /todo
[rouge]: https://github.com/rouge-ruby/rouge