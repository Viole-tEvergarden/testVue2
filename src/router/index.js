import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/EchartsMap',
      name: 'EchartsMap',
      component: () => import('@/pages/echartsMap')
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('@/pages/upload')
    },
    {
      path: '/RichText',
      name: 'RichText',
      component: () => import('@/pages/RichText')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home')
    },
    {
      path: '/FilePreview',
      name: 'FilePreview',
      component: () => import('@/pages/FilePreview')
    },
    {
      path: '/cancelAjax',
      name: 'cancelAjax',
      component: () => import('@/pages/cancelAjax')
    },
    {
      path: '/TrendsRankList',
      name: 'TrendsRankList',
      component: () => import('@/pages/echartsPage/TrendsRankList')
    },
    {
      path: '/CustomItem',
      name: 'CustomItem',
      component: () => import('@/pages/echartsPage/CustomItem')
    },
    {
      path: '/RightxAxisBar',
      name: 'RightxAxisBar',
      component: () => import('@/pages/echartsPage/RightxAxisBar')
    },
  ]
})
