import {defineStore} from "pinia";
import NDK, {NDKEvent, NDKKind} from "@nostr-dev-kit/ndk";
import {useNdkStore} from "~/stores/ndk";

export const useHomeStore = defineStore('homeStore', {
    state: () => ({
        ndkStore: useNdkStore()
    }),
    actions: {
       fetchFeed:  async  function fetchUserFeed(): Promise<Set<NDKEvent>> {
           if (!this.ndkStore.initialized) await this.ndkStore.initialize()
            const filter = {
                kinds: [NDKKind.Article],
                limit: 20
            };
            return await this.ndkStore.ndk.fetchEvents(filter) ;
        },
    }

})
