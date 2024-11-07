import {defineStore} from "pinia";
import {NDKNip07Signer} from "@nostr-dev-kit/ndk";
import type { NDKUser, NDKUserProfile} from "@nostr-dev-kit/ndk";
import {useNdkStore} from "~/stores/ndk";
import {USER_STORAGE_KEY} from "~/types/Globals";
import type {User} from "~/types/Account";


function getUserAccount(): User | null {
    const userJson: string | null = localStorage.getItem(USER_STORAGE_KEY);
    return JSON.parse(<string>userJson) as User;
}
function createUserFromProfile(userProfile: NDKUserProfile): User {
    return <User>{
        name: userProfile?.name || "",
        npub: userProfile?.npub || "",
        avatar: userProfile?.image || ""
    }
}
export const useAuthStore = defineStore('useAuthStore', {
    state: () => ({
        user: getUserAccount(),
        ndkStore: useNdkStore()
    }),
    getters: {
        isAuthenticated: (state) => state.user !== null,
        npub: (state) => state.user?.npub,
    },
    actions: {
        signIn: async function (): Promise<void> {
            if (!this.ndkStore.initialized) await this.ndkStore.initialize()
            const nip07Signer: NDKNip07Signer = new NDKNip07Signer()
            this.ndkStore.ndk.signer = nip07Signer
            let user: NDKUser = await nip07Signer.user()

            user = this.ndkStore.ndk.getUser({
                npub: user.npub,
            });
            if (user !== undefined) {
                if (user.profile === undefined) {
                    await user.fetchProfile()
                    if(user.profile !== undefined) this.setUser(
                        createUserFromProfile(user.profile)
                    )
                }
            }
        },
        setUser(user: User): void {
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
        },
    }
})
