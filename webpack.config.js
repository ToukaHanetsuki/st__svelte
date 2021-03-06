const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            // tureにすることで、
            // svelteファイルの<style>タグをのcssを
            // 「test: /\.css$/」のフローでコンパイルできる
            emitCss: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".mjs", ".js", ".svelte"]
  },
  plugins: [
    // 出力する際のファイル名を指定する
    new MiniCssExtractPlugin({ filename: "[name].css" })
  ],
  devServer: {
    port: 9000,
    contentBase: "./",
    publicPath: "/dist/",
    open: true
  }
};
