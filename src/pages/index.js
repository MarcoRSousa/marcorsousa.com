import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

export default function Home() {
  return(
    <Layout>
      <Head title="Home"/>
      <br />
      <h2> Hello and welcome to my not-very-formatted blog! </h2>
      <p>Here I post about various miscellaneous projects I work on.</p>
      <br />
      <p>If interested, perhaps take a look at my <Link to="/blog">blog posts</Link>.</p>
      <p>To contact me, please visit my <Link to="/contact">Contacts</Link> page.</p>
    </Layout>
  ) 
}