/*采矿方法优选表单 */
<template>
<div id="form">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width=auto class="demo-ruleForm" id="methodForm">
  <el-form-item label="矿井年产量(万吨)" prop="outputAnnual">
    <el-input v-model="ruleForm.outputAnnual" placeholder="请输入1 ~ 4位整数值"></el-input>
  </el-form-item>
  <el-form-item label="矿石名称" prop="oreName">
    <el-select v-model="ruleForm.oreName" placeholder="请选择矿石名称">
      <el-option label="铁矿" value="Fe"></el-option>
      <el-option label="锰矿" value="Mn"></el-option>
      <el-option label="铬矿" value="Cr"></el-option>
      <el-option label="钛矿" value="Ti"></el-option>
      <el-option label="钒矿" value="V"></el-option>
      <el-option label="铜矿" value="Cu"></el-option>
      <el-option label="铅矿" value="Pb"></el-option>
      <el-option label="锌矿" value="Zn"></el-option>
      <el-option label="铝土矿" value="Al"></el-option>
      <el-option label="镁矿" value="Mg"></el-option>
      <el-option label="镍矿" value="Ni"></el-option>
      <el-option label="钴矿" value="Co"></el-option>
      <el-option label="钨矿" value="W"></el-option>
      <el-option label="锡矿" value="Sn"></el-option>
      <el-option label="金矿" value="Au"></el-option>
      <el-option label="银矿" value="Ag"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="矿床成因和类型" prop="causesAndTypes">
    <el-select v-model="ruleForm.causesAndTypes" placeholder="请选择矿床成因和类型">
        <el-option label="沉积浅变质矿床" value="1"></el-option>
        <el-option label="岩浆分结矿床" value="2"></el-option>
        <el-option label="可燃有机岩矿床" value="3"></el-option>
        <el-option label="机械沉积矿床" value="4"></el-option>
        <el-option label="化学及生物化学沉积矿床" value="5"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="矿体平均厚度(m)" prop="avgThickness">
    <el-input v-model="ruleForm.avgThickness" placeholder="请输入1 ~ 4位整数值"></el-input>
  </el-form-item>
    <el-form-item label="矿体平均倾角(°)" prop="avgDipAngle">
    <el-input v-model="ruleForm.avgDipAngle" placeholder="请输入0 ~ 180整数值"></el-input>
  </el-form-item>
    <el-form-item label="矿体走向长度(m)" prop="strikeLength">
    <el-input v-model="ruleForm.strikeLength" placeholder="请输入正整数值"></el-input>
  </el-form-item>
    <el-form-item label="矿体埋藏深度(m)" prop="burialDepth">
    <el-input v-model="ruleForm.burialDepth" placeholder="请输入正整数值"></el-input>
  </el-form-item>
    <el-form-item label="品位(%)" prop="grade">
    <el-input v-model="ruleForm.grade" placeholder="请输入0 ~ 100整数值"></el-input>
  </el-form-item>
    <el-form-item label="容重" prop="bulkDensity1 bulkDensity2">
    <el-input class="miniInput" v-model="ruleForm.bulkDensity1" placeholder="矿石容重"></el-input>
    <el-input class="miniInput" v-model="ruleForm.bulkDensity2" placeholder="围岩容重"></el-input>
  </el-form-item>
    <el-form-item label="围岩名称" prop="surroundingRock">
    <el-select class="surroundingRock" v-model="ruleForm.surroundingRock1" placeholder="上盘围岩">
        <el-option label="灰岩" value="1"></el-option>
        <el-option label="灰岩" value="2"></el-option>
        <el-option label="灰岩" value="3"></el-option>
        <el-option label="灰岩" value="4"></el-option>
        <el-option label="灰岩" value="5"></el-option>
    </el-select>
    <el-select class="surroundingRock" v-model="ruleForm.surroundingRock2" placeholder="下盘围岩">
        <el-option label="沉积浅变质矿床" value="surroundingRock-down-1"></el-option>
        <el-option label="岩浆分结矿床" value="surroundingRock-down-2"></el-option>
        <el-option label="可燃有机岩矿床" value="surroundingRock-down-3"></el-option>
        <el-option label="机械沉积矿床" value="surroundingRock-down-4"></el-option>
        <el-option label="化学及生物化学沉积矿床" value="surroundingRock-down-5"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="稳固性" prop="stability">
      <el-select class="surroundingRock" v-model="ruleForm.stability1" placeholder="矿石稳固性">
        <el-option label="极不稳固" value="stability-1"></el-option>
        <el-option label="不稳固" value="stability-2"></el-option>
        <el-option label="中等稳固" value="stability-3"></el-option>
        <el-option label="稳固" value="stability-4"></el-option>
        <el-option label="极稳固" value="stability-5"></el-option>
    </el-select>
      <el-select class="surroundingRock" v-model="ruleForm.stability2" placeholder="上盘围岩">
        <el-option label="极不稳固" value="stability-1"></el-option>
        <el-option label="不稳固" value="stability-2"></el-option>
        <el-option label="中等稳固" value="stability-3"></el-option>
        <el-option label="稳固" value="stability-4"></el-option>
        <el-option label="极稳固" value="stability-5"></el-option>
    </el-select>
      <el-select class="surroundingRock" v-model="ruleForm.stability3" placeholder="下盘围岩">
        <el-option label="极不稳固" value="stability-1"></el-option>
        <el-option label="不稳固" value="stability-2"></el-option>
        <el-option label="中等稳固" value="stability-3"></el-option>
        <el-option label="稳固" value="stability-4"></el-option>
        <el-option label="极稳固" value="stability-5"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="矿石-坚固性系数" prop="firmnessOre">
    <el-input class="miniInput" v-model="ruleForm.firmnessOre1" placeholder="上限"></el-input>
    <el-input class="miniInput" v-model="ruleForm.firmnessOre2" placeholder="下限"></el-input>
  </el-form-item>
  <el-form-item label="上盘围岩-坚固性系数" prop="firmnessUpRock">
    <el-input class="miniInput" v-model="ruleForm.firmnessUpRock1" placeholder="上限"></el-input>
    <el-input class="miniInput" v-model="ruleForm.firmnessUpRock2" placeholder="下限"></el-input>
  </el-form-item>
  <el-form-item label="下盘围岩-坚固性系数" prop="firmnessDownRock">
    <el-input class="miniInput" v-model="ruleForm.firmnessDownRock1" placeholder="上限"></el-input>
    <el-input class="miniInput" v-model="ruleForm.firmnessDownRock2" placeholder="下限"></el-input>
  </el-form-item>
  <el-form-item label="松散系数" prop="loose">
    <el-input class="miniInput" v-model="ruleForm.loose1" placeholder="矿石"></el-input>
    <el-input class="miniInput" v-model="ruleForm.loose2" placeholder="上盘围岩"></el-input>
    <el-input class="miniInput" v-model="ruleForm.loose3" placeholder="下盘围岩"></el-input>
  </el-form-item>
  <el-form-item label="其它附加条件" prop="otherPlus">
    <el-checkbox-group v-model="ruleForm.otherPlus">
      <el-checkbox label="自燃性" name="spontaneous"></el-checkbox>
      <el-checkbox label="粘结性" name="cohesiveness"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="地质破坏及水文条件" prop="geologicalAndHydrological">
    <el-radio-group v-model="ruleForm.geologicalAndHydrological">
      <el-radio label="简单"></el-radio>
      <el-radio label="中等"></el-radio>
      <el-radio label="复杂"></el-radio>
    </el-radio-group>
  </el-form-item>
    <el-form-item label="地表允许崩落" prop="additional">
    <el-switch v-model="ruleForm.additional"></el-switch>
  </el-form-item>
  <el-form-item id="submit-item">
    <el-button id="submit" type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button id="clear" @click="resetForm('ruleForm')">重置</el-button>
    <router-link to="/"><el-button id="return" @click="resetForm('ruleForm')">返回首页</el-button></router-link>
  </el-form-item>
