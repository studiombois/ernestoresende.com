---
title: "How I developed the new website with Gatsby"
date: 2020-06-13
description: "Making a blog has never been such a pleasant experience."
---
<div class='anchor' id='introduction'></div>
<div class='no-heading-introduction'>

# Introduction

</div>

Let's start with a little summary. I began messing with front-end development and UI design back in the start of 2019. By the time — like any other aspiring front-end developer in the world, I guess — I spent some time on building my first little website with very basic and rudimentary HTML & CSS to show off my pet projects and ambitions for the future. I don't regret it at all; we all start somewhere and building yourself a website is a great way to get your hands dirty for the first time when you're starting. 

But as I began to delve deeper and started to write about some of my experiences, the desire to have my own little space to blog about the stuff I liked rose to the surface. 

As we reached the middle of 2020, the COVID-19 pandemic had already caused a massive havoc in the world and essentially shut down any chances of me frequenting college for the rest of the year. I was essentially stuck home like most of the world. Even tough under rather tragic circumstances, this gave me the opportunity to get some grasp at personal projects that were in my head since high-school, but that I never had time to properly execute before.

Along with that came the decision to build a new website from the ground-up and have it be a place where I could centralize all the content I produced under my personal brand. I researched some of the blogs from people who's contents I enjoyed, spent some weeks on back-and-forth between some design choices and what would I ship in a MVP, and decided on a stack where I would build it.

<div class='anchor' id='coming-up-with-a-new-layout'></div>

# Coming up with a new layout

First thing's first, I had to come up with a brand new layout for the thing. I went trough some iterations of what I wanted, spending a long time in the borders of the "I want it to feel like you're reading a newspaper kind of experience", but that was ultimately scratched. By the end of April, I had something like this:

// PUT A PHOTO OF THE MAIN PAGE LAYOUT HERE ONCE IT`S COMPLETE

A slick modern UI with a dark/light mode theme with very saturated highlights on main elements. Normally I wouldn't go for a fully-fledged design system and UI planning while working on a tight schedule, but I took the liberty of doing so because... I had time to kill. 

With the design done, it was time for development. That's where I would expend the most amount of time...

<div class='anchor' id='why-gatsby'></div>

# Why Gatsby?

I'll begin by adressing the massive elephant in the room from nowdays discussions about building blogs with Gatsby.

> <p class='last-line'>"It's funny how many people out there will go over the trouble of putting together a Gatsby or Next.js site to end up having a landing page and two posts."  — Someone on Twitter, probably.</p>

That's actually fair. Opting for Gatsby to bootstrap simple presentational content is massive over-engineering in *my humble opinion*. But, even though I have few posts here as of now, I obviously intend to have much more in the future. That's where some of Gatsby advantages (or Static Site Generation as a whole) comes into play. I'm cutting out on many of the headaches that may arise in the future. Let me take the time to delve deeper into such advantages:

<div class='anchor' id='incremental-builds'></div>

## Incremental Builds

To understand incremental builds, we first need to understand how Gatsby builds our website.

Gatsby is, essentially, a wrapper around React. That means that you build Gatsby websites using the same stuff you use to build React components. The main difference is that pure React will have it's content generated dinamically by the server on each client request. With Gatsby, the HTML from the webpage is pre-generated at build time and served already baked to the client. 

By understanding this, you can already see why static sites are a good idea for blogs; the content of a blog is not dynamic! It is not like this post is going to show different content to different users. Every client will load exactly the same thing. 

So, where does incremental builds come into play?

As per convention the "build" process is the convoluted part of the whole static site shennanigans. During the build process, Gatsby will make all the API calls needed to fetch the data you requested and generate every possible HTML page. Fundamentally, the bigger your website gets, the longer the build time will be. 

Incremental builds seeks to solve that problem by rebuilding only the tweaks you made to the code from one build to another, not the entire goddam thing. Instead of spending minutes rebuilding the thousands of pages in your webpage, you rebuild only what you've changed.

<aside>
  <strong>Are Markdown edits a code change, or data change?</strong>
  <p class='last-line'>As of now, the fastest builds will be with those using CMSs that support incremental updates as Gatsby Cloud can then leverage the site’s local build cache. Incremental Builds currently only support data changes, and Markdown counts as a code change; it will trigger an entire re-build. Gatsby team is still working on making incremental builds available to code changes in the future.</p>
