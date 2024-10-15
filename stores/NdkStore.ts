import {defineStore} from 'pinia'
import NDK from "@nostr-dev-kit/ndk";

export const useNdkStore = defineStore('useNdkStore', {
    id: 'ndk-store',
    state: () => ({
        initialized: false,
        defaultExcplicitRelayUrls: [
            'wss://relay.damus.io',
            'wss://relay.primal.net',
            'wss://relay.sovereign-stack.org'
        ],
        defaultOutboxRelayUrls: [
            "wss://purplepag.es"
        ],
        ndk: null
    }),
    actions: {
        async initialize() {
            if (this.ndk === null) {
                let options = {

                }
                this.ndk = new NDK(options)
                this.initialized = true

            }
        }
    },
})