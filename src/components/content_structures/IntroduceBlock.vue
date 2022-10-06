<template>
  <el-card class="box-card">
    <div>
      <slot></slot>
      <p id="title">{{content.title}}</p>
      <p id="content">{{content.text}}</p>
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
  height: 420px;
  width: 350px;
}
#title {
  font-weight: 600;
  font-size: 20px;
}
#content {
  color: #606266;
  font-weight: 350;
  font-size: 15px;
  line-height: 27px;
}
</style>