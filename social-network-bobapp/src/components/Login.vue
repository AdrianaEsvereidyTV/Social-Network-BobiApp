<template>
  <div>
    <h2>
       Login
    </h2>
    <form @submit.prevent ='login'>
      <input type="npmtext" placeholder="Usuario" v-model="usuario"><br>
      <input type="password" placeholder="Password" v-model="password"><br>
      <button type="submit" class="btn btn-secondary btn-sm">Iniciar Sesión</button><br>
      <button type="submit" class="btn-google"></button><br>
    </form>
    <h3 class="mt-4 text-black lead text-center">
       Ingresa y haz tuya está comunidadcd
      <i class="fas fa-grin-squint"></i>
       <router-link to="/register">¡Registrate!</router-link>
     </h3>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      usuario: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.password)
        .then(
          user => this.$router.replace("wall"),
          error => alert("Oops" + error.message)
        );
    },
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

form > * {
  display: block;
}
</style>
