import React from "react"
import NavBar from "./NavBar"
import "../styles/global.css"
import PropTypes from "prop-types"
import Link from "./Link"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <div className="content">{children}</div>
      <footer>
        <p>
          Produced by{" "}
          <Link text="Josh Uvi" link="https://github.com/Josh-Uvi" />
        </p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}
