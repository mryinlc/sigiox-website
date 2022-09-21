<template>
  <div>
    <navbar></navbar>
    <img src="@/assets/images/home-img.jpg" />
    <br />
    <br />
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
import { Button, Row } from 'element-ui'
import Navbar from './page_structures/Navbar.vue'

export default {
  name: 'Home',
  components: {
    'el-button': Button,
    'el-row': Row,
    Navbar
  }
}
</script>

<style>
body {
  background-color: burlywood;
}
img {
  width: 100%;
}
</style>