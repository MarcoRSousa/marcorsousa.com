import React from "react"
import Layout from "../components/layout"

import Head from "../components/head"

export default function Contact() {
  return(
  <Layout>
    <Head title="Contact"/>
    <h1> Contact </h1>

    <p>If you'd like to get in touch with me, here's where to find me!</p>
    <ul>
      <li><a href= "https://www.linkedin.com/in/marcorsousajr" target = "_blank" rel="noopener noreferrer">Linkedin</a></li>
      <li>Emailing me at marcorsousajr@gmail.com</li>
    </ul>

    <p>If you'd like code to any of my projects, check out my <a href= "https://github.com/MarcoRSousa" target = "_blank" rel="noopener noreferrer">GitHub</a>.</p>

  </Layout>
  ) 
}