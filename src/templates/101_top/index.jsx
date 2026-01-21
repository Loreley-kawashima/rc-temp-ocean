import React from "react"
import Layout from "/src/components/Layout"
import Seo from "/src/components/Seo"
import MainVisual from "/src/components/MainVisual"
import SectionInterview from "/src/components/SectionInterview"
import SectionAbout from "/src/components/SectionAbout"
import SectionJob from "/src/components/SectionJob"
import SectionCompany from "/src/components/SectionCompany"

import json from "/src/siteData.json"
const siteTitle = json.siteMetadata.title

const Page = ({ location, pageContext }) => {
  return (
    <Layout>
      <div className="indexPage">
        {/* メインビジュアルのコンポーネント */}
        <MainVisual media={pageContext.topMedia} siteTitle={siteTitle} />

        {/* 従業員インタビューのコンポーネント */}
        {pageContext.interviews?.[0].interviewee && (
          <SectionInterview
            interviewDescription={pageContext.interviewsExplanation}
            interviews={pageContext.interviews
              .filter(interview => interview.interviewee) // 名前が存在するものだけ
              .filter((interview, index, self) =>
                index === self.findIndex(i => i.interviewee === interview.interviewee)
              )
            }
          />
        )}

        {/* 私たちについて、会社概要のコンポーネント */}
        <SectionAbout
          aboutUs={pageContext.aboutUs}
          businessContents={pageContext.businessContents}
        />

        <SectionJob
          jobExplanation={pageContext.jobExplanation}
          jobs={pageContext.jobs}
          recruit={pageContext.pageConstruct}
        />

        {/* 会社概要のコンポーネント */}
        <SectionCompany companyProfile={pageContext.companyProfile} />
      </div>
    </Layout>
  )
}

export default Page

export const Head = ({ pageContext }) => {
  return <Seo pageContext={pageContext} />
}
