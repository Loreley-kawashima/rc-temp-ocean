import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "/src/components/Layout"
import Seo from "/src/components/Seo"
import json from "/src/siteData.json"
import { formatDate } from "/src/utils/formatDate"

import logo from "/src/images/common/logo.png"

const cmsLogo = json?.header?.logoUri

const normalize = (u) =>
  String(u || "").trim().replace(/^https?:\/\//, "").replace(/\/+$/, "").toLowerCase()

const Page = ({ location, pageContext }) => {

  // ここを「media があるか？」ではなく「media.url が有効か？」「ロゴじゃないか？」で判定
  const url = pageContext?.media?.url?.trim()
  const type = pageContext?.media?.type
  const isLogo = url && normalize(url) === normalize(cmsLogo)
  const isValidImage = !!url && !isLogo && type === 1

  // フォールバックはコード指定（例：useStaticQuery で取った画像）
  const fallback = logo
  const thumb = isValidImage ? url : fallback

  return (
    <Layout>
      <div className="indexPage blogPage">
        <div className="content">
          <section
            className="comVisual"
            style={{
              backgroundImage: `url(${thumb})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: isValidImage ? "" : "#fff",
              backgroundSize: isValidImage ? "contain" : "50%",
              marginTop: 24,
            }}
          />
        </div>
        <section className="blogSec">
          <div className="content">
            <time
              dateTime={pageContext.createTime}
              style={{ marginBottom: 16, display: "block" }}
            >
              {formatDate(pageContext.createTime)}
            </time>
            <h2 className="headLine03 fadeInUp">{pageContext.title}</h2>
            <div>
              <section
                dangerouslySetInnerHTML={{ __html: pageContext.content }}
                itemProp="articleBody"
              />
            </div>
          </div>
        </section>

        <section className="jobSec">
          <div className="content">
            <div className="infoSec">
              <div className="topBox">
                <div className="content">
                  <h2 className="headLine04 fadeInUp">New Articles</h2>
                </div>
              </div>

              {json.articles.content.slice(0, 3).map((article, index) => {

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
                    <div
                      className={`photoBox${isValidImage ? "" : " noThumbs"}`}
                      style={{
                        backgroundImage: `url(${thumb})`,
                      }}
                    ></div>
                    <section className="textBox">
                      <h3 className="headLine03">{article.title}</h3>
                      <p className="txt">{article.description}</p>
                      <div className="comMore">
                        <Link
                          to={`/${location.pathname.split("/").filter(Boolean)[0]
                            }/${article.slug}`}
                        >
                          VIEW MORE
                        </Link>
                      </div>
                    </section>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div >
    </Layout >
  )
}

export default Page

export const Head = ({ pageContext }) => {
  return <Seo pageContext={pageContext} />
}
