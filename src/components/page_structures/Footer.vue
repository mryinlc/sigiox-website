<template>
  <div class="index_footer">
    <div id="info-container">
      <div class="index_footer_text">
        <div>
          <p class="text_title">加入我们: </p>
          <p class="text_content">欢迎2023届毕业生加入SIGIoX</p>
          <p class="text_content">联系邮箱: rxiong@seu.edu.cn</p>
        </div>
        <div>
          <p class="text_title">联系我们: </p>
          <p class="text_content">联系电话: 025-52091025</p>
          <p class="text_content">地址: 东南大学九龙湖校区计算机楼368室</p>
        </div>
      </div>
    </div>
    <hr class="index_footer_line" />
    <div class="index_footer_copyright">
      copyright &copy; 2022 SIGIoX
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.index_footer {
  width: 100%;
  height: 260px;
  background: #1b3977;
}
.index_footer .index_footer_text {
  width: 65%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  padding: 30px 0;
}
#info-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.index_footer .index_footer_text .text_title {
  font-size: 20px;
  font-weight: 900;
  color: #fff;
}
.index_footer .index_footer_text .text_content {
  margin: 4px 0;
  font-size: 16px;
  font-weight: 400;
  color: gainsboro;
}
.index_footer .index_footer_line {
  border: 0.2px solid;
  color: rgb(156, 155, 155);
  margin: 15px 0;
}
.index_footer .index_footer_copyright {
  width: 100%;
  height: 20%;
  text-align: center;
  font-size: 15px;
  color: rgb(170, 170, 170);
}
</style>