</aside>

<div class='anchor' id='plugins-plugins-everywhere'></div>

## Plugins, plugins everywhere!

Gatsby is blessed with an enormous amount of plugins that deal with many commons hassles like SEO, data sourcing and responsive/optimized image delivery. The whole plugin ecosystem makes the development process very modular, extremely customizable, and really bump the development experience. Less time trying to solve triviality, more time coding actual content.

Here are some of the plugins that went into the building of this site for example:

- <em>gatsby-source-filesystem</em> - Allows me to source content that sits inside the filesystem (Markdown files that make up the blog posts on my case).
- <em>gatsby-transformer-remark</em> - Responsible for parsing through the Markdown files and making them into HTML that the browser can understand.
- <em>gatsby-remark-prismjs</em> - Handles the syntax highlighting for code snippets.

And that's just the tip of the iceberg. Gatsby plugins can solve a massive array of problems with none to very little configuration.

<div class='anchor' id='seo-and-performance'></div>

## SEO and Performance

By default, the fact that we are dealing with a static site means that we are very on pair with best SEO practices, and taking advantage of a lot of performance shenanigans that come with the concept. Gatsby takes it one step further by automatically doing code-splitting, minifying and packaging on the build process, significantly reducing the work you have to yourself to achieve good performance metrics.

If all of this got you interested in some degree, you can check the [Gatsby Conceptual Guide](https://www.gatsbyjs.org/docs/conceptual-guide/) on their official webpage and learn more in-depth details about the development and build process used when building Gatsby applications.

<hr>

<div class='anchor' id='under-the-hood'></div>

# Under the hood

I quickly glanced over some of my design decisions and advantages of using a static site generator like Gatsby to build it. Now it's time to explore some of the components and concepts that make up this website.

<aside>
  <strong>Intended audience</strong>
  <p class='last-line'>This blog post is written for people with some degree of previous experience with React, so don't expect me to go into details about core React principles.</p>
</aside>

Starting with a high-scope view of the thing, here is a list of relevant technologies I'm using as of now:

- <em>GraphQL</em> - This fella is the one responsible for sourcing content and presenting structured data. We write a query like this:

```graphql
query MyQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
}
```

And this is how it will return the data stored inside Gatsby configuration file:

```graphql
{
  "data": {
    "site": {
      "siteMetadata": {
        "title": "Ernesto Resende",
        "description": "UI Designer and Front-End Developer. Blogs about design, development and tech stuff."
      }
    }
  }
}
```
Now we can source and use that data to populate SEO components for example.

- <em>Remark</em> - As said before, remark is responsible for everything related to parsing Markdown content into HTML. In this project, I'm taking advantage of a full plethora of gatsby-remark "sub-plugins" such as `image`, `oembed`, `lazy-load`, and `prismjs` which is not exactly a remark dependency, but we'll get to that later.
- <em>Styled-Components</em> - CSS-in-JS library. The name says everything; it creates named components that you can style with CSS directly inside your JavaScript file.
- <em>Gatsby Cloud</em> - Just like Vercel dit with Next.js, Gatsby came out with their own set of cloud solutions that integrate with their build system. And their pricing range is very fair so far, so I saw no reason not to jump on it.

If we were to get a high-scope view of the thing, the structure this site uses is mostly the same we get recommended by Gatsby with their documentation.

```bash
├── LICENSE
├── README.md
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── package.json
├── src
│   ├── components
│   ├── content
│   │   └── posts
│   ├── icons
│   ├── pages
│   ├── styles
│   │   ├── GlobalStyles.js
│   │   ├── PrismStyles.js
│   │   ├── media.js
│   │   ├── mixins.js
│   │   └── theme.js
│   └── templates
│       ├── BlogList.js
│       └── BlogPost.js
├── static
├── webpack-alias.js
└── yarn.lock
```

All the components, pages, templates and stylesheets sits under the `src` directory. The Markdown files are also there on my case, but there is no rule telling you that you can't put them somewhere else, it's just my personal preference.

Speaking of Markdown, remember the GraphQL used to query for site metadata? The same approach is used to source Markdown files from the filesystem. With the plugins `gatsby-source-filesystem` and `gatsby-transformer-remark`, they can be sourced with a simple query that returns all the data from the front-matter, along with the document body.

<div class='anchor' id='styling-with-styled-components'></div>

## Styling with Styled Components

With styled-components, styling rules sit right next to their JSX elements in the same document (separating the component in a document file and style file also works, but having everything in one file looks cleaner, as long as the styles there belong to the same component.

A regular component will end up looking somewhat like this:

```jsx
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HeroMask from '@icons/HeroMask';

import media from '@styles/media'
import mixins from '@styles/mixins';

const MainContainer = styled.div `
  height: 350px;
  background: var(--color-gradients);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.tablet`height: 400px;`};
  ${media.thone`height: 450px;`};
  ${media.phablet`height: 500px;`};
  ${media.phone`height: 550px;`};
`;
const HeaderWrapper = styled.div `
  padding-top: 36px;
  ${mixins.sidePadding}
  ${mixins.desktopAlignCenter}
`;
const HeaderMaskWrapper = styled.div `
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 3;
  bottom: -20px;
`;

const BlogHeader = ({ children }) => {
  return (
    <MainContainer>
        <HeaderWrapper>
          {children}
        </HeaderWrapper>
        <HeaderMaskWrapper>
          <HeroMask />
        </HeaderMaskWrapper>
    </MainContainer>
  )
}

BlogHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default BlogHeader;
```

<aside>
  <strong>Webpack aliases</strong>
  <p class='last-line'>You can use aliases instead of the absolute path when working with webpack imports. Set up a a <code>webpack-alisases.js</code> in the root of your project. After that, use the require method in the <code>gatsby-config.js`</code> also located at the root of your Gatsby project.</p>
</aside>

You may be asking what are these `media` and `mixins` imports.

The mixins store CSS properties that are frequently repeated in various components, like aligning a whole container to the center for example.

Inside `mixins.js`:

```jsx
import { css } from 'styled-components';

const mixins = {
  desktopAlignCenter: css`
    margin: 0 auto;
    width: 100%;
    right: 0px;
    left: 0px;
    max-width: 1100px;
  `,
};

export default mixins;
```

That mixin can then be called in a component like:

```jsx
import mixins from '@styles/mixins;

const Main = styled.div `
  ${mixins.desktopAlignCenter};
`
```

For global styles that are reused across the entire project, styled-components provides the createGlobalStyles API. They are used on a GlobalStyles file that sits on the `styles` directory.

```jsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
      font-family: ${fonts.Jost};
      font-size: ${fontSizes.xs};
      color: var(--color-text);
      text-rendering: optimizeLegibility;
      background: var(--color-background);
    }
