import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import Home from "@/views/home/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Home" },
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
        meta: {
          title: "主页"
        }
      },
      {
        path: "class",
        name: "Class",
        component: () => import("@/views/class/index.vue"),
        meta: {
          title: "分类"
        }
      },
      {
        path: "fruit",
        name: "Fruit",
        component: () => import("@/views/fruit/index.vue"),
        meta: {
          title: "试吃尝鲜",
          noCache: true
        }
      },
      {
        path: "rank",
        name: "Rank",
        component: () => import("@/views/rank/index.vue"),
        meta: {
          title: "热卖排行"
        }
      },
      {
        path: "user",
        name: "User",
        component: () => import("@/views/user/index.vue"),
        meta: {
          title: "关于",
          noCache: true
        }
      }
    ]
  }
];

export default routes;
