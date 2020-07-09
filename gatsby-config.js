require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Bobby Brooks",
    description: "Marketing coach for business owners.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    {
      resolve: "@reflexjs/gatsby-theme-post",
      options: {
        contentPath: "content/posts",
        basePath: "/articles",
        postsPerPage: 1000,
      },
    },
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
        types: [
          `Page`,
          `Post`,
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MTFCVZR",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "BBATX-Data-Layer",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "Page View",
      },
    },
  ],
}
