import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../Components/Layout"
import NewsItems from "../Components/NewsItem"

export default function News({ data }) {
  const {
    dataJson: { articles },
  } = data

  return (
    <Layout>
      {articles.map((article, index) => {
        return <NewsItems key={index} news={article} />
      })}
    </Layout>
  )
}

News.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  {
    dataJson {
      articles {
        description
        publishedAt(fromNow: true)
        source {
          name
        }
        title
        url
        urlToImage
      }
    }
  }
`
