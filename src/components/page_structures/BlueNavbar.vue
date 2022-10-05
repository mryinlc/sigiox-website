<template>
  <div>
    <Navbar></Navbar>
    <div class="header"></div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'BlueNavbar',
  components: {
    Navbar
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 82px;
  background: #1b3977;
}
</style>
