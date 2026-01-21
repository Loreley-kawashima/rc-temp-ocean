/**
 * @type {import('gatsby').GatsbyConfig}
 */

const json = require("./src/siteData.json")
const domain = json.siteMetadata.og_url
const gaTrackingId = json.siteMetadata.gaTrackingId || "GA-xxxxxxxxxx"

module.exports = {
  siteMetadata: {
    siteUrl: `https://${domain}`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [gaTrackingId],
        gtagConfig: {},
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `株式会社〇〇`, //企業名
        short_name: `株式会社〇〇`, //企業名
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/icon/favicon.png`, // Favicon画像のパス
      },
    },
  ],
}
