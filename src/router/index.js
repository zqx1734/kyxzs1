import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/dj010_login.vue'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/',
  //   name: 'login',
  //   component: login
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/test.vue"),
  },
{
    path: "/test1",
    name: "test1",
    component: () => import("../views/test1.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/dj010_login.vue"),
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/dj020_index.vue"),
  },
  
  
  
  {
    path: "/mathindex",
    name: "mathindex",
    component: () => import("../views/dj021_mathindex.vue"),
  },
  {
    path: "/englishindex",
    name: "englishindex",
    component: () => import("../views/dj022_englishindex.vue"),
  },
  {
    path: "/politicsindex",
    name: "politicsindex",
    component: () => import("../views/dj023_politicsindex.vue"),
  },
  {
    path: "/zcylindex",
    name: "zcylindex",
    component: () => import("../views/dj024_zcylindex.vue"),
  },
  {
    path: "/sjjgindex",
    name: "sjjgindex",
    component: () => import("../views/dj025_sjjgindex.vue"),
  },
  {
    path: "/czxtindex",
    name: "czxtindex",
    component: () => import("../views/dj026_czxtindex.vue"),
  },
  {
    path: "/jsjwlindex",
    name: "jsjwlindex",
    component: () => import("../views/dj027_jsjwlindex.vue"),
  },
  {
    path: "/htnlindex",
    name: "htnlindex",
    component: () => import("../views/dj028_htnlindex.vue"),
  },
  {
    path: "/cssindex",
    name: "cssindex",
    component: () => import("../views/dj029_cssindex.vue"),
  },
  {
    path: "/jsindex",
    name: "jsindex",
    component: () => import("../views/dj031_jsindex.vue"),
  },
  {
    path: "/cindex",
    name: "cindex",
    component: () => import("../views/dj032_cindex.vue"),
  },
  {
    path: "/javaindex",
    name: "javaindex",
    component: () => import("../views/dj033_javaindex.vue"),
  },
  {
    path: "/pyindex",
    name: "pyindex",
    component: () => import("../views/dj034_pyindex.vue"),
  },
  {
    path: "/fsjyindex",
    name: "fsjyindex",
    component: () => import("../views/dj035_fsjyindex.vue"),
  },
  {
    path: "/fsxcindex",
    name: "fsxcindex",
    component: () => import("../views/dj036_fsxcindex.vue"),
  },
  {
    path: "/kyzxindev",
    name: "kyzxindev",
    component: () => import("../views/dj037_kyzxindev.vue"),
  },
  
  
  
  
  
  
  
  {
    path: "/mathmenu",
    name: "mathmenu",
    component: () => import("../views/dj041_mathmenu.vue"),
  },
  {
    path: "/englishmenu",
    name: "englishmenu",
    component: () => import("../views/dj042_englishmenu.vue"),
  },
  {
    path: "/politicsmenu",
    name: "politicsmenu",
    component: () => import("../views/dj043_politicsmenu.vue"),
  },
  {
    path: "/zymenu",
    name: "zymenu",
    component: () => import("../views/dj044_zymenu.vue"),
  },
  {
    path: "/fxmenu",
    name: "fxmenu",
    component: () => import("../views/dj045_fxmenu.vue"),
  },
  {
    path: "/yxmenu",
    name: "yxmenu",
    component: () => import("../views/dj046_yxmenu.vue"),
  },
  {
    path: "/mindmenu",
    name: "mindmenu",
    component: () => import("../views/dj047_mindmenu.vue"),
  },
  {
    path: "/notemenu",
    name: "notemenu",
    component: () => import("../views/dj048_notemenu.vue"),
  },
  {
    path: "/ztmenu",
    name: "ztmenu",
    component: () => import("../views/dj049_ztmenu.vue"),
  },
  {
    path: "/wmenu",
    name: "wmenu",
    component: () => import("../views/dj050_wmenu.vue"),
  },
  {
    path: "/grmenu",
    name: "grmenu",
    component: () => import("../views/dj051_grmenu.vue"),
  },
  {
    path: "/szmenu",
    name: "szmenu",
    component: () => import("../views/dj052_szmenu.vue"),
  },
  
  
  
  
  
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
