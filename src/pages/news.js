import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../styles/news.module.css"
import Layout from "../Components/Layout"
import PropTypes from "prop-types"

export default function News({ data }) {
  const {
    dataJson: { articles },
  } = data

  return (
    <Layout>
      {articles.map(article => (
        <NewsItems key={article.title} news={article} />
      ))}
    </Layout>
  )
}

const NewsItems = ({ news }) => (
  <div className={styles.card}>
    <StaticImage
      src="../images/thoughtworks_flamingo_white.png"
      alt="image"
      layout="fixed"
      height={50}
      width={100}
    />
    <p>{news.title}</p>
  </div>
)

News.propTypes = {
  data: PropTypes.object,
}

NewsItems.propTypes = {
  news: PropTypes.object,
}

export const query = graphql`
  {
    dataJson {
      articles {
        title
        source {
          name
        }
      }
    }
  }
`
