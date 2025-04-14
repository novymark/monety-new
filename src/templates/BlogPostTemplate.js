import React from "react";
import { graphql } from "gatsby";
// import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPostTemplate = ({ data }) => {
  const { frontmatter, body } = data.mdx;

  // console.log(body)

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.publishedAt}</p>
      <p>{frontmatter.excerpt}</p>

      {/* ta opcja nie działa */}
      {/* <MDXRenderer>{body}</MDXRenderer> */}

      {body}
    </>
  );
};

export const query = graphql`
  query BlogPostById($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        excerpt
        publishedAt
      }
      body
    }
  }
`;

export default BlogPostTemplate;
