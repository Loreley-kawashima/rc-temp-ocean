import * as React from "react"
const StructuredMarkup = jsonLd => {
  if (!jsonLd) {
    return null
  }
  return <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
}

export default StructuredMarkup
