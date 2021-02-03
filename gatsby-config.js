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
  ],
};
