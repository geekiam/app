import {defineStore} from "pinia";
import NDK, {NDKEvent, NDKKind} from "@nostr-dev-kit/ndk";


export const useHomeContext = defineStore('homeContext', {
   id: 'home-context',

    actions: {
        async fetchUserFeed( ndk:NDK): Promise<NDKEvent[]> {
            const filter = {
                kinds: [NDKKind.Text],
                limit: 20
            };
            return await ndk.fetchEvents(filter);
        },
    }

})