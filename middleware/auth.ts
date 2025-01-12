import {useAuthStore} from "~/stores/auth";


export default defineNuxtRouteMiddleware(() => {
    const store = useAuthStore();
    let auth =  store.isAuthenticated;
      if (!auth) {
        return navigateTo( './auth' , {
            replace: true
        })
    }
})
