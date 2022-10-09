<template>
  <el-card class="person-info-block">
    <div id="img-container">
      <img id="img"
           src="http://106.15.249.85/wp-content/uploads/elementor/thumbs/-e1652621608567-pourdrzwow8e4aw6lvwucg0qsekfz733kccrbr5heo.jpg" />
    </div>
    <div class="message-blcok">
      <p id="person-name">熊润群</p>
      <p id="person-identity">博士 & 副教授</p>
      <p id="person-mail"><i class="el-icon-message"></i> rqxiong@seu.edu.cn</p>
    </div>
  </el-card>
</template>

<script>
import { Card } from 'element-ui'

export default {
  name: 'PersonInfoBlock',
  components: {
    'el-card': Card
  }
}
</script>

<style scoped>
.person-info-block {
  height: 340px;
  width: 250px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.person-info-block #img-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.person-info-block #img-container #img {
  height: 180px;
  width: 135px;
  margin: 0;
  padding: 0;
  object-fit: contain;
}
/* .person-info-block .message-blcok {
  width: auto;
} */
.person-info-block .message-blcok #person-name {
  width: 135px;
  height: 19px;
  margin: 18px 0 12px 0;
  padding: 0;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
}
.person-info-block .message-blcok #person-identity {
  width: 135px;
  height: 13px;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 12px;
  color: #909399;
  text-align: center;
}
.person-info-block .message-blcok #person-mail {
  width: auto;
  height: 15px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  color: #606266;
  margin: 18px 0;
  padding: 0;
}
</style>