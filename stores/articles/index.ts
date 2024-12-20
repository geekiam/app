import {defineStore} from "pinia";
import {NDKEvent, NDKKind} from "@nostr-dev-kit/ndk";
import {format} from "date-fns";
import {useNdkStore} from "~/stores/ndk";
import type {Article} from "~/types";

interface NDKEventWithMetadata extends NDKEvent {
    metadata?: {
        title?: string;
        image?: string;
    };
}

function mapArticle(event: NDKEventWithMetadata): Article {
    const tags = event.tags as [string, ...any[]][];
    const summary = getSummaryFromTags(tags);

    /* if(summary) {
         const wordCount = summary.split(/\s+/).filter(word => word).length;
         if(wordCount > 50) {
             tags.push(["summary", summary.substring(0, 100) + "..."])
         }

     }*/


    return <Article>{
        id: event.id,
        pubkey: event.pubkey,
        title: getTitleFromTags(tags) || "",
        summary: getSummaryFromTags(tags) || "",
        content: event.content || "",
        date: event.created_at ? new Date(event.created_at * 1000).toISOString() : "",
        image: getImageFromTags(tags) || "",
        tags: extractTags(event.tags),
        published: event.created_at ? format(new Date(event.created_at * 1000), 'dd MMM yyyy') : new Date(),
    }
}

function extractTags(tags: string[][]): { name: string; value: string }[] {
    if (!Array.isArray(tags)) return [];
    return tags
        .filter((tag) => Array.isArray(tag) && tag.length >= 2)
        .map((tag) => ({name: tag[0] as string, value: tag[1] as string}));
}

function getTitleFromTags(tags: [string, ...string[]][]): string {
    const titleTag = tags.find(tag => tag[0] === "title");
    return titleTag ? titleTag[1] : "";
}

function getImageFromTags(tags: [string, ...string[]][]): string {
    const titleTag = tags.find(tag => tag[0] === "image");
    return titleTag ? titleTag[1] : "";
}

function getSummaryFromTags(tags: [string, ...any[]][]): string {
    const titleTag = tags.find(tag => tag[0] === "summary");
    return titleTag ? titleTag[1] : "";
}

export const useArticlesStore = defineStore('articleStore', {
    state: () => ({
        ndkStore: useNdkStore(),
        articleSet: new Set<Article>
    }),
    getters: {
        articles: state => state.articleSet
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

        getArticles: async function getArticles(): Promise<void> {
            if (!this.ndkStore.initialized) await this.ndkStore.initialize()

            const subscriptionConfig = {
                kinds: [NDKKind.Article],
                limit: 100,
            };

            const subscriptionOptions = {
                closeOnEose: true,
                groupable: false,
            };

            const sub = this.ndkStore.ndk.subscribe(subscriptionConfig, subscriptionOptions)

            sub.on("event", (event: NDKEvent) => {
                console.log("orginal event:", event)
                if (event && event.created_at && !Array.from(this.articleSet).some(e => e.id === event.id)) {
                    if (event.publishStatus === "success") {
                        let article = mapArticle(event as NDKEventWithMetadata)
                        console.log("transformed article: ", article)
                        this.articleSet.add(article)
                    }
                }
            })

        }
    }

})
