<template>
<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true" id="loginButton"><i class="el-icon-user" style="font-weight: 700;">&ensp;登录/注册</i></el-button>

<el-dialog title="" v-model="dialogFormVisible">
  <i class="el-icon-s-promotion">中南大学-资源与安全工程学院</i>
  <!-- 登录表单 -->
  <div v-if="isLogin">
  <el-form :model="loginForm" id="loginForm" :rules="rules" ref="loginForm">
    <el-form-item class="loginInput" label="账&ensp;号:" :label-width="formLabelWidth" prop="account">
      <el-input v-model="loginForm.account" autocomplete="off" placeholder="学号&ensp;/&ensp;手机号&ensp;/&ensp;邮箱"></el-input>
    </el-form-item>
    <el-form-item class="loginInput" label="密&ensp;码:" :label-width="formLabelWidth" prop="password">
      <el-input v-model="loginForm.password" autocomplete="off" placeholder="8~16 位包含数字和大小写字母" show-password></el-input>
    </el-form-item>
  </el-form>
  </div>
  <!-- 注册表单 -->
  <div v-else-if="!isLogin">
      <el-form :model="loginForm" id="loginForm" status-icon :rules="rules" ref="loginForm">
    <el-form-item class="loginInput" label="学&ensp;号:" :label-width="formLabelWidth" prop="accountCheck">
      <el-input v-model="loginForm.accountCheck" autocomplete="off" placeholder="请输入您的学号"></el-input>
    </el-form-item>
    <el-form-item class="loginInput" label="姓&ensp;名:" :label-width="formLabelWidth" prop="name">
      <el-input v-model="loginForm.name" autocomplete="off" placeholder="请输入您的姓名"></el-input>
    </el-form-item>
    <el-form-item class="loginInput" label="密&ensp;码:" :label-width="formLabelWidth" prop="password">
      <el-input v-model="loginForm.password" autocomplete="off" placeholder="8~16 位数字和大小写字母" show-password></el-input>
    </el-form-item>
    <el-form-item class="loginInput" label="确&ensp;认&ensp;密&ensp;码:" :label-width="formLabelWidth" prop="passwordCheck">
      <el-input v-model="loginForm.passwordCheck" autocomplete="off" placeholder="8~16 位数字和大小写字母" show-password></el-input>
    </el-form-item>
    <el-form-item class="loginInput" label="邮&ensp;箱:" :label-width="formLabelWidth" prop="email">
      <el-input v-model="loginForm.email" autocomplete="off" placeholder="用于找回密码"></el-input>
    </el-form-item>
  </el-form>
  </div>
  <el-button type="text" @click="change2Register()" id="toRegister">{{loginOrRegister}}</el-button>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取&ensp;消</el-button>
      <el-button type="primary" @click="submitForm('loginForm')" :class="[isChange]">{{loginOrRegisterSubmit}}</el-button>
    </span>
  </template>
</el-dialog>
</template>

<script>

  export default {
    data() {
      /*验证学号，我校学生的学号为9~10位数 */
      const checkAccount = (rule, value, callback) => {
          setTimeout(() => {
              if (!Number.isInteger(Number(value))) {
                  callback(new Error('请输入9 ~ 10位整数值'));
              }
              if (value.length === 9 || value.length === 10) {
                  callback()
              } else {
                  callback(new Error('请输入正确学号'))
              }
          }, 200);
      };
      /**
       * 验证密码格式：
       * 1、包含任意数字、小写字母、大写字母，长度在8~16
       * 2、特殊字符非法
       * 变量保存上一次密码
       */
      let initPwd = "";
      const checkPwd = (rule, value, callback) => {
          setTimeout(() => {
          if (value.length < 8 || value.length > 16) {
            callback(new Error('密码长度应在 8 ~ 16 位'));
          }
          if(value.match(/[0-9]/g) === null 
          || value.match(/[a-z]/g) === null 
          || value.match(/[A-Z]/g) === null
          || value.match(/[^\w]/g) !== null) {
            callback(new Error('密码由数字、小写、大写字母组成'));
          } else {
            callback();
          }
          initPwd = value;
        }, 200);
      };
      /*前后密码保持一致 */
      const checkPwdSame = (rule, value, callback) => {
          setTimeout(() => {
          if (initPwd === value) {
            callback();
          } else {
            callback(new Error("前后两次密码不一致"));
          }
        }, 200);
      };
      /*姓名格式，依据国家标准GB18030-2005《信息技术中文编码字符集》校验 */
      const checkName = (rule, value, callback) => {
          setTimeout(() => {
              if (value.match(/^[\u4e00-\u9fa5]{1,6}(·[\u4e00-\u9fa5]{1,6}){0,2}$/) !== null 
              && value.length <= 20) {
              callback()
          } else {
              callback(new Error("请输入正确的中文姓名"));
          }
          }, 200);
      };
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

        rules: {
            account: [
            { required: true, message: '请输入学号', trigger: 'blur' },
          ],
            accountCheck: [
            { required: true, message: '请输入正确学号', trigger: 'blur' },
            { validator: checkAccount, trigger: 'blur' }
          ],
            password: [
            { required: true, message: '请输入8~16 位包含数字和大小写字母', trigger: 'blur'},
            { validator: checkPwd, trigger: 'blur' }
          ],
            password2: [
            { required: true, message: '请输入8~16 位包含数字和大小写字母', trigger: 'blur'},
            { validator: checkPwd, trigger: 'blur' }
          ],
            passwordCheck: [
            { required: true, message: '前后密码不一致', trigger: 'blur'},
            { validator: checkPwdSame, trigger: 'blur' }
          ],
            name: [
            { required: true, message: '请输入正确姓名格式', trigger: 'blur' },
            { validator: checkName, trigger: 'blur' }
          ],
            email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ],
        }
      };
    },
    methods: {
        change2Register() {
            if (this.loginOrRegister === "注册新账户") {
                this.isChange = "change2Green"
                this.loginOrRegister = "已有账号，登录"
                this.loginOrRegisterSubmit = "注 册"
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
        width: 80%!important;
    }
    #loginForm .el-input__suffix {
        right: 22%;
        min-width:100%!important;
    }
    #loginForm .el-form-item__error {
        top: 75%!important;
    }
    #loginForm .el-input__icon {
        float: right;
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
    #loginForm .loginInput {
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
