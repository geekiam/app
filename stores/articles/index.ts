import {defineStore} from "pinia";
import {NDKArticle, NDKEvent, NDKKind, NDKUser} from "@nostr-dev-kit/ndk";
import {format} from "date-fns";
import {useNdkStore} from "~/stores/ndk";
import type {Article} from "~/types";
import {useProfileStore} from "~/stores/profile";


function mapArticle(event: NDKArticle): Article {
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
        profileStore: useProfileStore(),
        articleSet: new Set<Article>,
        selectedArticle: null as Article | null,
    }),
    getters: {
        articles: state => state.articleSet,
        article: state => state.selectedArticle
    },
    actions: {
        fetchFeed: async function fetchUserFeed(kinds: NDKKind[]): Promise<Set<NDKEvent>> {
            if (!this.ndkStore.initialized) await this.ndkStore.initialize()
            const filter = {
                kinds: kinds,
                limit: 5,
            };
            return await this.ndkStore.ndk.fetchEvents(filter);
        },
        select: function select(id: string): void {

            this.selectedArticle = Array.from(this.articleSet).find(x => x.id === id) || null
        },
        getArticles: async function getArticles(): Promise<void> {
            if (!this.ndkStore.initialized) await this.ndkStore.initialize()

            const subscriptionConfig = {
                kinds: [NDKKind.Article],
                limit: 50,
            };

            const subscriptionOptions = {
                closeOnEose: true,
                groupable: false,
                includeSelf: true,
            };

            const sub =  this.ndkStore.ndk.subscribe(subscriptionConfig, subscriptionOptions)

            sub.on("event", async (event: NDKEvent) => {
                if (event && event.created_at && !Array.from(this.articleSet).some(e => e.id === event.id)) {
                    if (event.publishStatus === "success") {
                        let article = mapArticle(NDKArticle.from(event))
                        this.articleSet.add(article)
                    }
                }
            })


        }
    }

})
