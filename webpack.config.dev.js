const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:7100/');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}
module.exports = {
	devtool: process.env.NODE_ENV !== 'production' ? 'eval-source-map' : '',
	entry: {
    bundle: getEntrySources([
      './src/index.js',
    ]),
  },
	// output: {
	// 	path: __dirname, // 打包后文件存放的位置
	// 	filename: 'dist/[name].js' // [name]的值是entry的键值，[hash]是打包时候的hash值，chunkhash是md5加密的值，这里是作为版本号使用。
	// },
	// output: {
 //    publicPath: 'http://localhost:8080/',
 //    filename: 'dist/[name].js',
 //  },
 output: {
		path: __dirname,
		filename: 'dist/[name].js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			__DEBUG__: false,
			__DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV !== 'production')),
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		// new webpack.LoaderOptionsPlugin({
  //     options: {
  //       postcss: [
  //         autoprefixer({ browsers: ['last 2 versions'] })
  //       ]
  //     }
  //   }),
    new webpack.SourceMapDevToolPlugin({
        filename: '[file].map'
    }),
    // new htmlWebpackPlugin({
    // 	title:'webpack demo',
    // 	filename:'index.html'
    // })
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}, {
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.(png|jpg|jpeg|gif|svg)$/,
			loader: 'url-loader?prefix=img/&limit=53248'
		}, {
			test: /\.(woff|woff2|ttf|eot)$/,
			loader: 'url-loader?prefix=font/&limit=53248'
		}]
	},
	devServer: {
		host: '0.0.0.0',
		disableHostCheck: true
	}
	 // devServer: {
  //   contentBase: "./dist",//本地服务器所加载的页面所在的目录
  //   historyApiFallback: true,//不跳转
  //   inline: true//实时刷新
  // }
};