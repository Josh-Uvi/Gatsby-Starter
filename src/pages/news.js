import React from "react"
import { graphql } from "gatsby"
import * as styles from "../styles/news.module.css"
import Layout from "../Components/Layout"
import PropTypes from "prop-types"

export default function News({ data }) {
  const {
    dataJson: { articles },
  } = data

  return (
    <Layout>
      <div className={styles.newsContainer}>
        {articles.map(article => (
          <NewsItems key={article.title} news={article} />
        ))}
      </div>
    </Layout>
  )
}

const NewsItems = ({ news }) => <p className={styles.card}>{news.title}</p>

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
