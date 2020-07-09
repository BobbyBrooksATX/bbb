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
      resolve: 'gatsby-plugin-mixpanel',
      options: {
        apiToken: '1a26f7ded80d0464eb340c7e31b1c18e', // required
        pageViews: 'all',
      },
    },
  ],
}
