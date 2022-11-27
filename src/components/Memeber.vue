<template>
  <div class="page">
    <BlueNavbar></BlueNavbar>
    <div class="content">
      <p class="memeber-title">SIGIoX团队成员</p>
      <p class="memeber-subtitle">Faculty</p>
      <div class="faculty-info">
        <person-info-block :person="facultyInfo"></person-info-block>
        <p>熊润群，男，博士，副教授。诺贝尔奖获得者丁肇中教授领导的AMS大型物理实验主要参与人、国际计算机学会ACM南京分会秘书长、江苏省计算机学会云计算专委会秘书长。本科毕业于东南大学信息与计算科学专业，硕博毕业于东南大学计算机应用技术专业，导师罗军舟教授。毕业留校任教至今，研究方向涉及云计算、大数据和物联网等。作为AMS实验东南大学核心参与人员，曾赴欧洲核子研究中心(CERN)参与AMS-02 SOC建设以及AMS-02实验数据处理。主持承担2项国家自然科学基金项目、1项国家重点研发计划项目子课题和1项江苏省自然科学基金项目，并作为核心技术骨干参加了1项国家重点研发计划项目、1项国家自然科学基金重点项目和1项国家自然科学基金重大国际(地区)合作项目。累计以第一作者的身份在国内外学术期刊和会议上发表论文10余篇，以合作者身份在国际物理学知名学术期刊《Physical Review Letters》以及其他国际期刊和会议上发表论文50余篇（Google Scholar被引用次数超过6,500次，H-Index 21）</p>
      </div>
      <p class="memeber-subtitle">PhD Students</p>
      <div class="phd-info">
        <div v-for="(student, idx) in phdStudents"
             :key="idx"
             class="student-info"
             :style="student.style">
          <person-info-block :person="student"></person-info-block>
        </div>
      </div>
      <p class="memeber-subtitle">Master Students</p>
      <div class="phd-info">
        <div v-for="(student, idx) in masterStudents"
             :key="idx"
             class="student-info"
             :style="student.style">
          <person-info-block :person="student"></person-info-block>
        </div>
      </div>
      <p class="memeber-subtitle">Alumni</p>
      <div class="phd-info">
        <div v-for="(student, idx) in alumni"
             :key="idx"
             class="student-info"
             :style="student.style">
          <person-info-block :person="student"></person-info-block>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import PersonInfoBlock from './content_structures/PersonInfoBlock.vue'
import BlueNavbar from './page_structures/BlueNavbar.vue'
import Footer from './page_structures/Footer.vue'

export default {
  name: 'Memeber',
  components: {
    BlueNavbar,
    Footer,
    PersonInfoBlock
  },
  data () {
    return {
      facultyInfo: {
        imgUrl: 'assets/images/memeber_imgs/xiongrunqun.jpeg',
        name: '熊润群',
        identity: '博士 & 副教授',
        mail: 'rqxiong@seu.edu.cn',
      },
      phdStudents: [
        {
          imgUrl: 'assets/images/memeber_imgs/xuzhuqing.jpeg',
          name: '徐祝庆',
          identity: '博士',
          mail: 'zqxu@seu.edu.cn',
        }, {
          imgUrl: 'assets/images/memeber_imgs/xiewei.jpeg',
          name: '谢玮',
          identity: '博士',
          mail: 'cyecharlie@hotmail.com',
        }, {
          imgUrl: 'assets/images/memeber_imgs/chenciyuan.jpeg',
          name: '陈慈媛',
          identity: '博士',
          mail: 'cychen@seu.edu.cn',
        }, {
          imgUrl: 'assets/images/memeber_imgs/tianwei.jpeg',
          name: '田巍',
          identity: '博士',
          mail: 'tianwee@hotmail.com',
        }
      ],
      masterStudents: [
        {
          imgUrl: 'assets/images/memeber_imgs/xujiajun.jpeg',
          name: '徐佳君',
          identity: '专硕',
          mail: '747180864@qq.com'
        }, {
          imgUrl: 'assets/images/memeber_imgs/yuxinze.jpeg',
          name: '于新泽',
          identity: '专硕',
          mail: '1527010766@qq.com'
        }, {
          imgUrl: 'assets/images/memeber_imgs/dongxirui.jpeg',
          name: '董夕瑞',
          identity: '学硕',
          mail: '18061233789@163.com'
        }, {
          imgUrl: 'assets/images/memeber_imgs/yebingchen.jpeg',
          name: '叶炳辰',
          identity: '学硕',
          mail: 'bingchenye@seu.edu.cn'
        }, {
          imgUrl: 'assets/images/memeber_imgs/linjingkai.jpeg',
          name: '林敬凯',
          identity: '学硕',
          mail: '948432920@qq.com'
        }, {
          imgUrl: 'assets/images/memeber_imgs/yuzefan.jpeg',
          name: '虞泽凡',
          identity: '专硕',
          mail: '3488266048@qq.com'
        }, {
          imgUrl: 'assets/images/memeber_imgs/yinluchao.jpeg',
          name: '尹路超',
          identity: '专硕',
          mail: 'mryinlc@seu.edu.cn'
        }, {
          imgUrl: 'assets/images/memeber_imgs/xiaoqing.jpeg',
          name: '肖庆',
          identity: '专硕',
          mail: 'xiaoqing@seu.edu.cn'
        }
      ],
      alumni: [
        {
          imgUrl: 'assets/images/memeber_imgs/zourongyu.jpeg',
          name: '邹荣誉',
          identity: '专硕',
          mail: '1010399307@qq.com'
        }, {
          imgUrl: 'assets/images/memeber_imgs/liangchuan.jpeg',
          name: '梁川',
          identity: '专硕',
          mail: '156652677@qq.com'
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.content .memeber-title {
  width: 68%;
  text-align: center;
  font-weight: 700;
  font-size: 35px;
  margin: 60px 0;
}
.content .memeber-subtitle {
  width: 68%;
  text-align: center;
  font-weight: 600;
  font-size: 28px;
  margin: 20px 0;
}
.content .faculty-info {
  width: 60%;
  display: grid;
  justify-content: space-evenly;
  align-items: center;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 20px;
  margin-bottom: 40px;
}
.content .faculty-info p {
  text-align: left;
  color: #606266;
  font-weight: 350;
  font-size: 15px;
  line-height: 27px;
}
.content .phd-info {
  width: 60%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 260px);
  grid-gap: 15px 10px;
  margin-bottom: 40px;
}
</style>
