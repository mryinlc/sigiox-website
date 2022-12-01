<template>
  <div class="page">
    <BlueNavbar></BlueNavbar>
    <div class="content">
      <div class="paper-search">
        <SearchBar :searchContent="'搜索论文'"></SearchBar>
      </div>
      <div class="paper-list">
        <paper-block v-for="(paper, idx) in paperList"
                     :key="idx"
                     :paperInfo="paper"></paper-block>
      </div>
      <div class="paper-list-pages">
        <el-pagination background
                       layout="prev, pager, next"
                       :total="100"
                       :page-size="5">
        </el-pagination>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { Pagination } from 'element-ui'
import BlueNavbar from './page_structures/BlueNavbar.vue'
import Footer from './page_structures/Footer.vue'
import PaperBlock from './content_structures/PaperBlock.vue'
import SearchBar from './page_structures/SearchBar.vue'

export default {
  name: 'Seminar',
  components: {
    'el-pagination': Pagination,
    BlueNavbar,
    Footer,
    PaperBlock,
    SearchBar
  },
  data () {
    return {
      paperList: [
        {
          author: 'Runqun Xiong, Lan Xiong, Feng Shan, Junzhou Luo:',
          title: 'SBHA: An Undetectable Black Hole Attack on UANET in the Sky.',
          source: 'Concurrency and Computation: Practice and Experience, 2021:e6700.',
          pdfUrl: 'http://localhost:8080/',
          codeUrl: 'http://localhost:8080/'
        }, {
          author: '罗军舟, 何源, 张兰, 刘亮, 孙茂杰, 熊润群*, 东方:',
          title: '云端融合的工业互联网体系结构及关键技术.',
          source: '中国科学. 信息科学, 50卷, 2期: 195-220, 2020.',
          pdfUrl: 'http://localhost:8080/',
          codeUrl: 'http://localhost:8080/'
        }, {
          author: 'Runqun Xiong, Lan Xiong, Feng Shan, Junzhou Luo:',
          title: 'SBHA: An Undetectable Black Hole Attack on UANET in the Sky.',
          source: 'Concurrency and Computation: Practice and Experience, 2021:e6700.',
          pdfUrl: 'http://localhost:8080/',
          codeUrl: 'http://localhost:8080/'
        }, {
          author: '罗军舟, 何源, 张兰, 刘亮, 孙茂杰, 熊润群*, 东方:',
          title: '云端融合的工业互联网体系结构及关键技术.',
          source: '中国科学. 信息科学, 50卷, 2期: 195-220, 2020.',
          pdfUrl: 'http://localhost:8080/',
          codeUrl: 'http://localhost:8080/'
        }
      ]
    }
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
  height: auto;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.content > .paper-search {
  width: 50%;
  margin: 30px 0 0 0;
}
.content > .paper-list {
  width: 50%;
}
.content > .paper-list-pages {
  width: 60%;
  display: flex;
  justify-content: center;
  margin: 20px 0 60px 0;
}
</style>