`
```

You may also have noticed that I use a mix of JavaScript and CSS variables to hold the values that go on CSS properties. That happens because the Dark/Light Mode Toggle uses CSS variable to switch the values. We will get to that in a bit.

<div class='anchor' id='managing-post-content'></div>

## Managing post content

Usually content management befalls to a CMS, but I like having things at my fingertips and writing raw Markdown gives me fine-grained control over the content. So what do I do to manage the chaos.

Well, I use Notion. It is basically a notes application that uses a Rich-Text editor. The nice part is that as soon as I have a draft ready, I can quickly export it from Notion to Markdown, without having to manually write all the Markdown itself.

// SCREENSHOT OF MY ARTICLE MANAGEMENT

<div class='anchor' id='code-highlighting-with-prism'></div>

## Code-Highlighting with Prism

You may have noticed that all the code snippets here have syntax highlighting. That's possible thanks to Prism.js. Using the gatsby-remark-prism I can choose between a list of themes, or create my own. To perfectly match the color scheme from the rest of the website, I opted for the latter.

Doing that is very simple. You can require a CSS file from the `gatsby-ssr.js` file, or inject it on the Global Styles as I did:

On `PrismStyles.js` file:

 

```jsx
import { css } from 'styled-components';

const PrismStyles = css`
	// All the Prism stuff.
`

export default PrismStyles;
```

And then on `GlobalStyles.js`:

```jsx
import { createGlobalStyle } from 'styled-components';
import PrismStyles from '@styles/PrismStyles';

const GlobalStyle = createGlobalStyle`
	// Injects the CSS from PrismStyles.js
	${PrismStyles};
`
```
