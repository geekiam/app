import {defineStore} from "pinia";
import NDK, {NDKEvent, NDKNip07Signer, NDKUser} from "@nostr-dev-kit/ndk";
// Create a new NDK instance with explicit relays
const ndk = new NDK({
    explicitRelayUrls: ["wss://relay.nostr.band/", "wss://eden.nostr.land/"],
});

interface User {
    id: string;
}

export const userAuthStore = defineStore('userAuthStore', {
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
                    this.setUser(ndkUser)
                    localStorage.setItem('geekiam-user', JSON.stringify(this.user))
                }
            });
        },
        setUser(user: NDKUser) {
            this.user = {id: user.npub}
        }
    }

})