<template>
  <div id="info-block">
    <img id="img"
         :src="personInfo.imgUrl" />
    <p id="p">{{personInfo.info}}</p>
  </div>
</template>

<script>
export default {
  name: 'PersonImage',
  props: ['personInfo']
}
</script>

<style scoped>
#info-block {
  height: 210px;
  width: 155px;
}
#img {
  height: 180px;
  width: 135px;
}
#p {
  font-size: 14px;
  color: #606266;
  text-align: center;
  width: 135px;
  height: auto;
}
</style>