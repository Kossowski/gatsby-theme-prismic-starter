# 🌈 gatsby-theme-prismic-starter

A Gatsby Starter Theme with Headless CMS Prismic. Based on [gatsby-starter-default](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/).

## Instructions 
### Quick Start

1. create a directory for your new website
2. initial your package.json with `yarn init`
3. install gatsby, react and react-dom `yarn add gatsby react react-dom`
4. install the theme with `yarn add gatsby-theme-prismic-default`
5. add a `gatsby-config.js` file to activate and controll the theme:

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
      }
    }
    ]};
   ```

6. Build your site!
