import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "/src/components/Layout"
import Seo from "/src/components/Seo"
import Pagination from "/src/components/Pagination"
import PagePath from "/src/components/PagePath"
import json from "/src/siteData.json"

import logo from "/src/images/common/logo.png"

const cmsLogo = json?.header?.logoUri

const normalize = (u) =>
  String(u || "").trim().replace(/^https?:\/\//, "").replace(/\/+$/, "").toLowerCase()

const Page = ({ location, pageContext }) => {

  return (
    <Layout>
      <div className="indexPage">

        <section className="pageTitle">
          <h2 className="headLine01">
            <span className="en">Articles</span>
            <span className="jp">記事一覧</span>
          </h2>
        </section>

        <PagePath currentPageName="記事" />
        <section className="jobSec">

          <div className="topBox">
            <div className="content">
              <h2 className="headLine04 fadeInUp">Articles</h2>
            </div>
          </div>

          <div className="content">
            <div className="infoSec">
              {pageContext.articles.map((article, index) => {

                // ここを「media があるか？」ではなく「media.url が有効か？」「ロゴじゃないか？」で判定
                const url = article?.media?.url?.trim()
                const type = article?.media?.type
                const isLogo = url && normalize(url) === normalize(cmsLogo)
                const isValidImage = !!url && !isLogo && type === 1

                // フォールバックはコード指定（例：useStaticQuery で取った画像）
                const fallback = logo
                const thumb = isValidImage ? url : fallback

                return (
                  <div className="innerBox fadeInUp" key={index} >
                    <div className={`photoBox${isValidImage ? "" : " noThumbs"}`} style={{ backgroundImage: `url(${thumb})`, }}></div>
                    <section className="textBox">
                      <h3 className="headLine03">{article.title}</h3>
                      <p className="txt">{article.description}</p>
                      <div className="comMore">
                        <Link to={`/${pageContext.slug}/${article.slug}`}>
                          VIEW MORE
                        </Link>
                      </div>
                    </section>
                  </div>
                )
              })}
              <Pagination
                linkPrefix={pageContext.linkPrefix}
                currentPage={pageContext.currentPage}
                totalPages={pageContext.totalPages}
              />
            </div>
          </div>
        </section>

      </div>
    </Layout >
  )
}

export default Page

export const Head = ({ pageContext }) => {
  return <Seo pageContext={pageContext} />
}
