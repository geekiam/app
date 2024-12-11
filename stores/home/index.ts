import {defineStore} from "pinia";
import {NDKEvent, NDKKind} from "@nostr-dev-kit/ndk";
import {useNdkStore} from "~/stores/ndk";
import type {User} from "~/types";

export const useHomeStore = defineStore('homeStore', {
    state: () => ({
        ndkStore: useNdkStore(),
        events: new Set<NDKEvent>
    }),
    getters:{
          notes: state => state.events
    },
    actions: {
        fetchFeed: async function fetchUserFeed(kinds: NDKKind[]): Promise<Set<NDKEvent>> {
            if (!this.ndkStore.initialized) await this.ndkStore.initialize()
            const filter = {
                kinds: kinds,
                limit: 20,

            };
            return await this.ndkStore.ndk.fetchEvents(filter);
        },

        getEvents: async function getEvents(): Promise<void> {
            if (!this.ndkStore.initialized) await this.ndkStore.initialize()

            const sub = this.ndkStore.ndk.subscribe({
                "authors": [
                    "37305b10628dcb7fd6dfc7a44e57100219d8fa985fda3746745fec8d4676ca73",
                    "32e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245",
                    "8ab235fe03e4efa7bf01babbca5210de7eac01aba6e630993d9b684c5eb3d84e",
                    "84dee6e676e5bb67b4ad4e042cf70cbd8681155db535942fcc6a0533858a7240",
                    "3bf0c63fcb93463407af97a5e5ee64fa883d107ef9e558472c4eb9aaaefa459d",
                    "eab0e756d32b80bcd464f3d844b8040303075a13eabc3599a762c9ac7ab91f4f",
                    "4523be58d395b1b196a9b8c82b038b6895cb02b683d0c253a955068dba1facd0",
                    "82341f882b6eabcd2ba7f1ef90aad961cf074af15b9ef44a09f9d2a8fbfbe6a2",
                    "04c915daefee38317fa734444acee390a8269fe5810b2241e5e6dd343dfbecc9"
                ],
                "kinds": [NDKKind.Text],
                "limit": 100,

            })


            sub.on("event", (event: NDKEvent) => {
               if(event && event.created_at && !this.events.has(event)) {
                    console.log("adding event: ",event)
                  this.events.add(event)
               }
            })

        }
    }

})
