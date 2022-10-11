<template>
  <div class="page">
    <BlueNavbar></BlueNavbar>
    <div class="content">
      <div class="news-list-search">
        <input type="text"
               :placeholder="searchContent">
      </div>
      <div class="news-list-container">
        <info-block v-for="(news, idx) in newsList"
                    :key="idx"
                    :info="news"></info-block>
      </div>
      <div class="news-list-pages">
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
import InfoBlock from './content_structures/InfoBlock.vue'
import BlueNavbar from './page_structures/BlueNavbar.vue'
import Footer from './page_structures/Footer.vue'

export default {
  name: 'Seminar',
  components: {
    'el-pagination': Pagination,
    BlueNavbar,
    Footer,
    InfoBlock
  },
  data () {
    return {
      newsList: [{
        day: 11,
        date: '2022.10',
        title: 'SIGIoX新闻1',
        message: '数据湖是一种在系统或存储库中以自然格式存储数据的方法，它有助于以各种模式和结构形式配置数据，通常是对象块或文件。数据湖中的数据包括结构化数据（关系数据库数据），半结构化数据（CSV、XML、JSON等），非结构化数据（电子邮件，文档，PDF）和二进制数据（图像、音频、视频），从而形成一个容纳所有形式数据的集中式数据存储。'
      }, {
        day: 10,
        date: '2022.10',
        title: 'SIGIoX新闻2',
        message: '数据湖是一种在系统或存储库中以自然格式存储数据的方法，它有助于以各种模式和结构形式配置数据，通常是对象块或文件。数据湖中的数据包括结构化数据（关系数据库数据），半结构化数据（CSV、XML、JSON等），非结构化数据（电子邮件，文档，PDF）和二进制数据（图像、音频、视频），从而形成一个容纳所有形式数据的集中式数据存储。'
      }],
      searchContent: '搜索新闻'
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
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.content > .news-list-search {
  width: 50%;
  margin: 20px 0;
  display: flex;
  justify-content: end;
}
.content > .news-list-search input {
  border: 1px solid gainsboro;
  border-radius: 5px;
  outline: none;
  padding: 8px 11px;
  width: 20%;
}
.content > .news-list-search input:focus {
  border: 1px solid #1a7fe4;
  border-radius: 5px;
  outline: none;
  padding: 8px 11px;
}
.content > .news-list-search input::placeholder {
  color: gainsboro;
}
.content > .news-list-container {
  width: 60%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
}
.content > .news-list-pages {
  width: 60%;
  margin: 30px 0;
  text-align: center;
}
</style>
