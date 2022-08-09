import React from "react"
import Layout from "../components/layout"

import {Link, graphql, useStaticQuery } from 'gatsby'

import * as blogStyles from "../styles/blog.module.scss"

import Head from "../components/head"

import "katex/dist/katex.min.css"

export default function Blog() {
  const data = useStaticQuery(graphql`
  query {
    allMdx(
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "LL")
            details
            tags
          } fields {
            slug
          }
        }
      }
    }
  }
`)



  return(
  <Layout>
    <Head title="Blog"/>
    <ol>
      {data.allMdx.edges.map((edge) => {

        //This creates a tags array provided from map of Mdx edges
        const tags = edge.node.frontmatter.tags || [];

          return (
            <div className = {blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`} >
              <h2 className={blogStyles.title}>{edge.node.frontmatter.title}</h2>
              </Link>
              
              <div>
              <p className={blogStyles.date}>{edge.node.frontmatter.date}</p>
              <div className={blogStyles.tag}>{tags[0]}</div>
              </div>

              <p className={blogStyles.details}>{edge.node.frontmatter.details}</p>

              <Link to={`/blog/${edge.node.fields.slug}`} className={blogStyles.read}> Read </Link>
            </div>
          )
        })}
    </ol>
  </Layout>
  )
}