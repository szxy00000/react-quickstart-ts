import * as htmlPlugin from "html-webpack-plugin";
import * as webpack from "webpack";
import * as merge from "webpack-merge";
import { Base, Root } from "./webpack.base.config";

const isLocal = process.env.LOCAL === "true";

export default merge(Base, {
  mode: "development",

  output: {
    publicPath: "http://localhost:8009"
  },

  devServer: {
    port: 8009,
    open: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
    contentBase: Root("dist"),
    host: "0.0.0.0"
  },

  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
      "process.env.D_ENV": isLocal ? '"local"' : '"dev"'
    }),

    new htmlPlugin({
      template: Root("src/index.html"),
      filename: "index.html",
      env: isLocal ? "local" : "dev"
    })
  ] as any,

  devtool: "inline-source-map"
});
