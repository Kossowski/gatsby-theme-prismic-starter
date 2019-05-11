# 🌈 __gatsby-theme-prismic-starter__

#### ⚠️ __Gatsby Themes are currently experimental__ ⚠️

A Gatsby Starter Theme with Headless CMS [Prismic](https://prismic.io). Based on [gatsby-starter-default](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/gatsby-theme-prismic-starter.svg)](https://badge.fury.io/js/gatsby-theme-prismic-starter)

<br />

## 🚀 Instructions 
### Quick Start

1. Create a directory for your new website
2. Initialize your package.json with __`yarn init`__
3. Install gatsby, react, react-dom and the theme <br /> __`yarn add gatsby react react-dom gatsby-theme-prismic-starter`__
4. Add a __`gatsby-config.js`__ file to activate and controll the theme:

   ```javasript
   module.exports = {
   __experimentalThemes: [
    {
      resolve: "gatsby-theme-prismic-starter",
      options: {
        // SITE METADATA
        siteUrl: "http://localhost:8000/", // Important for gatsby-plugin-sitemap
        title: "gatsby-theme-prismic-starter",
        author: "Dennis Kossowski",
        description: "A GatsbyJS Theme With Headless CMS Prismic.",

        // MANIFEST OPTIONS
        name: "Gatsby Theme Prismic Starter",
        short_name: "Prismic Theme",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        // icon: `src/images/gatsby-icon.png`,

        // PRISMIC OPTIONS
        repositoryName: "your-prismic-repository-name",
        // It's highly recommended to define your Prismic API access token trough a .env file
        // Just create a .env in your root directory with following content: "API_KEY="your-key-here"
        // If you want to define the access token in this options you can do it (at your own risk):
        //accessToken: "your-access-token",

        // TYPOGRAPHY OPTIONS
        // To configure your own typography just add a "config" directory with typography.js
        // pathToConfigModule: "config/typography.js"
      }
    }
    ]};
   ```

5. run `gatsby develop` and build your site!

__After you started the develop server, open `localhost:8000/` for further information how this theme works!__

<br />

## 🤔 What's inside
### Dependencies:
- `@emotion/core`
- `@emotion/styled`
- `emotion-theming`
- `gatsby-plugin-emotion`
- `@mdx-js/mdx`
- `@mdx-js/react`
- `@mdx-js/tag`
- `dotenv`
- `gatsby-image`
- `gatsby-plugin-compile-es6-packages`
- `gatsby-plugin-manifest`
- `gatsby-plugin-page-creator`
- `gatsby-plugin-react-helmet`
- `gatsby-plugin-sharp`
- `gatsby-plugin-sitemap`
- `gatsby-plugin-typography`
- `gatsby-source-filesystem`
- `gatsby-source-prismic`
- `gatsby-transformer-sharp`
- `mkdirp`
- `prop-types`
- `react-helmet`
- `react-typography`
- `typography`

>__`emotion`__ for styling <br />
>__`typography`__ for easy font-theming <br />
>__`gatsby-plugin-sitemap`__ for sitemap support <br />
>__`mdx-plugin`__ for JSX in Markdown <br />
>__`gatsby-source-prismic`__ for pulling data into Gatsby from prismic.io repositories

### Components:
- `seo.js`
>Include the SEO component `import { SEO } from 'gatsby-theme-prismic-starter'`

***
<br />

## 🔄 Changelog
All notable changes to this project will be documented in this file.

## [0.1.0] – 2019-05-03
### ⚠️ Removed
__Dependencies:__
>- `@fortawesome/fontawesome-svg-core`
>- `@fortawesome/free-solid-svg-icons`
>- `@fortawesome/react-fontawesome`
>- `gatsby-plugin-netlify`
>- `react-grid-system`

Removed this packages to make the theme more flexible if you want to use other similar dependencies.

If you have used this packages just reinstall them in your project.

## [0.0.8] – 2019-05-01
### Added
>- NEW: [mdx](https://gatsby-mdx.netlify.com) support ✨ Just add a .mdx file in your pages folder
