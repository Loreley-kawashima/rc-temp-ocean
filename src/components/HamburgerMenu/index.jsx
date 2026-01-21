import React from "react"
import { Link } from "gatsby"
import json from "/src/siteData.json"

import instagram from "/src/images/icon/instagram.png"
import X from "/src/images/icon/x.png"
import LINE from "/src/images/icon/LINE.png"
import facebook from "/src/images/icon/facebook.png"

const header = json.header
const articlesPage = json.pageConstruct.find(page => page.type === 103)
const article = json.articles.content

const Component = ({ menuIsOpen }) => {
  return (
    <div
      className="menuBox"
      style={{
        display: "block",
        transition: `max-height 0.5s ease, padding 0.3s ease`,
        maxHeight: `${menuIsOpen ? 100 : 0}%`,
      }}
    >
      <ul className="naviUl">
        <li>
          <Link to="/">トップ</Link>
        </li>
        {header.jobs.map((job, index) => (
          <li key={index}>
            <a title={job.title} href={`/${job.slug}`}>{job.title}</a>
          </li>
        ))}

        {(articlesPage && article.length) ? (
          <li>
            <Link to={`/${articlesPage.slug}/p/1`}>記事一覧</Link>
          </li>
        ) : null}
        <li className="blank">
          <a href="https://build-ocean.com" target="_blank" rel="noopener noreferrer">
            企業公式サイト
          </a>
        </li>
        <li>
          <Link to="/privacy">プライバシーポリシー</Link>
        </li>
      </ul>
      <ul className="sns">
        {json.footer.instagramUrl &&
          <li>
            <Link to={json.footer.instagramUrl} target="_blank"><img src={instagram} alt="instagram" /></Link>
          </li>
        }
        {json.footer.xUrl &&
          <li>
            <Link to={json.footer.xUrl} target="_blank"><img src={X} alt="X" /></Link>
          </li>
        }
        {json.footer.lineUrl &&
          <li>
            <Link to={json.footer.lineUrl} target="_blank"><img src={LINE} alt="LINE" /></Link>
          </li>
        }
        {json.footer.facebookUrl &&
          <li>
            <Link to={json.footer.facebookUrl} target="_blank"><img src={facebook} alt="facebook" /></Link>
          </li>
        }
      </ul>
    </div>
  )
}

export default Component
