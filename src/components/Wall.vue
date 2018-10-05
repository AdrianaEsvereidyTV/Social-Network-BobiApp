<template>
    <div>
        <nav class="navbar navbar-dark bg-dar">
        <img src="http://img.fenixzone.net/i/85DRokL.png" width="50" height="50" class="inline-block align-top"
          alt="">
        <a class="navbar-brand">Rola una rola...</a>
        <form class="form-inline">
          <button class="btn btn-secondary btn-sm" v-on:click="signOut">Cerrar sesión
          <i class="fas fa-door-open"></i>
          </button>
        </form>
</nav>

          <b-form-textarea  class="mt-4" v-model="post" placeholder="Postea tu rola" :rows="4">
                    </b-form-textarea>
            <button class="btn btn-dark" @click='addPost'>Publicar</button>

        <ul>
            <li v-for='(postName,key) in posted' :key="key">
               {{postName.name}}

            <input type="text" v-model="editPost[key]" class="form-control">
                <b-button class="btn btn-info" @click="editPost(key)" ><i class="fas fa-pencil-alt"></i> Editar</b-button>
                 <b-button class="btn btn-danger" @click='deletePost(key)'><i class="fas fa-trash"></i> Eliminar</b-button>

            </li>
        </ul>


    </div>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      post: null,
      posted: [],
      editPost: []
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
          console.log("Error al cerrar sesión, vuelva a intentarlo", error);
        });
    },
    addPost() {
      firebase
        .database()
        .ref("posted")
        .push({ name: this.post })
        .then(data => {
          console.log(data);
        })
        .cath(error => {
          console.log(error);
        });
    },
    editPost(key) {
      firebase
        .database()
        .ref("posted/" + key)
        .set({ name: this.editPost[key] });
      this.editPost = [];
    },
    deletePost(key) {
      firebase
        .database()
        .ref("posted/" + key)
        .remove();
    },
    },
    created() {
      firebase
        .database()
        .ref("posted")
        .on("value", (snapshot) => {
          this.posted = snapshot.val();
        });
    }
  };
</script>

<style scoped>
nav {
  background-color: rgb(57, 173, 135);
}
</style>
