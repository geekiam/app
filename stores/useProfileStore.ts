import {defineStore} from "pinia";
import type {NDK, NDKUser, NDKUserProfile} from "@nostr-dev-kit/ndk";
import {useNdkStore} from "~/stores/NdkStore";
import {useAuthStore} from "~/stores/useAuthStore";
import {USER_STORAGE_KEY} from "~/stores/useAuthStore";

export const useProfileStore = defineStore('profileStore', {
    id: 'profile-store',
    state: () => ({
       ndkStore: useNdkStore(),
        authStore: useAuthStore()
    }),

    actions: {
        async getProfile(user: NDKUser) {
            if (!this.ndkStore.initialized) await this.ndkStore.initialize()
            user = await this.ndkStore.ndk.getUser({
                npub: this.authStore.user.npub,
            })
            if (user !== undefined) {
                this.user = user
                if (user.profile === undefined) {
                    await user.fetchProfile()
                    this.profile = user.profile
                }
            }
        },
        async updateProfile(profile: NDKUserProfile) {
            const updateUser = await this.ndkStore.ndk.getUser({
                npub: this.user.npub,
            });
            await updateUser.fetchProfile()

            const updateProfile = updateUser.profile
            updateProfile.about = profile.about
            updateProfile.nip05 = profile.nip05
            updateProfile.name = profile.name
            updateProfile.displayName = profile.displayName
            updateProfile.website = profile.website
            updateProfile.profile = null

            await updateUser.publish()
            this.setUser(updateUser)
        },
        setUser(user: NDKUser) {
            this.user = user
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
        },
    }
})