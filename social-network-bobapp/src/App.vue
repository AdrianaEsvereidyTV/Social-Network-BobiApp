<template>
  <div id="app">
    <center>
    <img src="./assets/Logo2_.png">
    </center>
    <router-view></router-view>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

