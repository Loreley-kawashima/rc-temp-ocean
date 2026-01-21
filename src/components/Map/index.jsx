import React from "react"
import json from "/src/siteData.json"
const address = json.footer.address

const Component = () => {
  return (
    <iframe
      src={`https://maps.google.co.jp/maps?output=embed&q=${address}&z=15`}
      width="100%"
      height="390"
      frameborder="0"
      style={{ border: 0, marginBottom: "-0.5rem", verticalAlign: "top" }}
      allowfullscreen
      loading="lazy"
      title={`Google Map: ${address}`}
    />
  )
}

export default Component
