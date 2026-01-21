import React from "react"
import { Link } from "gatsby"
import homeIcon from "/src/images/common/home.png"

const Component = ({ currentPageName }) => {
  return (
    <ul id="pagePath">
      <li>
        <Link to="/">
          <img
            decoding="async"
            src={homeIcon}
            alt="トップ"
          />
        </Link>
      </li>
      <li>{currentPageName}</li>
    </ul>
  )
}

export default Component
