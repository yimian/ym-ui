import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/auth/TheLogin.vue';
import AppLayout from '@/views/layouts/AppLayout.vue';

Vue.use(Router);

/**
* TIPS:
* meta: {
*   hidden: false,    // If `hidden:true` will not appear in the navigation bar or sidebar(default is false)
*   auth: [],         // It will control the page roles (you can set multiple roles)
*   icon: 'home',     // Icon will appear in the navigation bar or sidebar
*   hasMulSub: false, // It has multiple children
* }
*/
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        hidden: true,
      },
    },
    {
      path: '/',
      redirect: { name: 'Index' },
      meta: {
        hidden: true,
      },
    },
    {
      path: '/index',
      component: AppLayout,
      redirect: { name: 'Index' },
      children: [
        {
          path: '/index',
          name: 'Index',
          component: () => import('@/views/common/VHomepage.vue'),
        },
      ],
    },
    {
      path: '/users',
      component: AppLayout,
      redirect: { name: 'Users' },
      children: [
        {
          path: 'index',
          name: 'Users',
          component: () => import('@/views/admin/TheUsers.vue'),
        },
      ],
    },
    {
      path: '/components',
      name: 'Components',
      component: AppLayout,
      redirect: { name: 'Buttons' },
      meta: {
        hasMulSub: true,
      },
      children: [
        {
          path: 'buttons',
          name: 'Buttons',
          component: () => import('@/views/common/Buttons.vue'),
          meta: {
            // auth: [],
          },
        },
      ],
    },
    {
      path: '/403',
      meta: {
        hidden: true,
      },
      // redirect: { name: 'Index' },
      component: Login,
    },
    {
      path: '*',
      meta: {
        hidden: true,
      },
      redirect: { name: 'Index' },
    },
  ],
});
