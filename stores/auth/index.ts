import {defineStore} from "pinia";
import {NDKNip07Signer} from "@nostr-dev-kit/ndk";
import type { NDKUser} from "@nostr-dev-kit/ndk";
import {useNdkStore} from "~/stores/ndk";
import {USER_PUB_KEY} from "~/types/Globals";
import {setUserSettings} from "~/stores/extensions";

export const useAuthStore = defineStore('useAuthStore', {
    state: () => ({
        authenticated: false,
        ndkStore: useNdkStore()
    }),
    getters: {
        isAuthenticated: state => state.authenticated,
    },
    actions: {
        signInWithSigner: async function(): Promise<boolean> {
            if (!this.ndkStore.initialized) await this.ndkStore.initialize()
            const nip07Signer: NDKNip07Signer = new NDKNip07Signer()
            this.ndkStore.ndk.signer = nip07Signer
            let user: NDKUser = await nip07Signer.user()

            if(user !== undefined){
                this.setPubkey(user.pubkey)
                await this.setSettings(user.pubkey)
                this.ndkStore.close()
                this.authenticated = true
                return true
            }

            return false
        },


        setSettings: async function (pubkey : string): Promise<void> {
            if(!this.ndkStore.initialized) await this.ndkStore.initialize()
            let user: NDKUser = this.ndkStore.ndk.getUser({
                pubkey: pubkey,
            })
            if (user !== undefined) {
                setUserSettings( this.ndkStore.defaultExplicitRelayUrls, await user.followSet())
            }
        },

        setPubkey(pubkey: string): void {
            localStorage.setItem(USER_PUB_KEY, pubkey);
        }
    }
})
