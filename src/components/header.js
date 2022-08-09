import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import marco from "../../static/tempMarco.png"
import * as headerStyle from "../styles/header.module.scss"

import { ThemeToggler } from 'gatsby-plugin-dark-mode'

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
        <Link to="/" ><img  src={marco}  alt="Avatar"></img></Link>
        <Link to="/" className={headerStyle.title}>{data.site.siteMetadata.author}</Link>
      </div>
      
      <nav className={headerStyle.links}>
        <Link to="/" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>Home</Link>
        <Link to="/blog" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>Blog</Link>
        <Link to="/about" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>About</Link>
        <Link to="/contact" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>Contact</Link>
        <Link to="/projects" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>Projects</Link>
        <Link to="/suggested" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>Suggested Content</Link>
        
        <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <div className={headerStyle.darkButton}>
                    <input
                      type="checkbox"
                      id="toggle"
                      onChange={e =>
                        toggleTheme(e.target.checked ? "dark" : "light")
                      }
                      checked={theme === "dark"}
                    />
                    <label for="toggle"></label>
                  </div>
                )}
              </ThemeToggler>
      </nav>
    </header>
  ) 
}