const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
// const remarkMath = require('remark-math')
// const rehypeKatex = require('rehype-katex')
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx$/,
//   options: {
//     remarkPlugins: [remarkMath],
//     rehypePlugins: [rehypeKatex]
//   }
// })

// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'md', 'mdx']
// })

module.exports = withNextra()

// module.exports = {
//     withMDX({
//   pageExtensions: ['js', 'jsx', 'md', 'mdx']
// }),
//     withNextra(),
// };
