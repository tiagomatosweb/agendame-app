import { auth } from '@/router/guards';

export default {
  path: '/',
  component: () => import('@/layouts/full/FullLayout.vue'),
  beforeEnter: auth,
  children: [
    {
      name: 'dashboard',
      path: '/',
      component: () => import('@/views/dashboard/index.vue')
    },
    {
      name: 'teams',
      path: '/times',
      component: () => import('@/views/teams/index.vue')
    },
    {
      name: 'plans',
      path: '/planos',
      component: () => import('@/views/plans/index.vue')
    },
  ]
};
