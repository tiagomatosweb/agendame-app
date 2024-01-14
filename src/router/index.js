import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';
import {useAuthStore} from '@/store/auth';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/Error404.vue')
        },
        MainRoutes,
        ...AuthRoutes,
    ]
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  await authStore.sanctum()
  next();
})

export default router;

