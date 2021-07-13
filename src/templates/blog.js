import React from 'react'
import Layout from "../components/layout"
import {graphql} from 'gatsby'

import Head from "../components/head"

import * as blogStyle from "./blog.template.module.scss"

export const query = graphql`
query (
  $slug: String!
) {
  markdownRemark(
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
    }
    html
  }
}`

export default function Blog(props) {
    return (
        <Layout>
          <Head title = {props.data.markdownRemark.frontmatter.title}/>
            <h1 className= {blogStyle.titleTop}>{props.data.markdownRemark.frontmatter.title}</h1>
            <h2 className= {blogStyle.detailsTop} style={{color: 'gray'}}>{props.data.markdownRemark.frontmatter.details} </h2>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <br/>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}>
            </div>
        </Layout>
    )
}