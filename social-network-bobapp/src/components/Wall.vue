<template>
    <div>
        <nav class="navbar navbar-dark bg-dar"k>
        <img src="http://img.fenixzone.net/i/85DRokL.png" width="50" height="50" class="d-inline-block align-top"
          alt="">
        <a class="navbar-brand">Rola una rola...</a>
        <form class="form-inline">
          <button class="btn btn-secondary btn-sm" v-on:click="signOut">Cerrar sesión
          <i class="fas fa-door-open"></i>
          </button>
        </form>
</nav>
<b-col  offset-sm="2" sm = "8"  >

          <b-form-textarea  class="mt-4" id="textarea2" v-model="post" placeholder="Escribe tu publicación" :rows="4" >
                    </b-form-textarea>
            <button class="btn btn-danger" id="btn-publication" @click='addPost'>Publicar</button>

        <ul>
            <li v-for='(postName,key) in posted' :key="postName">
               {{postName.name}}

            <input type="text" v-model="editForm[key]" class="form-control">
                <button class="btn btn-info" @click="editPost(key)" ><i class="fas fa-edit"></i>Editar</button>
                 <button class="btn btn-danger" @click='deletePost(key)'><i class="fas fa-trash-alt"></i>Eliminar</button>

            </li>
        </ul>

          </b-col >

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
    created() {
      firebase
        .database()
        .ref("posted")
        .on("value", snapshot => {
          this.publications = snapshot.val();
        });
    }
  }
};
</script>

<style scoped>
nav {
  background-color: rgb(57, 173, 135);
}
</style>
