const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/Root.mdx",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      // ...
      {
        test: /\.mdx?$/,
        use: ["babel-loader", "@mdx-js/loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", "mdx"],
  },
};
