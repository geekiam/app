import {defineStore} from "pinia";
import NDK, {NDKEvent, NDKNip07Signer, NDKUser} from "@nostr-dev-kit/ndk";
import router from "#app/plugins/router";
// Create a new NDK instance with explicit relays


interface User {
    id: string;
}
const geekiamKey = "geekiam-key";

export const useAuthStore = defineStore('useAuthStore', {
    id: 'user-store',
    state: () => ({
       npub:'',
        pubKey: '',
        name: '',
        image: '',
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
                this.name = user.profile.name
                this.image = user.profile.image
            }
        },
      async  signIn(user,ndk) {

          this.pubKey = user.pubKey
          await this.profile(user,ndk)
          this.signedIn = true
          this.signedOut = false
        },
        setUser(user: NDKUser) {
            this.user = {id: user.npub}
            localStorage.setItem(geekiamKey, JSON.stringify(this.user));
        },
        removeUser(){
            this.user = null;
            localStorage.removeItem(geekiamKey)
        },
       async signOut(){
          this.removeUser();

        }
    }



})