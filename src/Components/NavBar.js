import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function NavBar() {
  return (
    <nav>
      <h2 className="header">Gatsby Starter</h2>
      <div className="logo">
        <StaticImage src="../images/tw-logo.png" alt="image" />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}
