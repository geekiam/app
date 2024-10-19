import { useProfileStore} from "~/stores/useProfileStore";

const store = useProfileStore();
export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Middleware Called')
    if(!store.isAuthenticated){
       return useNuxtApp().$router.push('/auth')
    }
})
