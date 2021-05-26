import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/global.scss"
import * as layoutStyle from "../styles/layout.module.scss"

export default function Layout({children}) {
  return(
  <div className={layoutStyle.container}>
    <Header />
        <div className={layoutStyle.content}>
          {children}
        </div>
      <Footer />
    </div>
  ) 
}