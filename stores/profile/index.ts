import {defineStore} from "pinia";
import type {NDKUser, NDKUserProfile} from "@nostr-dev-kit/ndk";
import {useNdkStore} from "~/stores/ndk";
import {useAuthStore} from "~/stores/auth"
import type {Profile} from "~/types";
import {mapUserToProfile} from "~/stores/profile/utilities";

export const useProfileStore = defineStore('profileStore', {

    state: () => ({
        ndkStore: useNdkStore(),
        authStore: useAuthStore(),
    }),

    actions: {
        getProfile: async function (pubkey: string): Promise<Profile | null> {

            if (!this.ndkStore.initialized) await this.ndkStore.initialize()

            let user: NDKUser = this.ndkStore.ndk.getUser({
                pubkey: pubkey,
            })

            if (user !== undefined) {
                if (user.profile === undefined) {
                    await user.fetchProfile()
                    return mapUserToProfile(user)
                }
            }
            return null;
        },
        getAuthor: async function (pubKey: string): Promise<Profile | null> {

            if (!this.ndkStore.initialized) await this.ndkStore.initialize()

            let user: NDKUser = this.ndkStore.ndk.getUser({
                pubkey: pubKey,
            })
            if (user !== undefined) {
                if (user.profile === undefined) {
                    await user.fetchProfile()
                    return mapUserToProfile(user)
                }
            }
            return null;
        },

        updateProfile: async function (profile: Profile | null): Promise<void> {
            if (profile === null) return;
            if (!this.ndkStore.initialized) await this.ndkStore.initialize()
            let updateUser: NDKUser = this.ndkStore.ndk.getUser({pubkey: this.authStore.pubkey as string})
            await updateUser.fetchProfile()
            const updateProfile: NDKUserProfile = updateUser.profile || {} as NDKUserProfile;
            if (updateProfile !== undefined) {
                updateProfile.about = profile.about
                updateProfile.nip05 = profile.nip05
                updateProfile.name = profile.user.name
                updateProfile.displayName = profile.displayName
                updateProfile.website = profile.website
                await updateUser.publish()
            }
        },
    }
})
