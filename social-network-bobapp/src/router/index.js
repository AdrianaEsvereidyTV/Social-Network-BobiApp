
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Wall from '../components/Wall.vue'


const routes =  [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path:'*',
    redirect: 'login',
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/register',
    component: Register,
    name: 'register'
  },
  {
    path: '/wall',
    component:  Wall,
    name: 'wall',
    meta: {
      autentificado:
      true}
  },
];

export default routes
