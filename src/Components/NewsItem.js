// import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import PropTypes from "prop-types"

import * as styles from "../styles/news.module.css"

const NewsItems = ({ news, image }) => {
  // console.log(news.urlToImage)

  // const logo =
  //   "https://www.autocar.co.uk/sites/autocar.co.uk/files/slideshow_image/00-25-volvo-ycc-volvo_-_copy.jpg"

  return (
    <div className={styles.card}>
      {/* <Img key={news.publicURL} fixed={image} /> */}
      {/* <StaticImage src={image} alt="image" width={100} /> */}
      <img src={image} alt="image" />
      <p>{news.title}</p>
      <p>{news.source.name}</p>
      <p>{news.publishedAt}</p>
    </div>
  )
}
NewsItems.propTypes = {
  news: PropTypes.object,
  image: PropTypes.array,
}

export default NewsItems
