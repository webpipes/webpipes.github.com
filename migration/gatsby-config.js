module.exports = {
  siteMetadata: {
    title: `Webpipes.org`,
    description: `Webpipes is a work-in-progress proposal for linking together web services. Essentially, you can think of WebPipes as small utilities available over HTTP that do one thing, and do it well.`,
    author: `Webpipes`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#d4ab5a`,
        theme_color: `#d4ab5a`,
        display: `minimal-ui`,
        icon: `src/images/webpipe-spec-full-logo.svg` // `src/images/webpipes-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-google-analytics`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-143094630-1'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
