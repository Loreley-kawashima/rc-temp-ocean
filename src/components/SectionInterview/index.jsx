import React from "react"
import { Link } from "gatsby"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Component = ({ interviewDescription, interviews }) => {

  return (
    <section className="interviewSec">
      <div className="topBox">
        <div className="content">
          <h2 className="headLine04 fadeInUp">Interview</h2>
          {interviewDescription !== "コメントアウト" && (
            <p className="title fadeInUp" dangerouslySetInnerHTML={{ __html: interviewDescription }} />
          )}
        </div>
      </div>

      <ul className="linkList">
        {interviews.map((interview, index) => (
            <li key={index}>
              <Link to={`/${interview.slug}`} style={{
                backgroundImage: `url(${interview.media.url})`,
              }}>
                <span className="content clearfix">
                  <img
                    src={interview.media.url}
                    alt={interview.interviewee}
                    className="sp"
                  />
                  <span className="txtBox">
                    <span className="name">
                      {interview.interviewee}
                    </span>
                    <span className="txtSpan">
                      {interview.career}
                    </span>
                    <span className="more">VIEW MORE</span>
                  </span>
                </span>
                <span className="hover">
                  <span className="infoHover">
                    詳細を見る
                  </span>
                </span>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default Component
