import {defineStore} from "pinia";
import {NDKNip07Signer} from "@nostr-dev-kit/ndk";
import type { NDKUser} from "@nostr-dev-kit/ndk";
import {useNdkStore} from "~/stores/ndk";
import {USER_PUB_KEY} from "~/types/Globals";
import {setUserSettings, getPubkey} from "~/stores/extensions";
import {getPubKey} from "~/stores/auth/authentication";

export const useAuthStore = defineStore('useAuthStore', {
    state: () => ({
        ndkStore: useNdkStore(),
        pubkey: getPubkey() ,
    }),
    getters: {
        isAuthenticated: state => state.pubkey !== null,
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
                return true
            }
            return false
        },
        signInWithKey: async function(key: string): Promise<boolean> {
            if(!this.ndkStore.initialized) await this.ndkStore.initialize()
            let pubkey = await this.derivePubKey(key)
            if (pubkey) {
                this.setPubkey(pubkey);
                await this.setSettings(pubkey);
                return true;
            }
            return false;
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
            this.pubkey = pubkey;
            localStorage.setItem(USER_PUB_KEY, pubkey);
        },
        async derivePubKey(privateKey: string): Promise<string | undefined> {
            if(!this.ndkStore.initialized) await this.ndkStore.initialize()
            try {
                const key = await getPubKey(privateKey);
                const user =  this.ndkStore.ndk.getUser({ pubkey: key });
                return user.pubkey;
            } catch (e) {
                console.error("Error deriving public key:", e);
                return undefined;
            }
        }
    }
})
