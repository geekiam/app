import type {NDKUser, NDKUserProfile} from "@nostr-dev-kit/ndk";
import type {Profile} from "~/types";

export function mapUserToProfile(user: NDKUser): Profile {
    const profile = user.profile || {} as NDKUserProfile;
    return <Profile>{
        user: {
            name: profile.name || '',
            avatar: profile.image || '',
            npub: user.npub || ''
        },
        about: profile.about || '',
        website: profile.website || '',
        displayName: profile.displayName || '',
        nip05: profile.nip05 || '',
        lightning: profile.lud16 || ''
    };
}
