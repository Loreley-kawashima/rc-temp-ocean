import React from "react"
import { Link } from "gatsby"
import Layout from "/src/components/Layout"
import Seo from "/src/components/Seo"

const Page = ({ location, pageContext }) => {
  return (
    <Layout>
      <div className="indexPage">
        <section className="jobSec">
          <div className="content">
            <div className="comTtlBox">
              <h2 className="headLine04 fadeInUp">
                <span className="en">Job List</span>
                <span className="jp">採用情報</span>
              </h2>
              <p className="title fadeInUp">{pageContext.jobExplanation}</p>
            </div>
            <div className="infoSec">
              {pageContext.jobs.map((jobContext, index) => (
                <div className="innerBox fadeInUp" key={index}>
                  <div
                    className="photoBox"
                    style={{
                      backgroundImage: `url(${jobContext.media.url})`,
                    }}
                  ></div>
                  <section className="textBox">
                    <h3 className="headLine03">{jobContext.title}</h3>
                    <p className="txt">{jobContext.jobDescription}</p>
                    <div className="comMore">
                      <Link to={`/${jobContext.slug}`}>VIEW MORE</Link>
                    </div>
                  </section>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Page

export const Head = ({ pageContext }) => {
  return <Seo pageContext={pageContext} />
}
