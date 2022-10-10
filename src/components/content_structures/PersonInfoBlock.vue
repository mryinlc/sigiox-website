<template>
  <el-card class="person-info-block">
    <div id="img-container">
      <img id="img"
           :src="person.imgUrl" />
    </div>
    <div class="message-blcok">
      <p id="person-name">{{person.name}}</p>
      <p id="person-identity">{{person.identity}}</p>
    </div>
    <div class="mail-button-block">
      <el-tooltip :content="person.mail"
                  placement="bottom">
        <el-button icon="el-icon-message"
                   size="mini"
                   circle></el-button>
      </el-tooltip>
    </div>
  </el-card>
</template>

<script>
import { Card, Tooltip, Button } from 'element-ui'

export default {
  name: 'PersonInfoBlock',
  props: ['person'],
  components: {
    'el-card': Card,
    'el-tooltip': Tooltip,
    'el-button': Button
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
  height: 180px;
  width: 135px;
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
.person-info-block .mail-button-block {
  width: 135px;
  height: 30px;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>