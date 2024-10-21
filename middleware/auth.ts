import { useProfileStore} from "~/stores/useProfileStore";

const store = useProfileStore();
export default defineNuxtRouteMiddleware((to, from) => {
    if(!store.isAuthenticated){
       return useNuxtApp().$router.push('/auth')
    }
})
