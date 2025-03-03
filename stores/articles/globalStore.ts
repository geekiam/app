import {defineStore} from "pinia";
import type {NDKFilter, NDKUserProfile} from "@nostr-dev-kit/ndk";
import {NDKArticle, NDKKind} from "@nostr-dev-kit/ndk";
import {useNdkStore} from "~/stores/ndk";
import type {Article, Author} from "~/types";
import {useProfileStore} from "~/stores/profile";
import type {IStore} from "~/types";
import {mapArticle, mapAuthor, subscriptionOptions} from "~/stores/articles/utilities";

export const useGlobalStore = defineStore('globalStore',
    {

        state: () => ({
            ndkStore: useNdkStore(),
            profileStore: useProfileStore(),
            articleSet: new Set<Article>,
            selectedArticle: null as Article | null,
            authorSet: new Set<Author>(),
        }),
        getters: {
            articles: state => state.articleSet as Set<Article>,
            article: state => state.selectedArticle as Article,
            authors: state => state.authorSet as Set<Author>,
        },
        actions: {
            select: async function select(id: string): Promise<void> {
                this.selectedArticle = Array.from(this.articleSet).find(x => x.id === id) || null
            },
            feed: async function feed(): Promise<void> {
                if (!this.ndkStore.initialized) await this.ndkStore.initialize()

                const subscriptionConfig: NDKFilter<NDKKind> = {
                    kinds: [NDKKind.Article]
                };

                const subscription = this.ndkStore.ndk.subscribe(subscriptionConfig, subscriptionOptions);

                subscription.on("event", async event => {
                    if (!event || !event.created_at) return;

                    let isDuplicate = Array.from(this.articleSet).some(existingArticle => existingArticle.id === event.id);
                    if (isDuplicate || event.publishStatus !== "success") return;
                    let profile = await event.author.fetchProfile();
                    if (profile === undefined || profile === null) return;
                    let author = mapAuthor(profile as NDKUserProfile);
                    let existingAuthor = Array.from(this.authorSet).some(x => x.name === author.name);
                    if (!existingAuthor) {
                        this.authorSet.add(author)
                    }
                    let article = mapArticle(NDKArticle.from(event), profile as NDKUserProfile);
                    this.articleSet.add(article);
                });
            }
        }
    }) as unknown as () => IStore