</el-form>
</div>
</template>

<script>
  export default {
    data() {
       const checkNumber = (rule, value, callback) => {
        setTimeout(() => {
          if (!Number.isInteger(Number(value))) {
            callback(new Error('请输入1 ~ 4位整数值'));
          } else if(String(value).length > 4 || String(value).length < 1) {
              console.log(String(value));
              callback(new Error('请输入1 ~ 4位整数值'));
          } else {
            callback();
          }
        }, 500);
      };
      return {
        ruleForm: {
          outputAnnual: '',
          oreName: '',
          causesAndTypes: '',
          avgThickness: '',
          avgDipAngle: '',
          strikeLength: '',
          burialDepth: '',
          grade: '',
          bulkDensity1: '',
          bulkDensity2: '',
          surroundingRock1: '',
          surroundingRock2: '',
          stability1: '',
          stability2: '',
          stability3: '',
          firmnessOre1: '',
          firmnessOre2: '',
          firmnessUpRock1: '',
          firmnessUpRock2: '',
          firmnessDownRock1: '',
          firmnessDownRock2: '',
          otherPlus: [],
          geologicalAndHydrological: '',
          desc: '',
          delivery: false,
        },
        rules: {
          // 矿山年产量（万吨）
          outputAnnual: [
            { required: true, message: '请输入1 ~ 4位整数值', trigger: 'blur' },
            { validator: checkNumber, trigger: 'blur' }
          ],
          // 矿石名称
          oreName: [
            { required: true, message: '请选择矿石名称', trigger: 'change' }
          ],
          // 矿床成因和类型
          causesAndTypes: [
            { required: true, message: '请选择矿床成因和类型', trigger: 'change' }
          ],
          // 矿体平均厚度（m）
          avgThickness: [
            { required: true, message: '请输入1 ~ 4位整数值', trigger: 'blur' },
            { validator: checkNumber, trigger: 'blur' }
          ],
          // 矿体平均倾角(°)
          avgDipAngle: [
            { required: true, message: '请输入1 ~ 180整数值', trigger: 'blur' },
            { validator: checkNumber, trigger: 'blur' }
          ],
          // 矿体走向长度(m)
          strikeLength: [
            { required: true, message: '请输入1 ~ 180整数值', trigger: 'blur' },
            { validator: checkNumber, trigger: 'blur' }
          ],
          // 矿体埋藏深度(m)
          burialDepth: [
            { required: true, message: '请输入1 ~ 180整数值', trigger: 'blur' },
            { validator: checkNumber, trigger: 'blur' }
          ],
          // 品位(%)
          grade: [
            { required: true, message: '请输入1 ~ 180整数值', trigger: 'blur' },
            { validator: checkNumber, trigger: 'blur' }
          ],
          // 容重
          bulkDensity: [
            { required: false, message: '请输入1 ~ 180整数值', trigger: 'blur' },
          ],
        //   // 围岩名称
        //   surroundingRock: [
        //     { required: true, message: '请选择围岩名称', trigger: 'blur' },
        //   ],
        //   // 稳固性
        //   stability: [
        //     { required: true, message: '请选择稳固性', trigger: 'blur' },
        //   ],
          // 其它附加条件
          otherPlus: [
            { type: 'array', required: false, trigger: 'change' }
          ],
          // 地质破坏及水文条件
          geologicalAndHydrological: [
            { required: true, message: '请选择地质破坏及水文条件', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
    #form {
        height: 100%;
        width: 50%;
    }
    #methodForm {
        width: 100%;
        padding: 30px;
        height: 100%;
        background-color: #fff;
        min-height: 1150px
    }
    /* 表单元素 对齐 */
    #methodForm .el-form-item {
        margin: 5;
        padding: 0;
        position: relative;
        left: 0%;
    }
    /* 下拉框 缩短、并排、对齐 */
    #methodForm .el-input,.el-select {
        float: left;
        /* position: absolute; */
        width: 250px;
        left: 0%;
    }
    /* 输入框 缩短、并排、对齐 */
    #methodForm .miniInput,
    #methodForm .surroundingRock,
    #methodForm .surroundingRock input {
        width: 125px;
        margin-right: 10px;
    }
    #methodForm .surroundingRock div {
        width: 125px;
    }
    /* 单选框 对齐 */
    #methodForm .el-switch,
    #methodForm .el-radio-group {
        float: left;
        margin-top: 10px;
    }
    /* 复选框 对齐 */
    #methodForm .el-checkbox {
        float: left;
    }
    /* 提交-重置 居中、突显 */
    #submit-item {
        float: left;
        width: 80%;
        /* left: 15%; */
    }
    #submit {
        width: 30%;
    }
    #return {
        margin-left: 10px;
    }
</style>
