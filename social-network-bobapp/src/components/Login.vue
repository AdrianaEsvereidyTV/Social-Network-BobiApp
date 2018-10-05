<template>
  <div>
     <center>
    <img src="http://img.fenixzone.net/i/85DRokL.png" class="mx-auto d-block img-fluid">
    </center>
    <h2>
       Si ya tienes una cuenta, comienza a disfrutar...
    </h2>
    <div class="mt-4">
    <form @submit.prevent ='login'>
      <div class="form-group">
      <input class="form-control" type="email" placeholder="Correo electrónico" v-model="email" required><br>
      </div>
      <div class="form-group">
      <input class="form-control" type="password" placeholder="Contraseña" v-model="password" required><br>
      </div>
      <button type="submit" class="btn btn-secondary btn-sm">Iniciar Sesión</button><br>
    </form>
      <p class="content-divider text-center mt-4">
        <span>Ingresa con: </span>
       </p>
    </div>
       <p class="mt-4 text-center">
      <button class="btn btn-danger" @click="google">
         <i class="fab fa-google"></i>
      </button>
       <button id="facebook-button" class="btn btn-primary" @click="facebook">
         <i class="fab fa-facebook-f"></i>
       </button>
       </p>
      <br>
    <h3 class="mt-4 text-black lead text-center">
       Ingresa y haz tuya está comunidad
      <i class="fas fa-grin-squint"></i>
       <router-link to="/register">¡Regístrate!</router-link>
     </h3>
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
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => this.$router.replace("wall"),
          error => alert("Usuario inexistente", error.message)
        );
    },
    google() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const token = result.credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          this.$router.replace("wall");
          // ...
        })
        .catch(error => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential;
          // ...
          console.log(errorMessage);
        });
    },
    facebook() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const token = result.credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          this.$router.replace("wall")
          // ...
        })
        .catch(function(error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential;
          // ...
        });
    }
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
</style>
