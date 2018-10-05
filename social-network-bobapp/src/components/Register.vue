<template>
 <div>
    <center>
    <img src="http://img.fenixzone.net/i/85DRokL.png" class="mx-auto d-block img-fluid">
    </center>
   <div class="mt-4">
     <form @submit.prevent="register">
       <h1>Crea una nueva cuenta</h1>
        <div class="form-group">
         <input class="form-control" type="email" placeholder="Correo electrónico" v-model="email" required><br>
        </div>
        <div class="form-group">
         <input class="form-control" type="password" placeholder="Contraseña" v-model="password" required><br>
        </div>
          <button class="btn btn-secondary btn-sm">Registrar</button>
     </form>
   </div>
  </div>
</template>


<script>
import firebase from "firebase";
export default {
  name: "register",
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
        .then(user => this.$router.replace("wall"), {})
        .catch(error => {
          alert("Lo sentimos, el registro ha fallado", error.message);
        });
    }
  }
};
</script>


<style  scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
