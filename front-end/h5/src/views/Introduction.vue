/*走马灯展示介绍项目 */
<template>
  <div class="block">
    <el-carousel>
      <el-carousel-item v-for="item in [4,5,6,7]" :key="item">
        <h1 class="small">项目介绍内容{{ item }}</h1>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
   .block {
       height: 100%;
       width: 100%;
   }
   .el-carousel,
   .el-carousel__container {
       height: 100%;
       min-height: 500px;
   }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>