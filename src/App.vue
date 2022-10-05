<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
body {
  margin: 0;
  padding: 0;
}
</style>
