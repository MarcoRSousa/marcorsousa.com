import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

export default function About() {
  return(
  <Layout>
    <Head title="About"/>
    <h1> About Me </h1>
    <p>I recently graduated from University of Massachusetts Dartmouth with a dual major in Mathematics and Data Science. I enjoy machine learning, statistics and probability as it relates to gaming, philosophy, chess, and clasical music.</p>
    
    <p>See my <Link to="/contact">contacts</Link> to get in touch!</p>
  </Layout>
  )
}