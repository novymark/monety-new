import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

const shortcodes = { Link } // Provide common components here

const BlogPostTemplate = ({ data, children }) => {
  const { frontmatter } = data.mdx;

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.publishedAt}</p>
      <p>{frontmatter.excerpt}</p>

      <MDXProvider components={shortcodes}>
        {children}
      </MDXProvider>
    </>
  );
};

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        excerpt
        publishedAt
      }
    }
  }
`;

export default BlogPostTemplate;
