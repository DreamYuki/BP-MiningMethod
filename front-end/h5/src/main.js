import { createApp } from 'vue'
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import ECharts from "vue-echarts";
import { use } from "echarts/core";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
// import qs from 'qs'

// 手动引入 ECharts 各模块来减小打包体积
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent
]);

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .component("v-chart", ECharts)
  .mount("#app");

// 配置axios
axios.defaults.baseURL = 'http://localhost:8080/'





