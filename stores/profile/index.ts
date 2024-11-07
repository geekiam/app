import {defineStore} from "pinia";
import type {NDKUser, NDKUserProfile} from "@nostr-dev-kit/ndk";
import {useNdkStore} from "~/stores/ndk";

import {USER_STORAGE_KEY} from "~/types/Globals";
import {useAuthStore} from "~/stores/auth"

export const useProfileStore = defineStore('profileStore', {

    state: () => ({
        ndkStore: useNdkStore(),
        authStore: useAuthStore()
    }),

    actions: {
       getProfile: async function(npub: string): Promise<NDKUserProfile> {
            if (!this.ndkStore.initialized) await this.ndkStore.initialize()
           alert(npub)
            let user: NDKUser = this.ndkStore.ndk.getUser({
                npub: npub,
            })
            if (user !== undefined) {
                if (user.profile === undefined) {
                    await user.fetchProfile()
                }
            }
            return user.profile as NDKUserProfile;
        },
        updateProfile: async function (profile: NDKUserProfile): Promise<void> {


            const updateUser : NDKUser = this.ndkStore.ndk.getUser({
                npub: this.authStore.npub,
            });
            await updateUser.fetchProfile()

            const updateProfile: NDKUserProfile = updateUser.profile as NDKUserProfile;
            if (updateProfile !== undefined) {
                updateProfile.about = profile.about
                updateProfile.nip05 = profile.nip05
                updateProfile.name = profile.name
                updateProfile.displayName = profile.displayName
                updateProfile.website = profile.website
                await updateUser.publish()
                this.setUser(updateUser)
            }


        },
        setUser(user: NDKUser) {

            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
        },
    }
})
