import React from "react"
import { Link } from "gatsby"
import json from "/src/siteData.json"

const Component = ({ jobExplanation, jobs, recruit = [] }) => {

  const jobPages = recruit.filter((page) => page.type === 102)

  return (
    <section className="jobSec">

      <div className="topBox">
        <div className="content">
          <h2 className="headLine04 fadeInUp">Job List</h2>
          {jobExplanation !== "コメントアウト" && (
            <p className="txt fadeInUp" dangerouslySetInnerHTML={{ __html: jobExplanation }} />
          )}
        </div>
      </div>

      <div className="content">
        <div className="infoSec">


          {jobs.length > 0 ? (
            jobs.map((jobContext, index) => {
              const areaRecruit = jobPages[index].context?.recruitment?.recruits?.find(
                (item) => item.title === "エリア"
              );
              const jobName = jobPages[index].context?.recruitment?.recruits?.find(
                (item) => item.title === "職種" || item.title === "職種名"
              );
              return (

                <div className="innerBox fadeInUp">


                  {/* 職種のKVから出力 */}
                  {jobContext.media.type === 1 ? (
                    <div className="photoBox" style={{
                      backgroundImage: `url(${jobContext.media.url})`,
                    }}></div>
                  ) : (
                    // 職種のKVが動画の場合、業務内容画像の1枚目から出力
                    <div className="photoBox" style={{
                      backgroundImage: `url(${jobPages[index].context?.work?.medias?.[0]?.url})`,
                    }}></div>
                  )}

                  <section className="textBox">

                    {/* ページのタイトルから、雇用形態を抽出して出力 */}
                    <div className="jobTagBox">
                      {jobContext.title.includes("正社員") && <span>正社員</span>}
                      {jobContext.title.includes("アルバイト・パート") && <span>アルバイト・パート</span>}
                      {jobContext.title.includes("業務委託") && <span>業務委託</span>}
                      {jobContext.title.includes("契約社員") && <span>契約社員</span>}

                      {/* 募集要項のエリアのテキストから出力 */}
                      {areaRecruit && <span>{areaRecruit.content}</span>}
                    </div>

                    {/* 募集要項の職種名から出力 */}
                    <h3 className="headLine03">
                      {jobName.content}
                    </h3>
                    <p className="txt" dangerouslySetInnerHTML={{ __html: jobContext.jobDescription }} />
                    <div className="comMore">
                      <Link title={jobContext.title} to={`/${jobContext.slug}`}>VIEW MORE</Link>
                    </div>
                  </section>
                </div>
              );
            })
          ) : (
            <p>現在、募集中の職種はありません。</p>
          )
          }
        </div>
      </div>
    </section>
  )
}

export default Component
