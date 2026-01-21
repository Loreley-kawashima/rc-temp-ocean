import * as React from "react"
import json from "/src/siteData.json"
import StructuredMarkup from "/src/components/StructuredMarkup"

const siteMetadata = json.siteMetadata

const Seo = ({ children, pageContext }) => {
  const jsonLd = pageContext?.markup ?? null
  const ogMeta = pageContext?.meta
  const keywords = pageContext?.metaKeyword
  const metaDescription = pageContext?.description || siteMetadata.description
  const defaultTitle = siteMetadata.title
  const pageTitle =
    defaultTitle !== pageContext?.title ? pageContext?.title : null
  return (
    <>
      <title>
        {pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle}
      </title>
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogMeta?.title || defaultTitle} />
      <meta
        property="og:description"
        content={ogMeta?.description || metaDescription}
      />
      <meta property="og:image" content={ogMeta?.image} />
      {children}
      {jsonLd && <StructuredMarkup jsonLd={jsonLd} />}
    </>
  )
}

export default Seo
