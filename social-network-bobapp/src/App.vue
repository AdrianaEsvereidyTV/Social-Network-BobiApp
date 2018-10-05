<template>
  <div id="app">

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
<style lang="scss">

 @import './css/main.css';

</style>
