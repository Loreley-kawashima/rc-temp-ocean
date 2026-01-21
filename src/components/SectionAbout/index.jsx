import React from "react"
import InnerMedia from "/src/components/InnerMedia"

const Component = ({ aboutUs, businessContents }) => {
  return (

    <section className="aboutSec">

      {/* 会社について */}
      <div className="topBox">
        <div className="content">
          <h2 className="headLine04 fadeInUp">About Us</h2>
        </div>
      </div>

      <div className="comImgBox">
        <div className="photoBox fadeInUp">
          <img src={aboutUs.media.url} alt={aboutUs.title} />
        </div>
        <div className="textBox">
          <div className="subBox fadeInUp">
            <p dangerouslySetInnerHTML={{ __html: aboutUs.content }} />
          </div>
        </div>
      </div>

      {/* 事業紹介 */}
      <div className="businessBox" style={{
        backgroundImage: `url(${businessContents.media.url})`,
      }}>
        <div className="content">
          <div className="inner">
            <h2 className="headLine04 fadeInUp">Business</h2>
            <p className="txt fadeInUp" dangerouslySetInnerHTML={{ __html: businessContents.content }} />
          </div>
        </div>
      </div>

    </section >

  )
}

export default Component
