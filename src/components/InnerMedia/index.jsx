import React from "react"

const Component = ({ media, pcStyle }) => {
  return (
    <>
      {media.type === 1 ? (
        <>
          <img
            src={media.url}
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            alt=""
          />
        </>
      ) : (
        <>
          <video
            src={media.url}
            muted={true}
            autoPlay={true}
            loop={true}
            playsinline={true}
          />
        </>
      )}
    </>
  )
}

export default Component
