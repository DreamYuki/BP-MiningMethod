<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <img id="csu-logo" src="../assets/white-logo.png">
                <Nav :loginEntry="info" />
            </el-header>
            <el-main>
                <router-view name="IndexBox"></router-view>
            </el-main>
            <el-footer>
                <p>Copyright@2021，中南大学-资源与安全工程学院-采矿工程1703班-黄宇明，指导老师：周健</p>
            </el-footer>
        </el-container>
    </div>
    <div v-if="isBanner" @childFn='BannerBtn'>
         <router-view name="Banner"></router-view>
    </div>
    <router-view name="Map"></router-view>
</template>

<script>
import Nav from '../components/Navigation'
// import Banner from "../components/Banner";
export default {
    name: 'Home',
    components: {
        Nav,
    },
    props: {
        msg: String
    },
    data () {
        return {
            info: "游客您好，请登录",
            isBanner: true
        }
    },
    methods: {
        parentFn(childBool) {
            alert(childBool)
            this.isBanner = childBool
        }
    }
}
</script>

<style>
.common-layout {
    width: 1280px;
    height: 100%;
    margin: auto;
}
.el-container{
    position: relative;
    height: 100%;
}
.el-header {
    display: block;
    margin-top: 60px;
}
.el-main {
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: center;
    margin: 30px;
    min-height: 500px;
    /* overflow-y: hidden; */
}
.el-main::-webkit-scrollbar {display:none}
.el-header, .el-footer {
    display: block;
    text-align: center;
    height: 60px;
}
.el-footer {
    display: flex;
    position: relative;
    width: 100%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #909399;
    user-select:none;
}

.el-footer > p {
    display: block;
    margin: auto;
}
#csu-logo {
    float: left;
    margin-right: 40px;
    height: 120%;
}
</style>

