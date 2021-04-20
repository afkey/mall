const path = require('path');
 // 如果编辑器启用了代码检查功能，此行代码在编辑器中会报警

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      // 需要重启 IDE
      // .set('assets',resolve('src/asstes'))
      // .set('views',resolve('src/views'))
      // .set('components',resolve('src/components'))
  }
};