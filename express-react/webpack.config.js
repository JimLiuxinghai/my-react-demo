/**
 * Created by liujim on 16/3/11.
 */

module.exports = {
  entry: './public/js/demo.js',
  output: {
    path: './public/js',// 输出文件的保存路径
    filename: 'bundle.js' // 输出文件的名称
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?presets[]=es2015'],
      exclude: /node_modules/
    }]
  }
};


