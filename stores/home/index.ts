import {defineStore} from "pinia";
import NDK, {NDKEvent, NDKKind} from "@nostr-dev-kit/ndk";


export const useHomeStore = defineStore('homeStore', {
    actions: {
       fetchFeed:  async  function fetchUserFeed( ndk:NDK): Promise<Set<NDKEvent>> {
            const filter = {
                kinds: [NDKKind.Text],
                limit: 20
            };
            return await ndk.fetchEvents(filter) ;
        },
    }

})