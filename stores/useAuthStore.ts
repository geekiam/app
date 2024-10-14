import {defineStore} from "pinia";
import NDK, {NDKEvent, NDKNip07Signer, NDKUser} from "@nostr-dev-kit/ndk";
import router from "#app/plugins/router";
// Create a new NDK instance with explicit relays
const ndk = new NDK({
    explicitRelayUrls: ["wss://relay.damus.io"],
});

interface User {
    id: string;
}
const geekiamKey = "geekiam-key";

export const useAuthStore = defineStore('useAuthStore', {
    id: 'user-store',
    state: () => ({
        user: null as User | null
    }),
    getters: {
        isAuthenticated: (state) => state.user !== null,
    },


    actions: {

        signIn() {
            const nip07signer = new NDKNip07Signer();
            const ndk = new NDK({signer: nip07signer});
            nip07signer.user().then(async (ndkUser) => {

                if (!!ndkUser.npub) {
                    this.setUser(ndkUser);
                    return useNuxtApp().$router.push('/')
                }
            });
        },
        setUser(user: NDKUser) {
            this.user = {id: user.npub}
            localStorage.setItem(geekiamKey, JSON.stringify(this.user));
        },
        removeUser(){
            this.user = null;
            localStorage.removeItem(geekiamKey)
        },
        signOut(){

          this.removeUser();


        }
    }



})