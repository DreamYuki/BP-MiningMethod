<template>
  <el-button type="primary" round>{{ msg }}</el-button>
</template>

<script>
export default {
    name: "ButtonRound",
    props: ['msg']
}
</script>

<style scoped>
    #btn-row {
        display: block;
        margin: 60px;
    }
    .el-button {
        display: inline-block;
        width: 20%;
        height: 60px;
        font-size: 30px;
        margin: 30px;
    }
</style>