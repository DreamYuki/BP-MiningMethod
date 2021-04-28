<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <img id="csu-logo" src="../assets/white-logo.png">
                <Nav :loginEntry="info" />
            </el-header>
            <el-main>
                <component :is="componentId"></component>
                <!-- <IndexBox/> -->
                <Form/>
            </el-main>
            <el-footer>
                <p>Copyright@2021，中南大学-资源与安全工程学院-采矿工程1703班-黄宇明，指导老师：周健</p>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
// import IndexBox from './IndexBox.vue'
import Form from './Form.vue'
import Nav from './Navigation.vue'
export default {
    name: 'Container',
    components: {
        // IndexBox,
        Form,
        Nav
    },
    props: {
        msg: String
    },
    data () {
        return {
            info: "游客您好，请登录",
        }
    }
}
</script>

<style>
Form {
    background-color: #fff;
}
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
    align-items: center;
    justify-content: center;
}
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
    color: #fff;
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
