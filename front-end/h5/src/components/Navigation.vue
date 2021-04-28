<template>
  <div class="navigation">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#ffd04b">
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">项目介绍</el-menu-item>
    <el-menu-item index="3">模型训练</el-menu-item>
    <!-- <el-submenu index="3">
      <template #title>
          模型训练
      </template>
      <el-menu-item index="3-1">矿山实例输入</el-menu-item>
      <el-menu-item index="3-2">模拟数据</el-menu-item>
      <el-submenu index="3-3">
        <template #title>多级下拉</template>
        <el-menu-item index="3-3-1" class="innerSelection">选项1</el-menu-item>
        <el-menu-item index="3-3-2" class="innerSelection">选项2</el-menu-item>
        <el-menu-item index="3-3-3" class="innerSelection">选项3</el-menu-item>
      </el-submenu>
    </el-submenu> -->
    <el-menu-item index="4">数据展示</el-menu-item>
    </el-menu>

<!-- login -->
    <el-menu :default-active="activeIndex2" class="el-menu-demo login" mode="horizontal" @select="handleSelect" active-text-color="#ffd04b">
    <el-menu-item index="4">{{loginEntry}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    name: "Navigation",
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
      }
    }
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
}
.el-menu-item:focus {
    background-color: #ff1;
    color: #000;
}
.login {
    float: right;
}
</style>