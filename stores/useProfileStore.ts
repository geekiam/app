import {defineStore} from "pinia";

import type {NDK,NDKUser, NDKUserProfile} from "@nostr-dev-kit/ndk";
import {Kind} from "~/types/Kind";

export const useProfileStore = defineStore('authStore', {
    id: 'settings-store',
    state: () => ({
        profile: null as NDKUserProfile | null,
        user: null as NDKUser | null,
    }),
    getters: {
        isAuthenticated: (state) => state.user !== null,
    },
    actions: {
        async getProfile(user, ndk) {

            user = await ndk.getUser({
                npub: user.npub,
            })
            if (user !== undefined) {
                this.user = user
                if (user.profile === undefined) {
                    await user.fetchProfile()
                    this.profile = user.profile
                }
            }
        },
        async updateProfile(profile: NDKUserProfile, ndk) {
            const updateUser = await ndk.getUser({
                npub: this.user.npub,
            });
            await updateUser.fetchProfile()

            const updateProfile = updateUser.profile
            updateProfile.about = profile.about
            updateProfile.nip05 = profile.nip05
            updateProfile.name = profile.name
            updateProfile.displayName = profile.displayName
            updateProfile.website = profile.website
            await updateUser.publish()
        },
        async signIn(user, ndk) {

            this.pubKey = user.pubKey
            await this.getProfile(user, ndk)
            this.signedIn = true
            this.signedOut = false
        },




        async signOut() {
            this.user = null

        }
    }
})