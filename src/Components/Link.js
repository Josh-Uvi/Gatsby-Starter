import React from "react"
import PropTypes from "prop-types"

export default function Link({ text, link, style }) {
  return (
    <a className={style} target="_blank" rel="noopener noreferrer" href={link}>
      {text}
    </a>
  )
}

Link.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  style: PropTypes.string,
}
