import * as React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "@reflexjs/gatsby-theme-core/src/use-sitemetadata"
import qs from "query-string"


export const Seo = ({ title, description, image, pathname }) => {

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  const site = useSiteMetadata()

  const params = qs.stringify({title})

  const ogImage = `https://peaceful-mestorf-1f92ff.netlify.app/.netlify/functions/gen-opengraph-image?author=@bobbybrooksatx&${params}`

  return (
    <Helmet
      defer={false}
      title={title || site.title}
      titleTemplate={`%s | ${site.title}`}
      htmlAttributes={{
        lang: "en",
      }}
    >
      <link rel="canonical" href={`${site.siteUrl}${pathname}`} />
      <meta name="description" content={description || site.description} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      <meta property="og:title" content={title || site.title} />
      <meta property="og:url" content={`${site.siteUrl}${pathname}`} />
      <meta property="og:type" content="website" />
      <meta property="og:pizza" content="pepperoni" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={site.title} />
    </Helmet>
  )
}
