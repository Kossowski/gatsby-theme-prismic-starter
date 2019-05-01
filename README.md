# 🌈 __gatsby-theme-prismic-starter__

### ⚠️⚠️ __Gatsby Themes are currently experimental__ ⚠️⚠️

A Gatsby Starter Theme with Headless CMS [Prismic](https://prismic.io). Based on [gatsby-starter-default](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/).
***
## 🚀 Instructions 
### Quick Start

1. Create a directory for your new website
2. Initial your package.json with `yarn init`
3. Install gatsby, react, react-dom and the theme <br /> `yarn add gatsby react react-dom gatsby-theme-prismic-starter`
4. Add a `gatsby-config.js` file to activate and controll the theme:

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
        name: "Gatsby Theme Prismic Default",
        short_name: "Prismic Default",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        // icon: `${__dirname}/src/images/gatsby-icon.png`,

        // PRISMIC OPTIONS
        repositoryName: "your-prismic-repository-name",
        // It's highly recommended to define your Prismic API access token trough a .env file
        // Just create a .env in your root directory with following content: "API_KEY="your-key-here"
        // If you want to define the access token inline you can do it with (at your own risk):
        //accessToken: "your-access-token",

        // TYPOGRAPHY OPTIONS
        // To configure your own typography just add a "config" directory with typography.js
        // pathToConfigModule: "config/typography.js"
      }
    }
    ]};
   ```

5. run `gatsby develop` and build your site!

***

## 🔄 Changelog
All notable changes to this project will be documented in this file.

## [0.0.8]() – 2019-05-01
### Added
- NEW: [mdx](https://gatsby-mdx.netlify.com) support ✨ Just add a .mdx file in your pages folder