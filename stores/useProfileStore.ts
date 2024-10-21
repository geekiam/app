import {defineStore} from "pinia";

import type {NDKUser, NDKUserProfile} from "@nostr-dev-kit/ndk";

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

        async getFeed(user, ndk) {

            const fetchKinds = [
                0, // Profile metadata
                1, // Notes
                3, // Contacts
                6, // Repost
                7, // Reaction
                1985, // Label
                9735, // Zap receipt event
                10002, // Relay list metadata
                30023 // Long-form content
            ]
            const filter = {kinds: fetchKinds, limit:65}

          return await ndk.fetchEvents(filter)

        },
        async signOut() {
            this.user = null

        }
    }


})