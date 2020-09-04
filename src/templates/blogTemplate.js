import React from "react"
import { graphql } from "gatsby"
// import Header from '../components/header'
// import Footer from '../components/footer'
import Layout from "../components/layout";

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            {/* <Header heading="GitHub Profile README Generator" /> */}
            <div className="m-4 p-10">
                <div className="blog-post">
                    <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
                    {/* <h2>{frontmatter.date}</h2> */}
                    <div
                        className="markdown"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
            {/* <Footer /> */}
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