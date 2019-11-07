import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const index = resolve => require(['@/view/index.vue'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    }
  ]
})
