<template>
    <div>
      <form @submit.prevent="register">
        <h2> Registro</h2>
        <input type="text" v-model="email" placeholder="Ingresa un email"><br>
        <input type="password" v-model="password" placeholder="Ingresa un password"><br>
        <button @click="register">Registrarse</button>
        <h3><router-link to="/login">Inicia sesión</router-link></h3>
        </form>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => this.$router.replace("login"), {
        })
        .catch(error => {
            console.log(error + error.message);
          alert("Ooops" + error.message);
        });
    }
  }
};

<style scoped>

</style>
