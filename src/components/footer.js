import React from "react"
import {graphql, useStaticQuery } from 'gatsby'

import * as footerStyles from "../styles/footer.module.scss"

export default function Footer() {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }`);
  return(

    
    <footer className={footerStyles.footer}>
      <hr></hr>
      Created by {data.site.siteMetadata.author}, 2021.
    </footer>
  ) 
}

