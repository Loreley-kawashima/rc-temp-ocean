import React from "react"
import { Link } from "gatsby"

const Component = () => {
  return (
    <div className="thanks">
      <div className="content">
        <p className="title fadeInUp">送信完了</p>
        <p className="thanksTxt fadeInUp">
          お問い合わせ頂きまして
          <br className="sp" />
          ありがとうございました。
          <br className="wpBr" />
          追って担当よりご連絡申し上げます。
        </p>

        <div className="linkBtn fadeInUp">
          <Link to="/">
            <span className="info">トップへ戻る</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Component
