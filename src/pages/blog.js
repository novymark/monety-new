import React from "react";
import { graphql, Link } from "gatsby";

const BlogPage = ({ data }) => {
  const posts = data.allMdx.edges;

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map(({ node }) => (
          <li key={node.frontmatter.id}>
            <h2>
              <Link to={`/blog${node.fields.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>{node.frontmatter.publishedAt}</p>
            <p>{node.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { publishedAt: DESC } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            id
            title
            publishedAt
          }
          excerpt
        }
      }
    }
  }
`;

export default BlogPage;
