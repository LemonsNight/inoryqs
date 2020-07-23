import Vue from 'vue'
import App from './App'
import utils from "./utils/utils.js"
Vue.config.productionTip = false

App.mpType = 'app'

import loadType from './components/common/load-type.vue'
Vue.component('load-type',loadType)
import noData from './components/common/no-data.vue'
Vue.component('no-data',noData)
import ellipsisText from './components/common/ellipsis-text.vue'
Vue.component('ellipsis-text',ellipsisText)

import share from './components/common/share/share.vue'
Vue.component('share-view',share)

import myNavigator from './components/common/my-navigator.vue'
Vue.component('my-navigator',myNavigator)

import store from './store/index.js'
Vue.prototype.$store = store
Vue.prototype.utils = utils
const app = new Vue({
    ...App,
		store
})
app.$mount()
