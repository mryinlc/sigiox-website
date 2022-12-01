<template>
  <div class="page">
    <BlueNavbar></BlueNavbar>
    <div class="content">
      <div class="notice-list-search">
        <SearchBar :searchContent="'搜索通知'"></SearchBar>
      </div>
      <div class="notice-list-container">
        <info-block v-for="(notice, idx) in noticeList"
                    :key="idx"
                    :info="notice"></info-block>
      </div>
      <div class="notice-list-pages">
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
import SearchBar from './page_structures/SearchBar.vue'

export default {
  name: 'Notice',
  components: {
    'el-pagination': Pagination,
    BlueNavbar,
    Footer,
    InfoBlock,
    SearchBar
  },
  data () {
    return {
      noticeList: [
        {
          day: 8,
          date: '2022.10',
          title: '组会暂停通知',
          message: '2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。'
        },
        {
          day: 10,
          date: '2022.09',
          title: '组会暂停通知',
          message: '2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。'
        },
        {
          day: 11,
          date: '2022.09',
          title: '组会暂停通知',
          message: '2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。'
        },
        {
          day: 12,
          date: '2022.09',
          title: '组会暂停通知',
          message: '2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。'
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
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.content > .notice-list-search {
  width: 50%;
  margin: 30px 0 20px 0;
}
.content > .notice-list-container {
  width: 60%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
}
.content > .notice-list-pages {
  width: 60%;
  margin: 30px 0;
  text-align: center;
}
</style>
