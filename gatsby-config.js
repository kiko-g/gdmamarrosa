module.exports = {
  siteMetadata: {
    title: `GD Mamamarrosa`,
    description: `Página oficial do Grupo Desportivo Mamamrrosa, o colosso intercontinental e maior do Minho.`,
    author: `Francisco Goncalves`,
    siteUrl: `https://gdmamarrosa.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1920,
            },
          },
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              active: true,
              class: 'emoji-icon', // Add a custom css class
              escapeCharacter: '', // Default ('') ---> :poop:
              size: 24, // Select the size (available size: 16, 24, 32, 64)
              styles: {
                margin: '0',
                width: '24px',
                bottom: '1px',
                display: 'inline',
                position: 'relative',
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Francisco Goncalves website`,
        short_name: `gdmamarrosa`,
        description: `Página oficial do Grupo Desportivo Mamamrrosa, o colosso intercontinental e maior do Minho.`,
        lang: `pt`,
        start_url: `/`,
        display: `standalone`,
        icon: `static/favicon.ico`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
