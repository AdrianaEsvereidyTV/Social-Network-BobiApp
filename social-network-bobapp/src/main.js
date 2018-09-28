import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import firebase from 'firebase'

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  console.log(usuario);
  let autorizacion = to.matched.some(record => record.meta.autentificado);

  if (autorizacion && !usuario) {
    netx("login");
  } else if (!autorizacion && usuario) {
    next("wall");
  } else {
    next();
  }
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
