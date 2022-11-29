const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const path = require('path')

module.exports = {
  entry: './src/js/main.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.html$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, 'src'),
          from: './*.html'
        }
      ]
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new HtmlMinimizerPlugin()]
  },
  performance: {
    hints: false
  }
}
