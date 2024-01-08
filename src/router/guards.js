import { useMeStore } from '@/store/me';

export const auth = (to, from, next) => {
  const meStore = useMeStore();

  if (!meStore.isLoggedIn) {
    next({ name: 'login' })
  } else {
    next();
  }
}

export const redirectIfAuthenticated = (to, from, next) => {
  const meStore = useMeStore()

  if (meStore.isLoggedIn) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
}
