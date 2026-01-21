import React from "react"

const Component = ({ media, pcStyle }) => {
  return (
    <>
      {media.type === 1 ? (
        <>
          <img src={media.url} className="pc" style={pcStyle} alt="画像"/>
          <img
            src={media.url}
            className="sp"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            alt="画像"
          />
        </>
      ) : (
        <>
          <video
            src={media.url}
            controls={true}
            playsInline={true}
          />
        </>
      )}
    </>
  )
}

export default Component
