<template>
  <div id="info">
    <div id="date">
      <p id="day">{{info.day}}</p>
      <p id="year-month">{{info.date}}</p>
    </div>
    <div id="message">
      <p id="title">{{info.title}}</p>
      <p id="content">{{info.message}}</p>
    </div>
    <div id="icon">
      <img id="icon-img"
           src="@/assets/images/icon_jiantou.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBlock',
  props: ['info']
}
</script>

<style scoped>
#info {
  width: 92%;
  height: auto;
  padding: 20px;
  margin: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: #f2f6fa;
  border-radius: 10px;
}
#date {
  width: 10%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
#day {
  text-align: left;
  font-weight: 600;
  font-size: 20px;
  margin: 0;
  padding: 0;
}
#year-month {
  text-align: left;
  font-weight: 350;
  font-size: 15px;
  margin: 0;
  padding: 0;
}
#message {
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-left: 1px solid rgb(171, 171, 171);
  padding-left: 20px;
}
#title {
  text-align: left;
  font-weight: 600;
  font-size: 20px;
  margin: 0;
  margin-bottom: 5px;
  padding: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
#content {
  text-align: left;
  font-size: 13px;
  color: #606266;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  padding: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
#icon {
  width: 10%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>