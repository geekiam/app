import {useAuthStore} from "~/stores/useAuthStore";

const store = useAuthStore();
export default defineNuxtRouteMiddleware((to, from) => {
    if(!store.isAuthenticated){
       return useNuxtApp().$router.push('/login')
    }
})
