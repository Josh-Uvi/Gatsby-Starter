import React from "react"
import Layout from "../Components/Layout"
import * as styles from "../styles/home.module.css"
import Form from "../Components/Form"

export default function Home() {
  // const handleBtn = () => {}

  return (
    <Layout>
      <main className={styles.header}>
        <div>
          <h2>This starter project uses Github Actions for CI/CD pipeline</h2>
          <p>
            This project is a Gatsby starter project with Github actions for
            CI/CD pipeline. This project workflow includes install dependencies,
            run test, run lint, build assets, and deploy project to gh-pages
          </p>
          <p>
            This starter pack will also include deployment to gh-pages for easy
            integration, other services like netlify and heroku can be used.
          </p>
          <hr className={styles.linebreak} />
          <h4 className={styles.title}>
            Study Case: Housing Development Portal for GDS
          </h4>
          <Form />
        </div>
        <div>
          <a
            className={styles.btn}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Josh-Uvi/Gatsby-Starter"
          >
            Check out the repo here
          </a>
        </div>
      </main>
    </Layout>
  )
}
