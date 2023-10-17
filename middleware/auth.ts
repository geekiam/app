import {userAuthStore} from "~/stores/userAuthStore";

const store = userAuthStore();
export default defineNuxtRouteMiddleware((to, from) => {
    if(!store.isAuthenticated){
       return useNuxtApp().$router.push('/login')
    }
})
