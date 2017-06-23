/**
 * Created by ccm on 2017/6/23.
 */
function HelloWorldPlugin(options) {
  // 设置插件实例
}

HelloWorldPlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function() {
    console.log('Hello cai!');
  });
};

module.exports = HelloWorldPlugin;