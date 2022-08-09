/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Marco Sousa Blog',
    author: 'Marco Sousa'
  },

  plugins: [
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {resolve: 'gatsby-source-filesystem',
      options: {
        name:'src',
        path: `${__dirname}/src/`
      }
    },
    {resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/`,
      },
    },
    {resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [require('remark-math'),],
        rehypePlugins: [require('rehype-katex'), { strict: 'ignore' }],
        gatsbyRemarkPlugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,

              languageExtensions: [ 
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
              },
            ],
            prompt: {
              user: "root",
              host: "localhost",
              global: false,
            },
            // By default the HTML entities <>&'" are escaped.
            // Add additional HTML escapes by providing a mapping
            // of HTML entities and their escape value IE: { '}': '&#123;' }
            escapeEntities: {},
            }
          },
        ]
      }
    },
    //head/helmet icon
    {resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'React go',
        short_name: 'Reactgo',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/temp-marco-circle.png',      
      },
    }
    
    
  ],
}
