import {defineStore} from "pinia";
import {NDKArticle, NDKEvent, NDKKind} from "@nostr-dev-kit/ndk";
import type { NDKFilter, NDKUserProfile } from "@nostr-dev-kit/ndk";
import {useNdkStore} from "~/stores/ndk";
import type {Article} from "~/types";
import {useProfileStore} from "~/stores/profile";

import {getUserSettings} from "~/stores/extensions";
import {mapArticle} from "~/stores/articles/utilities";

export const useArticlesStore = defineStore('articleStore', {
    state: () => ({
        ndkStore: useNdkStore(),
        profileStore: useProfileStore(),
        articleSet: new Set<Article>,
        selectedArticle: null as Article | null,

    }),
    getters: {
        articles: state => state.articleSet,
        article: state => state.selectedArticle,
    },
    actions: {
        fetchFeed: async function fetchUserFeed(kinds: NDKKind[]): Promise<Set<NDKEvent>> {
            if (!this.ndkStore.initialized) await this.ndkStore.initialize()
            const filter: NDKFilter = {
                kinds: kinds,
                limit: 50,

            };
            return await this.ndkStore.ndk.fetchEvents(filter);
        },
        select: function select(id: string): void {

            this.selectedArticle = Array.from(this.articleSet).find(x => x.id === id) || null
        },
        getArticles: async function getArticles(): Promise<void> {
            if (!this.ndkStore.initialized) await this.ndkStore.initialize()

            let settings = getUserSettings()
            let followSet = settings?.following ? Array.from(settings.following) : [];

            const subscriptionConfig: NDKFilter<NDKKind> = {
                kinds: [NDKKind.Article],
                authors: followSet,
                limit: 50
            };

            const subscriptionOptions = {
                closeOnEose: false,
                groupable: false,
                includeSelf: true,
            };

            const subscription = this.ndkStore.ndk.subscribe(subscriptionConfig, subscriptionOptions);

            subscription.on("event", async event => {
                if (!event || !event.created_at) return;

                let isDuplicate = Array.from(this.articleSet).some(existingArticle => existingArticle.id === event.id);
                if (isDuplicate || event.publishStatus !== "success") return;
                let profile = await event.author.fetchProfile();
                let article = mapArticle(NDKArticle.from(event), profile as NDKUserProfile);
                this.articleSet.add(article);
            });
        }
    }
})

