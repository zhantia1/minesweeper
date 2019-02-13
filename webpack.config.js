module.exports = {
  entry: "./src/App.jsx",
  output: {
    path: __dirname + "/public/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        }
      }
    ]
  },
  resolve: {extensions: [".js", ".jsx"]}

}