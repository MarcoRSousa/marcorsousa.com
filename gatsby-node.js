/* pathing via node.js; for path.basename*/
const path = require('path')

/* node function that runs when node is created*/
module.exports.onCreateNode = ({node, actions}) => {
    const {createNodeField} = actions

    if (node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

// Creating blog pages
// 1.Get path to template
// 2.Get markdown data
// 3.create new pages

module.exports.createPages = async ({graphql, actions}) => {
    const{ createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
    query {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `)
    
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

}