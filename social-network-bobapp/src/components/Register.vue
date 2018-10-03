<template>
<div class="register">
   <form @submit.prevent="register">
     <h1>Crea una nueva cuenta</h1>
        <input type="email" v-model="email" placeholder="correo electrónico">
        <input type="password" v-model="password" placeholder="contraseña">
        <button class="btn btn-secondary btn-sm">Registrar</button>

    </form>
</div>
</template>


<script>
import firebase from 'firebase'
export default {
  name: 'register',
  data () {
    return {
      email:'',
      password:''
    }
  },
  methods: {
    register () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(user => this.$router.replace('login'), {
       }).catch ((error) => {
         alert('Lo sentimos, el registro ha fallado', error.message)
            });
        }
    }
}
</script>


<style  scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
