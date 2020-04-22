import * as htmlPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import { Root, Base } from './webpack.base.config';
import * as miniCssExtractPlugin from 'mini-css-extract-plugin';

export default merge(Base, {

  mode: 'production',

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  output: {
    publicPath: 'http://10.96.83.6:8009',
  },

  plugins: [
    new miniCssExtractPlugin({
      filename: 'assets/styles/style_[hash:8].css',
      // disable: true,
    }),

    new webpack.DefinePlugin({
      'process.env.D_ENV': '"test"',
    }),

    new htmlPlugin({
      template: Root('src/index.html'),
      filename: 'index.html',
      env: 'test',
    }),
  ] as any,
});
