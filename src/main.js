// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'

import Mock from './mock'
Mock.bootstrap();

import framework7 from './framework7'

import 'bootstrap/css/bootstrap.min.css'
import 'bootstrap/js/bootstrap.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    // router,
    framework7,
    template: '<App/>',
    components: {
        App
    }
})