<template>
  <div class="person-img-info-block">
    <img class="img"
         :src="require('@/'+personInfo.imgUrl)" />
    <p class="p">{{personInfo.info}}</p>
  </div>
</template>

<script>
export default {
  name: 'PersonImage',
  props: ['personInfo']
}
</script>

<style scoped>
.person-img-info-block {
  /* height: 210px;
  width: 155px; */
  height: auto;
  width: 18%;
}
.person-img-info-block .img {
  /* height: 180px;
  width: 135px; */
  height: auto;
  width: 95%;
}
.person-img-info-block .p {
  /* font-size: 0.8vmax; */
  font-size: 14px;
  color: #606266;
  text-align: center;
  /* width: 135px; */
  width: 95%;
  height: auto;
}
</style>