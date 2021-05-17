/*
登录框-嵌套注册框

--注册--
昵称（不可重复）
绑定手机号 - 短信验证码
密码
验证码

--登录--
手机号/昵称
密码
验证码
 */

<template>
  <el-dropdown>
  <span class="el-dropdown-link">
    您好，{{$route.id.name}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item>个人中心</el-dropdown-item>
      <el-dropdown-item>退出</el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>
</template>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>