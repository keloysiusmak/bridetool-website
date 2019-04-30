import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div
      className="container"
    >
      <Link
        to="/"
        style={{
          textDecoration: `none`
        }}
      >
        [Logo]
      </Link>
      <Link
        to="/"
        style={{
          textDecoration: `none`
        }}
      >
        Approach
      </Link>
      <Link
        to="/company"
        style={{
          textDecoration: `none`,
        }}
      >
        Company
      </Link>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        Say Hi
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
