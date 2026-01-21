import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import { Link as Scroll } from 'react-scroll'
import json from "/src/siteData.json"
import emailIcon from "/src/images/common/mail.png"
import HamburgerMenu from "/src/components/HamburgerMenu"

import logo from "/src/images/common/logo.png"
import instagram from "/src/images/icon/instagram.png"
import X from "/src/images/icon/x.png"
import LINE from "/src/images/icon/LINE.png"
import facebook from "/src/images/icon/facebook.png"

const siteMetaData = json.siteMetadata
const logoUri = json.header.logoUri

const Component = () => {

  const location = useLocation();
  const isRecruitPage = location.pathname.includes("/recruit/");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <>
      <header id="gHeader" className={`${scrolled ? "on" : ""}`}>
        <h1 className="logo">
          <Link to="/">
            <img
              src={logo}
              alt={siteMetaData.title}
            />
          </Link>
        </h1>
        <div className="rBox clearfix">
          <ul className="headerSns">
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
          <div className="btn">
            {isRecruitPage ?
              <Scroll to="form" smooth={true} duration={600} offset={-0}>
                <span className="info">
                  <img
                    src={emailIcon}
                    alt="応募する"
                  />
                  応募する
                </span>
              </Scroll>
              :
              <Link to="https://build-ocean.com" target="_blank">
                公式サイト
              </Link>
            }
          </div>
          <div
            className={`menu ${menuIsOpen ? "on" : ""}`}
            menuIsOpen={menuIsOpen}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <HamburgerMenu menuIsOpen={menuIsOpen} />
    </>
  )
}

export default Component
