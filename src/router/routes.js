/* 
所有路由配置的数组
*/
import Home from '@/pages/Home'
import Search from '@/pages/Search'

import store from '@/store'
import router from '@/router'



export default [
  {
    path: '/',
    component: Home,
    meta: {
      isShow: true
    },
  },
  {
    name: 'search',  // 是当前路由的标识名称
    // path路径要全部小写
    path: '/search/:keyword?',       //在占位符后面加个‘？’，这样params参数可传可不传
    component: Search,
    // 将params参数和query参数映射成属性传入路由组件
    props: route => ({keyword3: route.params.keyword, keyword4: route.query.keyword2}),
    meta: {
      isShow: true
    },
  },
  
]