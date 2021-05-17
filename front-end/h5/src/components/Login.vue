<template>
<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true" id="loginButton"><i class="el-icon-user" style="font-weight: 700;">&ensp;登录/注册</i></el-button>

<el-dialog title="" v-model="dialogFormVisible">
  <i class="el-icon-s-promotion">中南大学-资源与安全工程学院</i>
  <!-- 登录表单 -->
  <div v-if="isLogin">
      <el-form :model="loginForm" id="loginForm" status-icon :rules="rules" ref="loginForm">
    <el-form-item class="loginInput" label="账&ensp;号:" :label-width="formLabelWidth">
      <el-input v-model="loginForm.account" autocomplete="off" placeholder="学号 / 手机号 / 邮箱"></el-input>
    </el-form-item>
    <el-form-item class="loginInput" label="密&ensp;码:" :label-width="formLabelWidth">
      <el-input v-model="loginForm.password" autocomplete="off" placeholder="8~16 位数字和大小写字母" show-password></el-input>
    </el-form-item>
  </el-form>
  </div>
  <!-- 注册表单 -->
  <div v-else-if="!isLogin">
      <el-form :model="registerForm" id="loginForm" status-icon :rules="rules" ref="registerForm">
    <el-form-item class="loginInput" label="学&ensp;号:" :label-width="formLabelWidth">
      <el-input v-model="registerForm.account" autocomplete="off" placeholder="请输入您的学号"></el-input>
    </el-form-item>
    <el-form-item class="loginInput" label="姓&ensp;名:" :label-width="formLabelWidth">
      <el-input v-model="registerForm.name" autocomplete="off" placeholder="请输入您的姓名"></el-input>
    </el-form-item>
    <el-form-item class="loginInput" label="密&ensp;码:" :label-width="formLabelWidth">
      <el-input v-model="registerForm.password1" autocomplete="off" placeholder="8~16 位数字和大小写字母" show-password></el-input>
    </el-form-item>
    <el-form-item class="loginInput" label="确&ensp;认&ensp;密&ensp;码:" :label-width="formLabelWidth">
      <el-input v-model="registerForm.password2" autocomplete="off" placeholder="8~16 位数字和大小写字母" show-password></el-input>
    </el-form-item>
    <el-form-item class="loginInput" label="邮&ensp;箱:" :label-width="formLabelWidth" prop="email" :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]">
      <el-input v-model="registerForm.email" autocomplete="off" placeholder="用于找回密码"></el-input>
    </el-form-item>
  </el-form>
  </div>
  <el-button type="text" @click="change2Register()" id="toRegister">{{loginOrRegister}}</el-button>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitForm('registerForm')" :class="[isChange]">{{loginOrRegisterSubmit}}</el-button>
    </span>
  </template>
</el-dialog>
</template>

<script>

  export default {
    data() {
      return {
        dialogFormVisible: false,
        loginForm: {
            account: '',
            password: ''
        },
        registerForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        loginOrRegister: "注册新账户",
        loginOrRegisterSubmit: "登 录",
        isChange: "false",
        isLogin: "true",
      };
    },
    methods: {
        change2Register() {
            if (this.loginOrRegister === "注册新账户") {
                this.loginOrRegister = "已有账号，登录"
                this.loginOrRegisterSubmit = "注 册"
                this.isChange = "change2Green"
            } else {
                this.loginOrRegister = "注册新账户"
                this.loginOrRegisterSubmit = "登 录"
                this.isChange = "false"
            }
            this.isLogin = !this.isLogin;
        },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
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
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        min-width: 450px;
        max-width: 500px;
        height: 100%;
        min-height: 100px;
        /* background-color: pink; */
    }
    #loginForm input {
        float: left;
        width: 80%
    }
    #loginForm .el-input__suffix {
        right: 22%;
    }
    #toRegister {
        float: right;
        position: relative;
        right: 20%;
        bottom: 30px;
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
        height: 40px;
    }
    .el-icon-s-promotion {
        font-size: 200%;
        margin-bottom: 20px;
    }
    .el-dialog__footer {
        position: relative;
        height: 80px;
    }
    .dialog-footer {
        position: absolute;
        left: 37%;
    }
    .change2Green {
        background-color: #42b983;
        border-color: #42b983;
    }
    .change2Green:hover {
        background-color: #55c492;
        border-color: #55c492;
    }
</style>
