<template>
    <div>
      <h1>holaaaaaaa</h1>
        <button v-on:click="signOut">Cerrar sesión</button><br>
        <input type="text">
    </div>
</template>
<script>
import firebase from 'firebase';
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(user => {
          this.$router.replace("login");
        })
        .catch(error => {
          console.log("Error al cerrar sesión", error);
        });
    }
  }
};
</script>
