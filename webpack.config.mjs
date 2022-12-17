import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default {
  mode: `development`,
  devtool: `inline-source-map`,
  entry: `./src/index.ts`,
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: `src/index.html`,
    }),
  ],
  output: {
    filename: `main.js`,
    path: resolve(process.cwd(), `dist`),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          `css-loader`,
          `sass-loader`,
        ]
      },
      {
        test: /\.ts$/i,
        exclude: /(node_modules)/,
        use: `ts-loader`,
      },
    ],
  },
  resolve: {
    extensions: [ `.js`, `.ts` ],
    alias: {
      '&': resolve(process.cwd(), `src`),
    },
  },
}
