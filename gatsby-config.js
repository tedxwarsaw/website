const path = require("path");

module.exports = {
  siteMetadata: {
    title: "tedxwarsaw",
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/content`,
        name: "content",
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@": path.join(__dirname, "src"),
        static: path.join(__dirname, "static"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "TEDxWarsaw",
        short_name: "TEDxWarsaw",
        start_url: "/",
        background_color: "#e62b1e",
        theme_color: "#e62b1e",
        icon: "src/pages/content/favicon.png",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-ts-config",
    "gatsby-plugin-react-helmet",
  ],
};
