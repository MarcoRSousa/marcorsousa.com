import React from "react"
import Layout from "../components/layout"

import {Link, graphql, useStaticQuery } from 'gatsby'

import * as blogStyles from "../styles/blog.module.scss"

import Head from "../components/head"

export default function Blog() {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(
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
    <ol className={blogStyles.posts}>
      {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li className = {blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`} >
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
    </ol>
  </Layout>
  )
}