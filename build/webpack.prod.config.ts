import * as htmlPlugin from "html-webpack-plugin";
import * as miniCssExtractPlugin from "mini-css-extract-plugin";
import * as webpack from "webpack";
import * as merge from "webpack-merge";
import { Base, Root } from "./webpack.base.config";

export const Prod = merge(Base, {
  mode: "production",

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },

  output: {
    publicPath: "/"
  },

  plugins: [
    new miniCssExtractPlugin({
      filename: "assets/styles/style_[hash:8].css"
    }),

    new webpack.DefinePlugin({
      "process.env.D_ENV": '"production"'
    }),

    new htmlPlugin({
      template: Root("src/index.html"),
      filename: "index.html",
      env: "production"
    })
  ] as any
});

const Pre = merge(Base, {
  mode: "production",

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },

  output: {
    publicPath: "/"
  },

  plugins: [
    new miniCssExtractPlugin({
      filename: "assets/styles/style_[hash:8].css"
    }),

    new webpack.DefinePlugin({
      "process.env.D_ENV": '"pre"'
    }),

    new htmlPlugin({
      template: Root("src/index.html"),
      filename: "pre_index.html",
      env: "pre"
    })
  ] as any,
});

export default [Prod, Pre];
