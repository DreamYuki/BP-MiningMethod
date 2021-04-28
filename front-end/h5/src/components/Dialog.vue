<template>
  <el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>

  <el-dialog title="外层 Dialog" v-model="outerVisible">
    <el-dialog
      width="30%"
      title="内层 Dialog"
      v-model="innerVisible"
      append-to-body>
    </el-dialog>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        outerVisible: false,
        innerVisible: false
      };
    }
  }
</script>