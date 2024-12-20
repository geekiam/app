import {defineStore} from "pinia";
import type {NDKUser, NDKUserProfile} from "@nostr-dev-kit/ndk";
import {useNdkStore} from "~/stores/ndk";

import {USER_STORAGE_KEY} from "~/types/Globals";
import {useAuthStore} from "~/stores/auth"
import type {Profile, User} from "~/types";
function mapUserToProfile(user: NDKUser): Profile {
     return <Profile>{
        user: {
            name: user.profile?.name || '',
            avatar: user.profile?.image || '',
            npub: user.npub || ''
        },
        about: user.profile?.about || '',
        website: user.profile?.website || '',
        displayName: user.profile?.displayName || '',
        nip05: user.profile?.nip05 || ''
    };
}
export const useProfileStore = defineStore('profileStore', {

    state: () => ({
        ndkStore: useNdkStore(),
        authStore: useAuthStore()
    }),

    actions: {
       getProfile: async function(npub: string): Promise<Profile | null> {
            if (!this.ndkStore.initialized) await this.ndkStore.initialize()

            let user: NDKUser = this.ndkStore.ndk.getUser({
                npub: npub,
            })
            if (user !== undefined) {
                if (user.profile === undefined) {
                    await user.fetchProfile()
                  return mapUserToProfile(user)
                }
            }
           return null;
        },
        getAuthor: async function getAuthor(pubKey: string): Promise<Profile | null> {
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

            return null ;
        },

        updateProfile: async function (profile: Profile | null): Promise<void> {
          if(profile === null) return;
           let updateUser: NDKUser = await this.authStore.getUser()
                await updateUser.fetchProfile()
                const updateProfile: NDKUserProfile = updateUser.profile as NDKUserProfile;
                if (updateProfile !== undefined) {
                    updateProfile.about = profile.about
                    updateProfile.nip05 = profile.nip05
                    updateProfile.name = profile.user.name
                    updateProfile.displayName = profile.displayName
                    updateProfile.website = profile.website
                    await updateUser.publish()

                }


        },
        setUser(user: NDKUser) {

            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
        },
    }
})
