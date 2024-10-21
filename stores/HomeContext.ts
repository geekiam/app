import {defineStore} from "pinia";
import type {NDK, NDKEvent, NDKUser} from "@nostr-dev-kit/ndk";
import {Kind} from "~/types/Kind";
import {NDKKind} from "@nostr-dev-kit/ndk";

export const useHomeContext = defineStore('homeContext', {
   id: 'home-context',

    actions: {
        async fetchUserFeed( ndk:NDK): Promise<NDKEvent[]> {
           console.log('cunt')
            const filter = {
                kinds: [NDKKind.Text],
                limit: 65
            };
            return await ndk.fetchEvents(filter);
        },
    }

})