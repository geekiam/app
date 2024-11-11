
export interface User  {
    name: string;
    avatar: string;
    npub: string ;
}

export interface Profile {
    user: User;
    about: string | "";
    website: string | "";
    displayName: string | "";
    nip05: string | "";


}
