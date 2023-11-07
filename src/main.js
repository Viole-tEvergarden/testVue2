// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as echarts from 'echarts';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import _ from 'lodash'
import vueFilePreview from 'gxd-file-preview';

Vue.prototype._ = _;

//初始化自定义插件，（pdf.js,worker.js文件建议放在本地服务器),cdn有可能不稳定
Vue.use(vueFilePreview, {
  pdf: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.288/build/pdf.min.js', //pdf插件
  worker: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.288/build/pdf.worker.min.js',//pdf.work插件
});

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;
Vue.use(ElementUI);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
