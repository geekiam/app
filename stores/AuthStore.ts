import {defineStore} from "pinia";
import type {Profile} from "~/types/Profile";


export const useAuthStore = defineStore('authStore', {
    id: 'settings-store',
    state: () => ({
        profile: null as Profile | null,
        signedIn: false,
        signedOut: true
    }),
    getters: {
        isAuthenticated: (state) => state.signedIn === true,
    },
    actions: {
        async profile(user,ndk){
                user = ndk.getUser({
                npub: user.npub,
            })
            if(user.profile === undefined){
                await user.fetchProfile()
                this.profile = user.profile
                this.signedIn = true
            }
        },
      async signIn(user,ndk) {

          this.pubKey = user.pubKey
          await this.profile(user,ndk)
          this.signedIn = true
          this.signedOut = false
        },
       async signOut(){
          this.removeUser();

        }
    }



})