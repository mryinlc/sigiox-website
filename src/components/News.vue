<template>
  <div class="page">
    <BlueNavbar></BlueNavbar>
    <div class="content">
      这是新闻页面
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import BlueNavbar from './page_structures/BlueNavbar.vue'
import Footer from './page_structures/Footer.vue'

export default {
  name: 'Seminar',
  components: {
    BlueNavbar,
    Footer
  }
}
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content {
  width: 100%;
  height: 600px;
}
</style>
