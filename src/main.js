// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueFire from 'vuefire'
import firebase from 'firebase'


Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueFire)

const config = {
  apiKey: "AIzaSyCEq39n_xZW0QtRIX4_Gfbm0fpB21eTjq0",
  authDomain: "pwadojo.firebaseapp.com",
  databaseURL: "https://pwadojo.firebaseio.com",
  projectId: "pwadojo",
  storageBucket: "pwadojo.appspot.com",
  messagingSenderId: "445295830164"
};

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()



/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  firebase: {
    catslist: db.ref('pictures')
  }
})
