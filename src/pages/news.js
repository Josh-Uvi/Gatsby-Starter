import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../Components/Layout"
import NewsItems from "../Components/NewsItem"

export default function News({ data }) {
  const {
    dataJson: { articles, remoteImage },
  } = data

  // const newImage = remoteImage.map(item => {
  //   const container = {}

  //   container.name = item.name
  //   container.image = item.childImageSharp

  //   return container
  // })

  const image = remoteImage.map(item => console.log(item.name))

  return (
    <Layout>
      {articles.map((article, index) => {
        const container = {}
        container.name = article.source.name
        container.title = article.title
        container.description = article.description
        container.publishedAt = article.publishedAt
        // container.urlToImage = remoteImage

        // console.log(container)

        return <NewsItems key={index} news={article} image={image} />
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
      remoteImage {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
