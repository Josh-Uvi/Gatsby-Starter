import React from "react"
import PropTypes from "prop-types"

const LinkContainer = ({ children }) => <>{children}</>

LinkContainer.propTypes = { children: PropTypes.object }

export default function Link({ text, link, style }) {
  return (
    <LinkContainer>
      <a
        className={style}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {text}
      </a>
    </LinkContainer>
  )
}

Link.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string.isRequired,
  style: PropTypes.string,
}
