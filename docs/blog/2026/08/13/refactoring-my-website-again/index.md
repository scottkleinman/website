---
title: Refactoring My Website (Again)
template: blog_post.html
hide:
    - navigation
    - toc
previous: "/blog/"
previous_title: "Blog"
next: "/blog/2021/07/27/adding-mirador/"
next_title: "Mirador Page Added to Website"
tags:
    - blog
    - website
---

*Published on 13 August 2026 12:00 AM*

Over the past few years, my upkeep on my website has been miserable. I adopted the static site generator [11ty](https://www.11ty.dev/){target="_blank"} in 2021 with the hope that it would make my life easier by allowing me to build locally before deploying to my server on [Reclaim Hosting](https://www.reclaimhosting.com/){target="_blank"}. 11ty is a great tool, but I have not been using it to its full potential. Although it is written in JavaScript, which is not my preferred language, I chose it over various Python static site generators because of its excellent documentation and active development community. But this would have to be re-evaluated if a better Python tool came along.

But the real reason I failed to maintain my site is that I didn't have a smooth deployment path. I would build (generate) the entire site locally, then upload the all the files to my server on Reclaim Hosting, and then check the site to see if it worked. Either that, or I would make a change to a single file and then upload that file to the server, which could break the site in any number of ways. I dreamed of putting my Markdown site on GitHub and using version control, but there was no free and easy-to-implement way to deploy from GitHub to Reclaim Hosting &mdash; at least not one that I could implement in my spare time. There's an argument that I should give up on my shared hosting on Reclaim Hosting and move all my content to GitHub and my domain to GitHub pages, but I was not ready to do that then, and I'm still not now.

So for the past five years, I've been making minimal updates to my office hours and other details on the site without modifying the layout and functionality (and without adding blog posts). The timing noticeably coincides with when I began working on the Lexos Python library, so it makes sense that I would have less time to devote to my website. The next release of Lexos is coming out soon, and I'll write a separate blog post about that. Its near completion has also prompted a re-think of my website. To make a long story short, I needed a tool for writing code documentation, and I stumbled on [MkDocs](https://www.mkdocs.org/){target="_blank"}, a widely-used Python static site generator, and the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/){target="_blank"} framework built on top of it. This allowed me to build a rich documentation website for Lexos and crucially gave me lots of practice maintaining it on GitHub. My work on Lexos has also made me more comfortable with GitHub Actions. If you're not familiar with GitHub Actions, it is a tool that allows you to automate tasks on GitHub, such as building and deploying your website whenever you push (upload) a change. I realized that I could use GitHub Actions to build and deploy my website from GitHub to Reclaim Hosting, which would solve my version control and deployment bottleneck.

One further twist is that the makers of Material for MkDocs are replacing it (for reasons that I won't go into) with a new tool called [Zensical](https://zensical.org/){target="_blank"}. Zensical is written in Rust, which makes it blindingly fast. Although it is not yet full-featured, my experiments with it for a few smaller projects have been very successful. It has been a delight to use (and, at the moment, it is mostly compatible with Material for MkDocs, which makes it very familiar). So I have taken the plunge and adopted Zensical as the static site generator for my new website.

Zensical is meant for code documentation, not for personal websites, but I have been able to adapt it to my needs, as it is very customisable. That understanding that the layout and styling is really intended for another purpose has helped me to let go of the need to implement too much fancy design. Although I am attracted by the idea of making an attractive and unique website, I need the reminder that I have more important things to do with my time. So the new site is a little plainer and will probably stay that way. The main issue I encountered is that Material for MkDocs blog plugin has not yet been ported over to Zensical. I don't write blog posts very often, but I need somewhere to put my past blog posts somewhere to put new ones (like this one), and perhaps something to encourage me to write more. For now, it has been pretty easy to fake blog functionality. The file structure is the same as my 11ty blog, and I just added a custom template to replace the footer navigation with Previous and Next links generated from the front matter of each blog post. I could actually make this more sophisticated, but for the number of posts I have, it's hardly worth it. I can wait for the blog functionality to be implemented in Zensical. (There are probably other fast static site generators written in Rust that have blog functionality, but I'm familiar enough with Zensical that I don't feel the need to try out other options.)

So here we are, with a new website that is easier to maintain and update. I hope to be able to keep it up-to-date with my work and interests, and perhaps even write more blog posts.
