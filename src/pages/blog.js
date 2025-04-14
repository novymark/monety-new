import React from "react";
import { graphql, Link } from "gatsby";

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map(node => (
          <li key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
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
    allMdx(sort: {frontmatter: {publishedAt: DESC}}) {
      nodes {
        id
        frontmatter {
          title
          publishedAt
          excerpt
          slug
        }
      }
    }
  }
`;

export default BlogPage;
