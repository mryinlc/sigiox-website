<template>
  <div class="paper-block">
    <i class="el-icon-document"></i> {{paperInfo.author}} <a :href="paperInfo.pdfUrl">{{paperInfo.title}}</a> {{paperInfo.source}}
    <!-- <i class="el-icon-document"></i> Runqun Xiong, Lan Xiong, Feng Shan, Junzhou Luo: <a href="http://localhost:8080/">SBHA: An Undetectable Black Hole Attack on UANET in the Sky.</a> Concurrency and Computation: Practice and Experience, 2021:e6700. -->
    <div>
      <el-button size="mini"><a :href="paperInfo.pdfUrl">PDF</a></el-button>
      <el-button size="mini"><a :href="paperInfo.codeUrl">Code</a></el-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'element-ui'

export default {
  name: 'PaperBlcok',
  components: {
    'el-button': Button
  },
  props: ['paperInfo']
}
</script>

<style scoped>
.paper-block {
  text-align: left;
  font-size: 20px;
  font-weight: 350;
  line-height: 30px;
  margin: 20px 5px;
}
.paper-block i {
  color: #909399;
}
.paper-block a {
  text-decoration: none;
  color: #1a7fe4;
}
.paper-block a:hover {
  text-decoration: underline;
  color: #1a7fe4;
}
.paper-block button {
  color: #1a7fe4;
  border-color: #1a7fe4;
}
.paper-block button:hover {
  border-color: #1a7fe4;
  background-color: #1a7fe4;
}
.paper-block button:hover a {
  color: #fff;
  text-decoration: none;
}
</style>