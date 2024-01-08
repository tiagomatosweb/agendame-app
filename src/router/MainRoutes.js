import { useMeStore } from '@/store/me';

export default {
  path: '/',
  component: () => import('@/layouts/full/FullLayout.vue'),
  beforeEnter: (to, from, next) => {
    const meStore = useMeStore();

    if (!meStore.isLoggedIn) {
      next({ name: 'login' })
    } else {
      next();
    }
  },
  children: [
    {
      name: 'dashboard',
      path: '/',
      component: () => import('@/views/dashboard/index.vue')
    },
  ]
};
