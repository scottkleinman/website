---
title: Site Refresh
template: blog_post.html
hide:
    - navigation
    - toc
tags:
    - website
    - web development
previous: "/blog/2021/07/27/adding-mirador/"
previous_title: "Mirador Page Added to Website"
next: "/blog/2016/03/15/digital-humanities-projects-with-small-and-unusual-data/"
next_title: "Digital Humanities Projects with Small and Unusual Data"
---

*Published on 21 July 2021 12:00 AM*

My website has been in desperate need of a refresh for a long time, but research commitments and the trials and tribulations of the pandemic of 2020 (and beyond) have delayed the process. But I am finally getting around to it. In this post, I've tried to document what technologies I have used without dwelling too much on why or on evaluating the merits of the technologies themselves. I might take up that task at some later date if I feel that I my own personal experience is valuable.

## Background

Many years ago I had a basic HTML site hosted on my university's web server, but I had a number of simultaneous projects developing primitive content management systems written in PHP. Wordpress was still in a primitive state at the time, but I got the CMS bug. By the time I eventually decided to host my website privately, it was mature, and by default I set it up using Wordpress. I quickly grew to hate it. This is not the place for a criticism of Wordpress, but part of my problem was that my research took me to Python, and I lost touch with the PHP ecosystem. That alone made Wordpress development hard. This also applied to the Wordpress alternatives I evaluated.

Developing [Lexos](/projects/lexos){target="_blank"} in Python had given me a great respect for the [Python-Flask](https://flask.palletsprojects.com/en/2.0.x/){target="_blank"} framework, and I naturally wanted to use it for my website. This became possible when I discovered that my host, [Reclaim Hosting](https://reclaimhosting.com/){target="_blank"}, could run Python. So I went ahead and built a custom website. The result was pretty good (I think), although I made a lot of mistakes in making it easy to maintain (mistakes that I probably wouldn't make now that I am much better Python coder). The site satisfied my major goals which were as follows:

1. Allow me to author content in Markdown.
2. Leverage [Bootstrap](https://getbootstrap.com/){target="_blank"} to produce a better looking site without having to tweak Wordpress templates or use plugins.

I didn't attempt to store content in a database, which meant having a search function was a pain.

Updating content worked pretty well, but, to my dismay, the new site didn't incentivise me to contribute regularly to the blog feature. My last update was in 2016. Both the framework and the design are also now aging. Bootstrap is now on version (I used version 2), and the back end was coded in Python 2, which is no longer supported. So it was time to look into what technologies are available in 2021.

## Enter the Jamstack

The biggest development of the last couple of years is the growth of the [Jamstack](https://jamstack.org/what-is-jamstack/){target="_blank"} architecture. Without over-complicating things, this basically means that an application is used to pre-build a site into static HTML, CSS, and Javascript files with nothing computed by the server on the fly (making websites fast). You develop on your own computer and then upload to the server to make the site public. Tools for generating sites using the Jamstack architecture are called static site generators. Perhaps the best known is [Jekyll](https://jekyllrb.com/){target="_blank"}, which is much used in the DH community because it is baked in to GitHub. I liked the idea of static generators. They are very similar to developing in Flask and then "freezing" the Flask site into a bunch of static pages. But I didn't want to use Jekyll because it requires Ruby, which I didn't want to learn (it has a host of other limitations).

There are in fact a huge number of static site generators, written in a variety of programming languages. I ultimately adopted [Eleventy](https://www.11ty.dev/){target="_blank"}, which "created to be a JavaScript alternative to Jekyll". It is very young, but I have found it to be full-featured, well-documented, and easy to set up (and it has a cute, [floating posssum](https://www.11ty.dev/blog/logo-homage/){target="_blank"} for a logo). It also allows me to use the [Nunjucks](https://mozilla.github.io/nunjucks/){target="_blank"} templating system, which is basically a Javascript port of the [Jinja2](https://jinja.palletsprojects.com/en/3.0.x/){target="_blank"} system I am used to using in Flask. The major downside is that there are not many ready-made themes, which is challenging if, like me, you lack good design skills. I opted for the relatively vanilla Vredeburg theme (more on that below), which actually ended up producing a site that looks subtly like my old one.

As with the Flask site, having a search feature was a challenge. Since the site is static, it must be indexed each time I build it, and the index has to be uploaded with the server. There were some examples of how to do this with Eleventy online, but they didn't exactly fit into my site's architecture. I was pleased that the Vredeburg theme actually had site indexing built in, which meant that I just needed to concentrate on the Javascript necessary to read it. This remains an inherent weakness of static web sites, though. The index file can become enormous as site content grows. But I don't anticipate that being a problem for a long time.

## Riding the Tailwinds

The Vredeburg theme is set up using [TailwindCSS](https://tailwindcss.com/){target="_blank"}, a new "utility-first" CSS framework for styling websites, whereas I had previously used Bootstrap. So I knew going into things that I was going to have to learn a new technology. It turned out to be more challenging than it could have been because the theme didn't have any documentation about how TailwindCSS was integrated. But I eventually figured it out. Did I make the right decision? There are plenty of articles on the web discussing the relative merits of TailwindCSS, Bootstrap, and other frameworks (or no framework), so I won't dwell on what I like and what I don't. Sometimes TailwindCSS is better and sometimes it's worse. But I now know another technology.

## The Challenge of Images

Good-looking websites have images. That's just a fact, but making images look good (especially on both computers and mobile devices) is *really* hard. First you actually have to get appropriate pictures. In my case, the cards on the blog page each has a thumbnail image that is 960x500 pixels. Getting an appropriate picture with landscape orientation that can be resized to these dimensions is a challenge. It means that writing a blog post isn't as simple as just writing the text. There is a pretty time-consuming step prior to publishing, one that may require me to use stock photos. Will I really be committed enough to do this? That remains to be seen. I may in the end have to disable the pretty card display for my blog posts.

## Further Developments

I have just copied over my dynamic display of my CV, and I like the result. As on my old site, my long CV is divided into sections, each of which can be viewed by clicking on menu links (hiding the others). This time around, I have added the ability to display all the sections together at the click of a button in case the user wants to scroll through the whole thing.

I also need to think about what to put on my course pages themselves. On my old site, each course page was intended to be a complete course website. However, especially with online teaching during the pandemic, I have been making increasing use of my university's learning management system, and students get confused if they have to go to more than one location. So I may scale it back to just a basic course description. If I want to publish my syllabus, I can do it as a PDF and add a download link. If I *really* need a more content rich course website, it's probably better to do it with GitHub pages and then link or redirect there from the course page on my personal website.

At the stage when I am writing this post, the website's refresh is functionally complete. There are a host of aesthetic improvements I want to make and a lot of behind the scenes refactoring that only matters to people who care about coding standards (another discussion for another time). So that's all about the site refresh for now. I will write more posts as I build more functionality, and maybe there will be another about the deployment process.
