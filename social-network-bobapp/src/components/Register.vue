<template>
<div class="register">
   <form @submit.prevent="register">
     <h1>Registrate</h1>
        <input type="email" v-model="email" placeholder="e-mail">
        <input type="password" v-model="password" placeholder="contraseña">
        <button class="btn btn-info">Registrarme</button>

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
         alert('Ooops' + error.message)
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
