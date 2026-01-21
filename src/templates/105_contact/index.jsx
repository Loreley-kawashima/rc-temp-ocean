import React from "react"
import Layout from "/src/components/Layout"
import Seo from "/src/components/Seo"
import PagePath from "/src/components/PagePath"
import ContactForm from "/src/components/ContactForm"

const Page = ({ location, pageContext }) => {
  return (
    <Layout>
      <div className="pageTitle">
        <h2 className="headLine01">
          <span className="en">Entry Form</span>
          <span className="jp">エントリーフォーム</span>
        </h2>
      </div>
      <PagePath currentPageName="エントリーフォーム" />
      <ContactForm pageContext={pageContext} />
    </Layout>
  )
}

export default Page

export const Head = ({ pageContext }) => {
  return <Seo pageContext={pageContext} />
}
