<template>
  <div id="app">
    <center>
    <img src="http://i66.tinypic.com/2larfc8.png" class="mx-auto d-block img-fluid">
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

