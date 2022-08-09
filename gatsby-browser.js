// gatsby-browser.js for markdown theme for prism
//using one of their defaults:
//require("prismjs/themes/prism-coy.css")

//using my own custom styling
require("./src/styles/markdown-theme.css")

//If I want line numbers:
//require("prismjs/plugins/line-numbers/prism-line-numbers.css")

// Tring to get styling for mdx this way
//import 'katex/dist/katex.min.css'

//for math katex styling
require(`katex/dist/katex.min.css`)
