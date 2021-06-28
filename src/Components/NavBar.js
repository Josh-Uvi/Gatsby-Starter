import React from "react"
import { Link } from "gatsby"

export default function NavBar() {
  return (
    <nav>
      <h2>Gatsby Starter</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}
