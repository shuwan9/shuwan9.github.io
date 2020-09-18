module.exports = {
  siteMetadata: {
    title: '飞机飞过天空',
    author: '疏旺',
    description: 'Personal blog by 疏旺.',
    siteUrl: 'https://shuwan9.surge.sh/',
    homeAudioPlayerSrc: 'https://shuw.gitee.io/server/music/sky-city.mp3',
    homeAudioPlayerBg: 'https://shuw.gitee.io/server/music/sky-city.png',
    fileServerUrl: 'https://shuw.gitee.io/server/music/',
    social: {
      twitter: '@shuwan91',
    },
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
        ],
      },
    },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-130227707-1`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `shuwan9.surge.sh`,
    //     short_name: `shuwan9.surge.sh`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#ffa7c4`,
    //     display: `minimal-ui`,
    //     icon: `src/assets/icon.png`,
    //     theme_color_in_head: false,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
      },
    },
    `gatsby-plugin-catch-links`,
  ],
};
