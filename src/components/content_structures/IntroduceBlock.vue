<template>
  <el-card class="introduce-block-box-card">
    <div>
      <slot></slot>
      <p id="introduce-block-title">{{content.title}}</p>
      <p id="introduce-block-content">{{content.text}}</p>
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
  height: 420px;
  width: 350px;
}
#introduce-block-title {
  font-weight: 600;
  font-size: 20px;
}
#introduce-block-content {
  color: #606266;
  font-weight: 350;
  font-size: 15px;
  line-height: 27px;
}
</style>