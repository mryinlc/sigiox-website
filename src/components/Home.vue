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
        <p class="introduce-title">SIGIoX主要研究方向</p>
        <div class="introduce">
          <introduce-block v-for="(content, idx) in contentList"
                           :key="idx"
                           :content="content">
            <el-button type="primary"
                       :icon="content.icon"
                       circle></el-button>
          </introduce-block>
        </div>
        <p class="introduce-title">主要成员</p>
        <el-button class="view-more"
                   type="primary"
                   @click="viewMoreMemeber">查看更多<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        <div id="person-list-block">
          <person-image v-for="(personInfo, idx) in personList"
                        :key="idx"
                        :personInfo="personInfo"></person-image>
        </div>

        <div id="home-info-block">
          <div class="info-list-container">
            <div class="info-title-container">
              <p class="introduce-title">新闻</p>
              <el-button class="view-more-info"
                         type="text"
                         @click="viewMoreNews">查看更多<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </div>
            <div class="info-list">
              <info-block v-for="(info, idx) in newsList"
                          :key="idx"
                          :info="info"></info-block>
            </div>

          </div>
          <div class="info-list-container">
            <div class="info-title-container">
              <p class="introduce-title">通知</p>
              <el-button class="view-more-info"
                         type="text"
                         @click="viewMoreNotice">查看更多<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </div>
            <div class="info-list">
              <info-block v-for="(info, idx) in noticeList"
                          :key="idx"
                          :info="info"></info-block>
            </div>
          </div>
        </div>

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
import PersonImage from './content_structures/PersonImage.vue'
import InfoBlock from './content_structures/InfoBlock.vue'


export default {
  name: 'Home',
  data () {
    return {
      contentList: [
        {
          title: 'LoRa',
          text: 'LoRa是semtech公司开发的一种低功耗局域网无线标准，其名称“LoRa”是远距离无线电（Long Range Radio），它最大特点就是在同样的功耗条件下比其他无线方式传播的距离更远，实现了低功耗和远距离的统一，它在同样的功耗下比传统的无线射频通信距离扩大3-5倍。',
          icon: 'el-icon-upload'
        },
        {
          title: '数据湖',
          text: '数据湖是一种在系统或存储库中以自然格式存储数据的方法，它有助于以各种模式和结构形式配置数据，通常是对象块或文件。数据湖中的数据包括结构化数据（关系数据库数据），半结构化数据（CSV、XML、JSON等），非结构化数据（电子邮件，文档，PDF）和二进制数据（图像、音频、视频），从而形成一个容纳所有形式数据的集中式数据存储。',
          icon: 'el-icon-s-data'

        },
        {
          title: '区块链',
          text: '区块链，就是一个又一个区块组成的链条。每一个区块中保存了一定的信息，它们按照各自产生的时间顺序连接成链条。这个链条被保存在所有的服务器中，只要整个系统中有一台服务器可以工作，整条区块链就是安全的。相比于传统的网络，区块链具有两大核心特点：一是数据难以篡改、二是去中心化。基于这两个特点，区块链所记录的信息更加真实可靠，可以帮助解决人们互不信任的问题。',
          icon: 'el-icon-share'
        }
      ],
      personList: [
        {
          info: '熊润群 副教授 博士',
          imgUrl: 'http://106.15.249.85/wp-content/uploads/elementor/thumbs/-e1652621608567-pourdrzwbqlel8pmuls8uws8ftgj92x9jgffa1cths.jpg'
        },
        {
          info: '徐祝庆 博士',
          imgUrl: 'http://106.15.249.85/wp-content/uploads/elementor/thumbs/2-poiokzs151434z9543pqmc3npq1dxdgghdasjvw7kg.jpeg'
        },
        {
          info: '谢玮 博士',
          imgUrl: 'http://106.15.249.85/wp-content/uploads/elementor/thumbs/1-poiopemr815jn2uecidotq0k3uaf27z3f7junncocw.jpg'
        },
        {
          info: '陈慈媛 博士',
          imgUrl: 'http://106.15.249.85/wp-content/uploads/elementor/thumbs/4-poupyae5yg3ym7i3icjy9wj8zz8plyil4lxwwdp6c0.jpeg'
        },
        {
          info: '田巍 博士',
          imgUrl: 'http://106.15.249.85/wp-content/uploads/elementor/thumbs/博士-田巍-1-e1652619694577-poupzswsyu6lblawo04bairzgbs00ej0o3s2qfgcb4.jpeg'
        },
      ],
      newsList: [
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
        },
        {
          day: 13,
          date: '2022.09',
          title: '组会暂停通知',
          message: '2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。2022年8月的组会暂停一个月，开学后恢复正常。'
        }
      ],
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
  },
  components: {
    'el-button': Button,
    // 'el-row': Row,
    Navbar,
    Footer,
    IntroduceBlock,
    PersonImage,
    InfoBlock
  },
  methods: {
    viewMoreMemeber () {
      this.$router.push('/memeber')
    },
    viewMoreNews () {
      this.$router.push('/news')
    },
    viewMoreNotice () {
      this.$router.push('/notice')
    }
  }
}
</script>

<style scoped>
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
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.medium .introduce {
  width: 60%;
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-evenly;
}

.medium .introduce-title {
  width: 68%;
  text-align: center;
  font-weight: 700;
  font-size: 35px;
  margin: 50px 0;
}

#person-list-block {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 55%;
  margin: 40px 0;
}

.view-more {
  margin: -20px 0 20px 0;
}

#home-info-block {
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 50px 0;
}

#home-info-block .info-list-container {
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

/* #home-info-block .info-list-container:last-child {
  border-left: 1px solid rgb(171, 171, 171);
} */

#home-info-block .info-list-container .info-title-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  height: auto;
}

#home-info-block .info-list-container .info-title-container .introduce-title {
  text-align: left;
  margin: 0;
  padding: 0;
}

#home-info-block .info-list-container .info-title-container .view-more-info {
  padding: 0;
  margin: 0;
}

#home-info-block .info-list-container .info-list {
  width: 90%;
  margin: 0;
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.footer {
  flex: 0 0 auto;
}
</style>