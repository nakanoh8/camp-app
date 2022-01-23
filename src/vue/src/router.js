import Vue from 'vue'
import Router from 'vue-router'
import UserDetail from './views/UserDetail.vue'
import HelloWorld from './views/HelloWorld.vue'
//
// 他のコンポーネントは省略
//

Vue.use(Router)

export default new Router({
  // デフォルトの挙動では URL に `#` が含まれる.
  // URL から hash を取り除くには `mode:history` を指定する
  mode: 'history',                  
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    //
    // 省略
    //
    {
      path: '/users',
      name: 'user-detail',
      component: UserDetail
    }
  ]
})