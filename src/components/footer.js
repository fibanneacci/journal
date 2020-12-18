import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
    <footer
        style={{
            background: `#FFFFFF`,
            padding: `1rem 0rem 1rem 0rem`
        }}
    >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a>. Fix this footer later!
    </footer>
)

export default Footer
