import React from "react"
import { graphql } from "gatsby"
// import Header from '../components/header'
// import Footer from '../components/footer'
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{frontmatter.title}</title>
        <link
          rel="canonical"
          href={`https://rahuldkjain.github.io/gh-profile-readme-generator`}
        />
      </Helmet>
      <div className="m-4 sm:p-10">
        <div className="blog-post">
          <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
