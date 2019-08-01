/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const webpack = require('webpack');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    devtool: false,
    plugins: [
      // Fix gatsby's seemingly broken sourcemaps
      new webpack.SourceMapDevToolPlugin({})
    ],
  })
}