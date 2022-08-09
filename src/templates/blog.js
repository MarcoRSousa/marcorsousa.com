import React from 'react'
import Layout from "../components/layout"
import {graphql} from 'gatsby'

import Head from "../components/head"

import * as blogStyle from "./blog.template.module.scss"

import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
query (
  $slug: String!
) {
  mdx(
    fields: {
      slug: {
        eq: $slug
      }
    }
  ) {
    frontmatter {
      title
      details
      date(formatString: "LL")
      tags
    }
    body
  }
}`

export default function Blog(props) {
    return (
        <Layout>
          <Head title = {props.data.mdx.frontmatter.title}/>
            <h1 className= {blogStyle.titleTop}>{props.data.mdx.frontmatter.title}</h1>
            <h2 className= {blogStyle.detailsTop} style={{color: 'gray'}}>{props.data.mdx.frontmatter.details} </h2>
            <p>{props.data.mdx.frontmatter.date}</p>
            <br/>
            <div><MDXRenderer>{props.data.mdx.body}</MDXRenderer></div>
        </Layout>
    )
}