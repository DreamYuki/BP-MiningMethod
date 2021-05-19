<template>
  <div class="navigation">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#ffd04b">
    <el-menu-item index="1"><router-link to="/"><i class="el-icon-s-home"></i>首页</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/introduction">项目介绍</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="/train">模型训练</router-link></el-menu-item>
    <el-menu-item index="4"><router-link to="/dataview" @click="closeBanner()">数据展示</router-link></el-menu-item>
    </el-menu>

<!-- login -->
    <el-menu class="el-menu-demo login" mode="horizontal" @select="handleSelect" active-text-color="#fff" id="loginComponet">
    <Login/>
    </el-menu>
  </div>
</template>

<script>
import Login from '../components/Login.vue'
export default {
    name: "Navigation",
    inject: ['reload'],
    components: {
        Login
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    props: ['loginEntry'],
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      closeBanner() {
            alert("这里处理Banner和页面重定向刷新")
            this.$emit('BannerBtn', false)
        }
    },
}
</script>

<style scoped>
.el-menu-demo {
    float: left;
    font-weight: 700;
    color: #fff;
    margin: 0;
    background: rgba(0, 0, 0, 0.01);
    border: 0;
    
}
.el-menu-item {
    font-size: 16px;
    user-select:none;
}
.el-menu-item:focus {
    background-color: #ff1;
    color: #000;
}
.login {
    float: right;
}

a {
  display: flex;
  flex-direction: row;
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}

#loginComponet {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}
.el-icon-s-home {
    display: block;
    margin-top: 20px;
    margin-right: 0;
    height: 17px;
}
</style>