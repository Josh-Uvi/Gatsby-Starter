/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Starter With Github Actions",
  },
  pathPrefix: "/Gatsby-Starter",
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        stages: ["develop"],
        extensions: ["js", "jsx"],
        exclude: ["node_modules", ".cache", "public"],
        // Any eslint-webpack-plugin options below
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "DataJson",
        imagePath: "articles[].urlToImage",
        // OPTIONAL: Name you want to give new image field on the node.
        // Defaults to 'localImage'.
        name: "remoteImage",
        type: "array",
      },
    },
  ],
}
