---
title: "How I developed the new website from scratch with Gatsby"
date: 2020-06-13
description: "Learn all the parts that went into the making of this website, from conceptual planning and design decisions to the development process and technologies that I've used. "
---

Let's start with a little sump. I began messing with front-end development and UI design back in the start of 2019. By the time — like any other aspiring front-end developer in the world, I guess — I spent some time on building my first little website with very basic and rudimentary HTML & CSS to show off my pet projects and ambitions for the future. I don't regret it at all; we all start somewhere and building yourself a website is a great way to get your hands dirty for the first time when you're starting. 

But as I began to delve deeper and started to write about some of my experiences, the desire to have my own little space to blog about the stuff I liked rose to the surface. 

As we reached the middle of 2020, the COVID-19 pandemic had already caused a massive havoc in the world and essentially shut down any chances of me frequenting college for the rest of the year. I was essentially stuck home like most of the world. Even tough under rather tragic circumstances, this gave me the opportunity to get some grasp at personal projects that were in my head since high-school, but that I never had time to properly execute before.

Along with that came the decision to build a new website from the ground-up and have it be a place where I could centralize all the content I produced under my personal brand. I researched some of the blogs from people who's contents I enjoyed, spent some weeks on back-and-forth between some design choices and what would I ship in a MVP, and decided on a stack where I would build it.

# Coming up with a new layout

First thing's first, I had to come up with a brand new layout for the thing. I went trough some iterations of what I wanted, spending a long time in the borders of the "I want it to feel like you're reading a newspaper kind of experience", but that was ultimately scratched. By the end of April, I had something like this.

A slick modern UI with a dark/light mode theme with very saturated highlights on main elements. Normally I wouldn't go for a fully-fledged design system and UI planning, but I took the liberty of doing so because... I had all the time in the world! I also wanted the whole thing to be part of my portfolio in the future, so there is that.

With the design done, it was time for development. That's where I would expend the most amount of time...

# Why Gatsby?

I'll begin by adressing the massive elephant in the room from nowdays discussions about building blogs with Gatsby.

> "It's funny how many people out there will go over the trouble of putting together a Gatsby or Next.js site to end up having a landing page and two posts."  — Someone on Twitter, probably.

That's actually fair. Opting for Gatsby to bootstrap simple presentational content is massive over-engineering in *my humble opinion*. But, even though I have few posts here as of now, I obviously intend to have much more in the future. That's where some of Gatsby advantages (or Static Site Generation as a whole) comes into play. I'm cutting out on many of the headaches that may arise in the future. Let me take the time to delve deeper into such advantages: 

## Incremental Builds

To understand incremental builds, we first need to understand how Gatsby builds our website.

Gatsby is, essentially, a wrapper around React. That means that you build Gatsby websites using the same stuff you use to build React components. The main difference is that pure React will have it's content generated dinamically by the server on each client request. With Gatsby, the HTML from the webpage is pre-generated at build time and served already baked to the client. 

By understanding this, you can already see why static sites are a good idea for blogs; the content of a blog is not dynamic! It is not like this post is going to show different content to different users. Every client will load exactly the same thing. 

And where does incremental builds come into play?

As per convention the "build" process is the convoluted part of the whole static site shennanigans. During the build process, Gatsby will make all the API calls needed to fetch the data you requested and generate every possible HTML page. Fundamentally, the bigger your website gets, the longer the build time will be. 

Incremental builds seeks to solve that problem by rebuilding only the tweaks you made to the code from one build to another, not the entire goddam thing. Instead of spending minutes rebuilding the thousands of pages in your webpage, you rebuild only what you've changed. 

That's already a reality with Gatsby Cloud (altough, at the time of writing this, with support for a limited list of CMS integrations), and the folks at Next.js seem to be working on similar solutions. Soon that coverage will extend to Markdown as well and I will be able to take advantage of this in my particular situation.

## Plugins, plugins everywhere!

Gatsby is blessed with an enormous quantity of plugins that deal with many commons hassles like SEO, data sourcing and responsive/optimized image delivery. The whole plugin ecosystem makes the development process very modular, extremely customizable, and really bump the development experience. Less time trying to solve triviality, more time coding actual content.

Here are some of the plugins that went into the building of this site for example:

- gatsby-source-filesystem - Allows me to source content that sits inside the filesystem (Markdown files that make up the blog posts on my case).
- gatsby-transformer-remark - Responsible for parsing through the Markdown files and making them into HTML that the browser can understand.
- gatsby-remark-prismjs - Handles the syntax highlighting for code snippets.

And that's just the tip of the iceberg. Gatsby plugins can solve a massive array of problems with none to very little configuration.

## SEO and Performance

By default, the fact that we are dealing with a static site means that we are very on pair with best SEO practices, and taking advantage of a lot of performance shenanigans that come with the concept. Gatsby takes it one step further by automatically doing code-splitting, minifying, packaging on the build process, significantly reducing the work you have to yourself to achieve good performance metrics.

If all of this got you interested in some degree, you can check the [Gatsby Conceptual Guide](https://www.gatsbyjs.org/docs/conceptual-guide/) on their official webpage and learn more in-depth details about the development and build process used when building Gatsby applications. 

# Under the hood

It's time to explore some of the components and concepts that make up this website. Starting with a high-scope view of the thing, here is a list of technologies I'm using as of now:

- GraphQL - Sourcing content and presenting structured data.
- Styled-Components - CSS-in-JS library.
- Gatsby Cloud or Netlify
