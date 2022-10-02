<template>
  <div class="navbar">
    <div class="navbar_hover_back">
      <div class="container">
        <div class="logo">
          <router-link to="/"><img v-lazy="require('@/assets/images/seu.png')"></router-link>
          <!-- <router-link to="/"><img :src="require('@/assets/images/seu.png')"></router-link> -->
        </div>
        <div class="menu">
          <router-link to="/"
                       class="navigator home_active">首页</router-link>
          <router-link to="/"
                       class="navigator home_active">成员</router-link>
          <router-link to="/"
                       class="navigator home_active">组会</router-link>
          <router-link to="/"
                       class="navigator home_active">项目</router-link>
          <router-link to="/"
                       class="navigator home_active">专利</router-link>
          <router-link to="/"
                       class="navigator home_active">论文</router-link>
          <router-link to="/"
                       class="navigator home_active">新闻</router-link>
          <!-- <router-link to="/solution_index"
                       class="navigator home_active">
            <i>解决方案</i>
            <div class="navigator_level2">
              <div class="navigator_level2_center">
                <router-link to="/solution"
                             class="navigator_item">微官网</router-link>
                <router-link to="/solution_mall"
                             class="navigator_item">微商城</router-link>
                <router-link to="/solution_distribution"
                             class="navigator_item">微分销</router-link>
                <router-link to="/solution_member"
                             class="navigator_item">微会员</router-link>
              </div>
            </div>
          </router-link> -->
        </div>
        <div class="func">
          <router-link class="navigator"
                       :to="header.func.href[index]"
                       v-for="(fun,index) in header.func.text"
                       :key="index">{{fun}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      header: {
        logo: {
          text: "SIGIoX"
        },
        func: {
          text: ["登录", "管理中心"],
          href: ["/", "/", "/"]
        }
      }
    }
  },
}
</script>

<style scoped>
@media screen and (max-width: 1200px) {
}
@keyframes navbar {
  0% {
    width: 100%;
    min-height: 0;
    background: #fff;
    position: absolute;
    top: 15px;
    left: 0;
    height: 0;
    overflow: hidden;
    opacity: 0;
  }
  100% {
    width: 100%;
    height: auto;
    top: 5px;
    opacity: 1;
  }
}

.navbar {
  width: 100%;
  height: 80px;
  font-family: 'microsoft yahei';
  background: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
.navbar .navbar_hover_back {
  width: 100%;
  height: 80px;
  background: none;
  transition: background-color 0.8s;
}
.navbar .navbar_hover_back:hover {
  background: rgba(0, 0, 0, 0.15);
}
.navbar .container {
  width: 1400px;
  height: 80px;
  color: #fff;
  display: flex;
  margin: 0 auto;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.navbar .container .logo {
  width: 150px;
  font-size: 24px;
  text-align: left;
  height: 45px;
  color: #fff;
  margin-top: 11px;
}
.navbar .container .logo img,
.navbar .container .logo a {
  width: 100%;
  height: 50px;
}
.navbar .container .menu {
  width: 900px;
  height: 80px;
  display: flex;
  flex-direction: row;
}
.navbar .container .menu > .navigator:first-child {
  margin-left: 380px;
}
.navbar .container .menu > .navigator {
  display: inline-block;
  width: auto;
  height: 80px;
  line-height: 80px;
  color: #fff;
  /* float: right; */
  font-size: 16px;
  padding: 0 20px;
  margin: 0;
  position: relative;
}
.navbar .container .menu > .navigator .navigator_level2 {
  width: 100%;
  min-height: 0;
  background: #fff;
  position: absolute;
  top: 220px;
  left: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
}
.navbar .container .menu > .navigator:hover .navigator_level2 {
  width: 100%;
  height: auto;
  top: 60px;
  opacity: 1;
  animation: navbar 0.5s ease-in 1;
}
.navbar
  .container
  .menu
  > .navigator
  .navigator_level2
  .navigator_level2_center {
  width: 100%;
  height: auto;
  line-height: 42px;
  text-align: center;
}
.navbar
  .container
  .menu
  > .navigator
  .navigator_level2
  .navigator_level2_center
  a:hover {
  color: #2f5cff;
}
.navbar
  .container
  .menu
  > .navigator
  .navigator_level2
  .navigator_level2_center
  a {
  display: inline-block;
  width: 100%;
  color: #666;
  font-size: 14px;
}
.navbar .container .func {
  width: 170px;
  height: 45px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.navbar .container .func .navigator {
  width: 70px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  padding: 0;
  margin: 0 0;
  margin-left: 2px;
  border: 1px solid #fff;
  text-align: center;
  color: #fff;
  background: none;
  transition: all 0.8s;
}
/* .navbar .container .func .navigator:nth-child(2) {
  border: 1px solid #fff;
  background: #fff;
  color: #2f5cff;
} */
.navbar .container .func .navigator:hover {
  border: 1px solid #fff;
  background: #fff;
  color: #2f5cff;
}
/*路由样式*/
.navbar
  .container
  .menu
  > .navigator
  .navigator_level2
  .navigator_level2_center
  a.navigator_item.router-link-exact-active {
  color: #2f5cff;
}
.navbar .navigator.router-link-exact-active.home_active.pl_active {
  border-bottom: 3px solid #fff;
  box-sizing: border-box;
}
.navbar .container .menu:hover > .navigator.router-link-exact-active.pl_active {
  border: none;
}
.navbar .container .menu:hover > .navigator.pl_active:hover {
  border-bottom: 3px solid #fff;
  box-sizing: border-box;
}
.navbar .container .menu > .navigator:hover {
  border-bottom: 3px solid #fff;
  box-sizing: border-box;
}
</style>
