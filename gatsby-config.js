require('dotenv').config({
  path: `.env`,
})

const path = require('path')

module.exports = themeOptions => {
  return {
    siteMetadata: {
      siteUrl: themeOptions.siteUrl
        ? themeOptions.siteUrl
        : 'http://localhost:8000/', // important for sitemap-plugin
      title: themeOptions.title
        ? themeOptions.title
        : 'gatsby-theme-prismic-default',
      description: themeOptions.description
        ? themeOptions.description
        : 'A GatsbyJS Theme With Headless CMS Prismic.',
      author: themeOptions.author ? themeOptions.author : 'Dennis Kossowski',
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: ['gatsby-theme-prismic-starter'],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, "src", "pages"),
        },
      },
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-source-prismic`,
        options: {
          repositoryName: themeOptions.repositoryName,
          accessToken: themeOptions.accessToken
            ? themeOptions.accessToken
            : `${process.env.API_KEY}`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: themeOptions.name
            ? themeOptions.name
            : 'Gatsby Theme Prismic Default',
          short_name: themeOptions.short_name
            ? themeOptions.short_name
            : 'Prismic Default',
          start_url: themeOptions.start_url ? themeOptions.start_url : '/',
          background_color: themeOptions.background_color
            ? themeOptions.background_color
            : '#663399',
          theme_color: themeOptions.theme_color
            ? themeOptions.theme_color
            : '#663399',
          display: themeOptions.display ? themeOptions.display : 'minimal-ui',
          icon: themeOptions.icon
            ? themeOptions.icon
            : `${__dirname}/src/images/gatsby-icon.png`,
        },
      },
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-netlify`,
    ],
  }
}
