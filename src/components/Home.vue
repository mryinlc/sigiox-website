<template>
  <div>
    <Navbar></Navbar>
    <div class="mask">
      <img class="home-img"
           src="@/assets/images/home-img.jpg" />
    </div>
    <div class="home-text">
      <p class="title">Special Interest<br /> Group On Internet<br /> Of Everything</p>
      <p class="no-title">这是一个由东南大学熊润群副教授带领的研究小组，隶属于江苏省网络与信息安全<br />重点实验室。研究方向涉及云计算、大数据、物联网、工业互联网等。</p>
    </div>
    <div class="page">
      <div class="header"></div>
      <div class="medium">
        <introduce-block :content="contentList[0]">
          <el-button type="primary"
                     icon="el-icon-s-data"
                     circle></el-button>
        </introduce-block>
        <!-- <el-row>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </el-row> -->
      </div>
      <div class="footer">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
// import { Button, Row } from 'element-ui'
import { Button } from 'element-ui'
import Navbar from './page_structures/Navbar.vue'
import Footer from './page_structures/Footer.vue'
import IntroduceBlock from './content_structures/IntroduceBlock.vue'

export default {
  name: 'Home',
  data () {
    return {
      contentList: [
        {
          title: '数据湖',
          text: '数据湖是一个能够以原始格式存储数据的存储系统。'
        }
      ]
    }
  },
  components: {
    'el-button': Button,
    // 'el-row': Row,
    Navbar,
    Footer,
    IntroduceBlock
  }
}
</script>

<style>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 800px;
}

.mask .home-img {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 800px;
  z-index: -1;
}

.home-text {
  position: absolute;
  top: 200px;
  left: 200px;
}

.home-text .title {
  color: white;
  margin: 5px;
  font-size: 60px;
  font-weight: 600;
}

.home-text .no-title {
  color: gainsboro;
  margin: 5px;
  font-size: 15px;
  font-weight: 300;
}

.page {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.header {
  width: 100%;
  height: 800px;
  flex: 0 0 auto;
}

.medium {
  flex: 1 0 auto;
  height: 1000px;
}

.footer {
  flex: 0 0 auto;
}
</style>