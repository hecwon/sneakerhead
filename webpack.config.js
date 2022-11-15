const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "client/src", "index.js"),
  output: {
    path:path.resolve(__dirname, "client/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.(jpeg|png|gif|svg)$/i,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.css$/,
        use: {
          loader: 'style-loader',
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "client/src", "index.html"),
    }),
  ],
  watch: true
}

// // COLES VERSION
// module.exports = {
//   entry: './client/index.jsx',
//   output: {
//     path: path.resolve(__dirname, 'client/dist'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.(jpeg|png|gif|svg)$/i,
//         use: {
//           loader: 'file-loader',
//         },
//       },
//       {
//         test: /\.(png|jpg|gif)$/i,
//         use: {
//           loader: 'url-loader',
//         },
//       },
//       {
//         test: /\.css$/,
//         use: {
//           loader: 'style-loader',
//         },
//       },
//     ],
//   },
//   plugins: [
//     new CompressionPlugin(),
//   ],
// };