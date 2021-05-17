import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Map from "@/components/VEchartDemo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
      Banner: () =>
        import(/* webpackChunkName: "banner" */ "@/components/Banner.vue"),
    },
    children: [
      {
        path: "",
        name: "IndexBox",
        components: {
          IndexBox: () =>
            import(
              /* webpackChunkName: "indexbox" */ "@/components/IndexBox.vue"
            ),
        },
      },
      {
        path: "method",
        name: "MethodForm",
        components: {
          IndexBox: () =>
            import(
              /* webpackChunkName: "method" */ "@/components/MethodForm.vue"
            ),
        },
      },
      {
        path: "/introduction",
        name: "introduction",
        components: {
          IndexBox: () =>
            import(
              /* webpackChunkNmae: "introduction" */ "@/views/Introduction.vue"
            ),
        },
      },
      {
        path: "/train",
        name: "train",
        components: {
          IndexBox: () =>
            import(
              /* webpackChunkNmae: "introduction" */ "@/views/Introduction.vue"
            ),
        },
      },
      {
        path: "/map",
        name: "map",
        components: {
          IndexBox: Map,
        },
      },
      {
        path: "/train",
        name: "train",
        components: {
          IndexBox: () =>
            import(
              /* webpackChunkName: "banner" */ "@/components/MethodForm.vue"
            ),
        },
      },
    ],
  },
  {
    path: "/dataview",
    name: "dataview",
    components: {
      default: () =>
        import(/* webpackChunkName: "banner" */ "@/components/VEchartDemo.vue"),
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
