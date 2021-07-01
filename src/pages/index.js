import React from "react"
import { Router } from "@reach/router"
import Home from "./home"
import About from "./about"
import NotFound from "./404"
import News from "./news"

const App = () => (
  <React.Fragment>
    <Router
      basepath={process.env.NODE_ENV !== "production" ? "/" : "/Gatsby-Starter"}
    >
      <Home path="/" />
      <About path="/about" />
      <News path="/news" />
      <NotFound path="*" />
    </Router>
  </React.Fragment>
)

export default App
