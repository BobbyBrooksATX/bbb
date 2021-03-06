import * as React from "react"
import { Article, H2, P, Div, Grid } from "@reflexjs/components"
import { Link } from "@reflexjs/gatsby-theme-core"
import { PostMeta } from "@reflexjs/gatsby-theme-post"

export const Posts = ({ posts }) => {
  return posts.length ? (
    <Grid col="1" gap="10|20">
      {posts &&
        posts.map((post, index) => (
          <Div key={index}>
            <PostTeaser {...post} />
          </Div>
        ))}
    </Grid>
  ) : null
}

export const PostTeaser = ({
  title,
  excerpt,
  slug,
  date,
  datetime,
  author,
  timeToRead,
  ...props
}) => (
  <Article {...props}>
    <Grid col="1fr" gap="4|4|10" alignItems="flex-start">
      <Div>
        {title && (
          <Link href={slug}>
            <H2 mt="0" mb="4" fontSize="xl|2xl|2xl|3xl" hoverColor="primary">
              {title}
            </H2>
          </Link>
        )}
        {excerpt && <P mt="1">{excerpt}</P>}
        <PostMeta
          author={author}
          timeToRead={timeToRead}
          date={date}
          datetime={datetime}
          fontSize="md"
        />
      </Div>
    </Grid>
  </Article>
)