import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

export default function Home() {
  
  return(
    <Layout>
      <Head title="Home"/>
      <p>I post about various miscellaneous math/data projects I work on. Many are related to gaming or my other interests!</p>
      
      <p>If interested, perhaps check out my <Link to="/blog">blog posts</Link>.</p>
      <p>To contact me, please visit my <Link to="/contact">Contacts</Link> page.</p>
      
      <p>Thank you!</p>
    </Layout>
  ) 
}