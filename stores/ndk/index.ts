import {defineStore} from 'pinia'
import NDK from "@nostr-dev-kit/ndk";

const DEFAULT_EXPLICIT_RELAY_URLS = [
    'wss://relay.damus.io',
    'wss://relay.primal.net',
    'wss://relay.geekiam.services'
];

const DEFAULT_OUTBOX_RELAY_URLS = [
    "wss://purplepag.es",
    "wss://relay.primal.net"
];

function createNdkInstance(explicitRelayUrls: string[], outboxRelayUrls: string[]) {

    return new NDK({
       explicitRelayUrls:  explicitRelayUrls,
        outboxRelayUrls: outboxRelayUrls,
        clientName: "geekiam",
    });
}
export const useNdkStore = defineStore('ndkStore', {
    state: () => ({
        initialized: false,
        defaultExplicitRelayUrls: DEFAULT_EXPLICIT_RELAY_URLS,
        explicitRelayUrls: DEFAULT_EXPLICIT_RELAY_URLS,
        defaultOutboxRelayUrls: DEFAULT_OUTBOX_RELAY_URLS,
        ndkInstance: null as NDK | null,
    }),
    getters: {
        ndk: (state) => state.ndkInstance as NDK
    },
    actions: {
        async initialize(): Promise<void> {
            if (this.ndkInstance === null) {
                this.ndkInstance = createNdkInstance(this.explicitRelayUrls, this.defaultOutboxRelayUrls)
                await this.ndkInstance.connect()
                this.initialized = true
            }
        },
        async close(): Promise<void> {
             if (this.ndkInstance !== null) {
                this.ndkInstance = null
                this.initialized = false
            }
        }
    },
})
