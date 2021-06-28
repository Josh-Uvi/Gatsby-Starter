import React from "react"
import NavBar from "./NavBar"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <div className="content">{children}</div>
      <footer>
        <p>
          Produced by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Josh-Uvi"
          >
            Josh Uvi
          </a>
        </p>
      </footer>
    </div>
  )
}
