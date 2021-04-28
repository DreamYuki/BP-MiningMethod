<template>
  <div class="main">
    <div class="tittle">
        <h2>神经网络</h2>
        <h1>采矿方法优选系统</h1>
    </div>
    <el-button type="primary" round>开始您的优选</el-button>
    <el-button type="warning" round>智慧地图</el-button>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-button {
    display: inline-block;
    width: 20%;
    height: 60px;
    font-size: 30px;
    margin: 30px;
}
.tittle {
    margin-bottom: 30px;
}
.el-main {
    position: relative;
}   
.main {
    margin: auto;
    color: #fff;
}
h1 {
    font-size: 100px;
    margin: 0;
}
h2 {
    margin: 0;
    font-size: 60px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
