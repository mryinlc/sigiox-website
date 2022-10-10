<template>
  <div class="page">
    <BlueNavbar></BlueNavbar>
    <div class="content">
      <div class="paper-list">
        <paper-block></paper-block>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import BlueNavbar from './page_structures/BlueNavbar.vue'
import Footer from './page_structures/Footer.vue'
import PaperBlock from './content_structures/PaperBlock.vue'

export default {
  name: 'Seminar',
  components: {
    BlueNavbar,
    Footer,
    PaperBlock
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
.content > .paper-list {
  width: 50%;
}
</style>
