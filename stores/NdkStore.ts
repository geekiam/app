import {defineStore} from 'pinia'
import NDK from "@nostr-dev-kit/ndk";

export const useNdkStore = defineStore('useNdkStore', {
    id: 'ndk-store',
    state: () => ({
        initialized: false,
        defaultExplicitRelayUrls: [
            'wss://relay.damus.io',
            'wss://relay.primal.net',
            'wss://relay.sovereign-stack.org'
        ],
        explicitRelayUrls:[
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
                    explicitRelayUrls: this.explicitRelayUrls,
                    outboxRelayUrls: this.defaultOutboxRelayUrls
                }
                this.ndk = new NDK(options)
                this.initialized = true
            }
        }
    },
})