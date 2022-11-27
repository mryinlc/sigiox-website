<template>
  <el-card class="introduce-block-box-card">
    <div>
      <slot></slot>
      <p class="introduce-block-title">{{content.title}}</p>
      <p class="introduce-block-content">{{content.text}}</p>
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
.introduce-block-box-card {
  height: auto;
  /* width: 350px; */
  width: 30%;
}
.introduce-block-box-card .introduce-block-title {
  font-weight: 600;
  font-size: 20px;
}
.introduce-block-box-card .introduce-block-content {
  color: #606266;
  font-weight: 350;
  font-size: 15px;
  line-height: 27px;
}
</style>