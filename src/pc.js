// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Pc from './Pc.vue'
import router from './router/pc'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#pc',
  router,
  components: { Pc },
  template: '<Pc/>'
})
