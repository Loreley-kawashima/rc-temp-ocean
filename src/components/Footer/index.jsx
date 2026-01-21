import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import json from "/src/siteData.json"
import { Link as Scroll } from 'react-scroll'

const Component = () => {
  return (
    <footer id="gFooter">
      <div className="pageTop">
        <Scroll to="container" smooth={true} duration={600} offset={-60}>
          <StaticImage
            src="../../images/common/page_top.png"
            alt="応募する"
            width={95}
          />
        </Scroll>
      </div>
      <div className="footerBar">
        <address>&copy;{json.footer.copyright}</address>
      </div>
    </footer>
  )
}

export default Component
