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
    }
  ],
}
