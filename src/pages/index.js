import React from "react"
import { Router } from "@reach/router"
import Home from "./home"
import About from "./about"
import NotFound from "./404"

const App = () => (
  <Router basepath="/Gatsby-Starter">
    <Home exact path="/" />
    <About path="/about" />
    <NotFound path="*" />
  </Router>
)

export default App
