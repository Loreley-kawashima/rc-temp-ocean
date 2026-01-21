import React, { useState, useEffect, useCallback } from "react"

const Component = ({ siteTitle, media }) => {
  const [show, setShow] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.pageYOffset;
    if (scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);


  return (
    <div className={`mainVisual ${show ? "on" : ""}`}>
      <div className="inner">
        <div className="mainImg">
          {media.type === 1 ? (
            // 管理画面に画像を入れた場合はこちらのコードが出る
            <img
              src={media.url}
              style={{
                objectFit: "cover",
              }}
              alt="kv画像"
            />
          ) : (
            // 管理画面に動画を入れた場合はこちらのコードが出る
            <video
              src={media.url}
              muted={true}
              autoPlay={true}
              loop={true}
              playsInline={true}
            />
          )}

        </div>
        <div className="mainTxt">
          <h2>一つひとつの施工に、心を込めた満足を届ける。<br/>あなたの丁寧な仕事が、誰かの「理想の暮らし」に。</h2>
        </div>
      </div>
    </div>
  )
}

export default Component
