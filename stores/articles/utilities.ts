import {NDKArticle, type NDKUserProfile} from "@nostr-dev-kit/ndk";
import type {Article, Author} from "~/types";
import {format} from "date-fns";


export function mapArticle(event: NDKArticle , profile : NDKUserProfile): Article {
    const tags = event.tags as [string, ...any[]][];

    return <Article>{
        id: event.id,
        pubkey: event.pubkey,
        title: getTitleFromTags(tags) || "",
        summary: getSummaryFromTags(tags) || "",
        content: event.content || "",
        date: event.created_at ? new Date(event.created_at * 1000).toISOString() : "",
        image: getImageFromTags(tags) || "",
        tags: getTopicTagsFromTags(event) || [],
        published: event.created_at ? format(new Date(event.created_at * 1000), 'dd MMM yyyy') : new Date(),
        author: mapAuthor(profile),
    }
}
export function mapAuthor(profile: NDKUserProfile) : Author {


    return <Author>{
        name: profile.name,
        avatar: profile.image,
        npub: profile.npub,
        displayName: profile.displayName,
        lightning: profile.lud16,
        lnUrl: profile.lnurl,
        website: getWebsiteLink(profile.website),
        about: profile.about,
    }
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
function getTopicTagsFromTags(article: NDKArticle): string[] {
    const articleTags = article.getMatchingTags("t");
    return articleTags.map(tag => tag[1].toLowerCase() as string).filter(Boolean);
}
function getWebsiteLink(website: string | undefined): string {
    if(website === undefined || website ==="") return "";
    if(website.startsWith("https://")|| website.startsWith("http://")) return website;
    return "https://" + website;
}
export const subscriptionOptions = {
    closeOnEose: false,
    groupable: false,
    includeSelf: true,
}
