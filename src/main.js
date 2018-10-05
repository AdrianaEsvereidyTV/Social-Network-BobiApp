import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes
});


new Vue({
  router,
  el: "#app",
  render: h => h(App)
});

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAV12LEBGbfssyva2vjAlHNSHZ1xDWoZSM",
  authDomain: "amice-32e9d.firebaseapp.com",
  databaseURL: "https://amice-32e9d.firebaseio.com",
  projectId: "amice-32e9d",
  storageBucket: "amice-32e9d.appspot.com",
  messagingSenderId: "845363159362"
};
firebase.initializeApp(config);

window.firebase = firebase; 
