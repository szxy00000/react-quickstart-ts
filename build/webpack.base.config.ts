import * as webpack from "webpack";
import { Configuration } from "webpack-dev-server";
import * as CopyPlugin from "copy-webpack-plugin";
import * as path from "path";

export function Root(...paths: string[]) {
  return path.join(__dirname, "../", ...paths);
}

export const Base: webpack.Configuration & Configuration = {
  mode: "none",

  entry: {
    app: Root("src/index")
  },
  node: {
    fs: "empty"
  },
  output: {
    path: Root("dist"),
    filename: "assets/js/[name]_[hash:8].js",
    publicPath: "/",
    chunkFilename: "assets/js/[name]_[contenthash:8].js"
  },

  resolve: {
    modules: [Root("node_modules"), "node_modules", Root("src")],
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      vars: Root("src/assets/styles/vars.scss"),
      reset: Root("src/assets/styles/reset.scss")
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader"
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|otf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "/img/[name].[ext]"
            }
          }
        ]
      }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        "ui-libs": {
          test: chunk =>
            chunk.resource &&
            /\.js$/.test(chunk.resource) &&
            /node_modules/.test(chunk.resource) &&
            /react|mobx|redux|antd/.test(chunk.resource),
          chunks: "initial",
          name: "ui-libs",
          priority: 4
        },
        "chart-libs": {
          test: chunk =>
            chunk.resource &&
            /\.js$/.test(chunk.resource) &&
            /node_modules/.test(chunk.resource) &&
            /@antv|echarts/.test(chunk.resource),
          chunks: "initial",
          name: "chart-libs",
          priority: 3
        },
        vendors: {
          test: chunk =>
            chunk.resource &&
            /\.js$/.test(chunk.resource) &&
            /node_modules/.test(chunk.resource),
          chunks: "initial",
          name: "vendors",
          priority: 1
        },
        "async-vendors": {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          chunks: "async",
          name: "async-vendors"
        }
      }
    },
    runtimeChunk: {
      name: "runtime"
    }
  },

  plugins: [new CopyPlugin([{ from: Root("src/favicon.ico"), to: "." }])] as any
};
