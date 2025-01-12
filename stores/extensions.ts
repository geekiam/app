import type {Settings} from "~/types";
import {SETTINGS_STORAGE_KEY, USER_PUB_KEY, USER_STORAGE_KEY} from "~/types/Globals";
import type {Hexpubkey} from "@nostr-dev-kit/ndk";


export function getPubkey() : string | null {
    const pubKey = localStorage.getItem(USER_PUB_KEY);
    if( pubKey )
        return pubKey as string;
    else
    return null;
}

export function signOut(): void {
    localStorage.removeItem(USER_PUB_KEY);
    localStorage.removeItem(SETTINGS_STORAGE_KEY);
}
export function getUserSettings(): Settings | null {
    const settingsJson: string | null = localStorage.getItem(SETTINGS_STORAGE_KEY);
    return JSON.parse(<string>settingsJson) as Settings;
}

export function setUserSettings(relays : string[] , follows: Set<Hexpubkey>): void {
     const settings: Settings = {
        relays: relays,
        following: Array.from(follows)
    }
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
}
