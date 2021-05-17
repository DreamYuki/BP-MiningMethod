<template>
<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true" id="loginButton"><i class="el-icon-user" style="font-weight: 700;">&ensp;登录</i></el-button>

<el-dialog title="" v-model="dialogFormVisible">
  <!-- 登录表单 -->
  <i class="el-icon-s-promotion">中南大学-资源与安全工程学院</i>
  <el-form :model="form" id="loginForm">
    <el-form-item class="loginInput" label="账&ensp;号:" :label-width="formLabelWidth">
      <el-input v-model="form.account" autocomplete="off" placeholder="学号 / 手机号 / 邮箱"></el-input>
    </el-form-item>
    <el-form-item class="loginInput" label="密&ensp;码:" :label-width="formLabelWidth">
      <el-input v-model="form.password" autocomplete="off" placeholder="8~16 位数字和大小写字母"></el-input>
    </el-form-item>
  </el-form>
  <el-button type="text" @click="change2Register()" id="toRegister">注册新账户</el-button>
  
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">登 录</el-button>
    </span>
  </template>
</el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    }
  };
</script>

<style>
    #loginButton {
        text-decoration: none;
        color: #fff;
        font-size: 16px;
        line-height: 100%;
        color: #909399;
    }
    #loginButton:hover {
        color: #fff;
    }
    .el-dialog {
        min-width: 450px!important;
        max-width: 600px!important;
    }
    #loginForm {
        display: block;
        margin: 0 auto;
        min-width: 450px;
        max-width: 500px;
        height: 100%;
        min-height: 100px;
        /* background-color: pink; */
    }
    #toRegister {
        position: relative;
        right: 20%;
        width: min-content;
        margin-top: 10px!important;
        padding: 0;
    }
    #toRegister:hover {
        text-decoration-line: underline;
    }
    .loginInput {
        display: block;
        float: left;
        min-width: 80%;
    }
    .el-icon-s-promotion {
        font-size: 200%;
        margin-bottom: 20px;
    }
</style>
