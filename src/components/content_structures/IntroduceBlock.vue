<template>
  <el-card class="box-card">
    <div>
      <slot></slot>
      <p id="title">{{content.title}}</p>
      <p>{{content.text}}</p>
    </div>
  </el-card>
</template>

<script>
import { Card } from 'element-ui'

export default {
  name: 'IntroduceBlock',
  props: ['content'],
  components: {
    'el-card': Card
  }
}
</script>

<style scoped>
.box-card {
  height: 400px;
  width: 300px;
}
</style>