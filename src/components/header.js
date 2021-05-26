import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import * as headerStyle from "../styles/header.module.scss"

export default function Header() {
  /* Data fetching with grapghQL */
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
  `);

  return(
    <header className={headerStyle.header}>

      <div className={headerStyle.name}>
        <img  src="favicon.ico"  alt="Avatar"></img>
        <Link to="/" className={headerStyle.title}>{data.site.siteMetadata.author}</Link>
      </div>
      
      <nav className={headerStyle.links}>
        <Link to="/" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>Home</Link>
        <Link to="/blog" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>Blog</Link>
        <Link to="/about" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>About</Link>
        <Link to="/contact" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>Contact</Link>
        <Link to="/suggested" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>Suggested Content</Link>
      </nav>
    </header>
  ) 
}