import {useAuthStore} from "~/stores/auth";


export default defineNuxtRouteMiddleware(() => {
    const store = useAuthStore();
      if (!store.isAuthenticated) {
        return navigateTo( './auth' , {
            replace: true
        })
    }
})
