import React from "react"
import Layout from "/src/components/Layout"
import Seo from "/src/components/Seo"
import PagePath from "/src/components/PagePath"
import json from "/src/siteData.json"

const siteMetaData = json.siteMetadata
const footer = json.footer

const Page = ({ location, pageContext }) => {

  const topPage = json.pageConstruct.find(number => number.type === 101)
  const phone = topPage.context.companyProfile.items?.find(
    (item) => item.title === "電話番号"
  );
  const phoneNumber = phone?.content

  const Group = {
    box: [
      {
        number: 1,
        title: "個人情報の管理",
        detail: "当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。<br />" +
          "<br />" +
          "個人情報の利用目的<br />" +
          "お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。",
      },
      {
        number: 2,
        title: "個人情報の第三者への開示・提供の禁止",
        detail: "当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。<br />" +
          "<br />" +
          "・お客さまの同意がある場合<br />" +
          "・お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合<br />" +
          "・法令に基づき開示することが必要である場合",
      },
      {
        number: 3,
        title: "個人情報の安全対策",
        detail: "当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。<br />" +
          "<br />" +
          "ご本人の照会<br />" +
          "お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。",
      },
      {
        number: 4,
        title: "法令、規範の遵守と見直し",
        detail: "当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。",
      },
    ],
  }

  return (
    <Layout>
      <div className="privacy">
        <section className="pageTitle">
          <h2 className="headLine01">
            <span className="en">Privacy Policy</span>
            <span className="jp">プライバシーポリシー</span>
          </h2>
        </section>
        <PagePath currentPageName="プライバシーポリシー" />
        <section className="content">
          <h3 className="headLine02 fadeInUp on">個人情報保護方針</h3>
          <div className="introduction">
            <p>ユーザーの個人情報の取扱いについて、以下のとおり個人情報保護方針（以下、「本方針」といいます。）を定めます。</p>
          </div>

          {Group.box.map((term, index) => {
            return (
              <div className="termsarea" key={index}>
                <h3>{term.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: term.detail }}></p>
              </div>
            )
          })}
          <div className="termsarea">
            <h3>お問い合わせ先</h3>
            <p>当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。<br />
            <br />
            {footer.copyright}<br />
            {footer.address}</p>
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
