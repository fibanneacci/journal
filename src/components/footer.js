import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
    <footer
        style={{
            padding: `1rem 0rem 1rem 0rem`
        }}
    >
        © {new Date().getFullYear()} <a href="https://anli.io" target="_blank" rel="noreferrer">Anne Li</a>, Built with
        {` `}
        <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a>.
    </footer>
)

export default Footer
