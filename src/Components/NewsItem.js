// import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import PropTypes from "prop-types"

import * as styles from "../styles/news.module.css"
import logo from "../images/news-logo.png"
import Link from "./Link"

const NewsItems = ({ news }) => {
  const image = news.urlToImage || logo

  return (
    <div className={styles.card}>
      {/* <StaticImage src={image} alt="image" /> */}
      <img src={image} alt="image" />
      <div className={styles.content}>
        <Link text={news.title} link={news.url} style={styles.header} />
        <div className={styles.footer}>
          <p className={styles.name}>{news.source.name}</p>
          <span className={styles.time}>{news.publishedAt}</span>
        </div>
      </div>
    </div>
  )
}
NewsItems.propTypes = {
  news: PropTypes.object,
}

export default NewsItems
