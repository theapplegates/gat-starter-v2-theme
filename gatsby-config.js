module.exports = {
  plugins: [`gatsby-theme-blog`, `gatsby-theme-blog-darkmode`,
    {
      resolve: `gatsby-theme-blog`,
      options: {
        preset: `theme-ui-sketchy-preset`,
        prismPreset: `oceanic-next`,
        webfontURL:
          "https://fonts.googleapis.com/css?family=Architects+Daughter",
},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Living Life`,
    author: `Paul Applegate`,
    description: `Follow my daily hijinks here <br>
& occasionally a serious subject like cancer. Fuck cancer.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/papplegate`,
      },
      {
        name: `github`,
        url: `https://github.com/theapplegates`,
      },
    ],
  },
}
