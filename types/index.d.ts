
export interface User  {
    name: string;
    avatar: string;
    npub: string ;
    pubKey: string;
}

export interface Profile {
    user: User;
    about: string | "";
    website: string | "";
    displayName: string | "";
    nip05: string | "";
}

export interface Author  {
    name: string;
    avatar: string;
    npub: string;
    displayName: string;
}

export interface Note {
    content: string;
    date: string;
    author: Author;

}
