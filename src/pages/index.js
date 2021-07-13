import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

export default function Home() {
  
  return(
    <Layout>
      <Head title="Home"/>
      <h1> Hello and welcome to my not-very-formatted blog! </h1>
      <p>Here I post about various miscellaneous projects I work on.</p>
      
      <p>If interested, perhaps check out my <Link to="/blog">blog posts</Link>.</p>
      <p>To contact me, please visit my <Link to="/contact">Contacts</Link> page.</p>
      
      <p>Thank you!</p>
    </Layout>
  ) 
}