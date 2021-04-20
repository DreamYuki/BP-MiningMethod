<template>
    <div class="common-layout">
        <el-container>
    <el-header>
        <img id="csu-logo" src="../assets/white-logo.png">
    </el-header>
    <el-main>
        <IndexBox/>
    </el-main>
    <el-footer>
        <p>@copyright2021，中南大学-资源与安全工程学院-采矿工程1703班-黄宇明，指导老师：周健</p>
    </el-footer>
    
  </el-container>
    </div>
</template>

<script>
import IndexBox from './IndexBox.vue'
export default {
    name: 'Container',
    components: {
        IndexBox
    },
    props: {
        msg: String
    }
}
</script>

<style>
.common-layout {
    width: 80%;
    height: 100%;
    margin: auto;
}
.el-header {
    display: block;
}
.el-header, .el-footer {
    text-align: center;
    line-height: 60px;
  }
.el-footer {
    position: absolute;
    width: 99%;
    bottom: 0;
    color: #fff;
}

.el-footer > p {
    margin: auto;
}
#csu-logo {
    display: inline-block;
    height: 100%;
}
</style>
