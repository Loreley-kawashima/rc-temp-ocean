import React from "react"
import Layout from "/src/components/Layout"
import PagePath from "/src/components/PagePath"
import ContactThanks from "/src/components/ContactThanks"

const ThanksPage = () => {
  return (
    <Layout>
      <div className="pageTitle">
        <h2 className="headLine01">
          <span className="en">Entry Form</span>
          <span className="jp">エントリーフォーム</span>
        </h2>
      </div>
      <PagePath currentPageName="エントリーフォーム" />
      <ContactThanks />
    </Layout>
  )
}

export default ThanksPage
