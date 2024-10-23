import {defineStore} from "pinia";
import type {NDKUser} from "@nostr-dev-kit/ndk";
import {useNdkStore} from "~/stores/NdkStore";
import {NDKNip07Signer} from "@nostr-dev-kit/ndk";

export const USER_STORAGE_KEY = "geekiam-key";
export const useAuthStore = defineStore('authStore', {
    id: 'auth-store',
    state: () => ({
        user: null as NDKUser | null,
        ndkStore: useNdkStore()
    }),
    getters: {
        isAuthenticated: (state) => state.user !== null,
    },
    actions: {
       async signIn() {
             const nip07Signer = new NDKNip07Signer()
           if(!this.ndkStore.initialized) await this.ndkStore.initialize()
           this.ndkStore.ndk.signer = nip07Signer
           let user = await nip07Signer.user()
            console.log(user)
          user = await this.ndkStore.ndk.getUser({
              npub: user.npub,
          });
           if (user !== undefined) {
               if (user.profile === undefined) {
                   await user.fetchProfile()
               }
               this.setUser(user)
           }
       },
        setUser(user: NDKUser) {
            this.user = user
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
        },
    }
})
