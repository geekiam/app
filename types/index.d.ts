export interface User  {
    name: string;
    avatar: string;
    npub: string ;
    pubKey: string;
    following: Set<string>;

}
export interface Settings {
    following: string[];
    relays: string[];
}
export interface Profile {
    user: User;
    about: string | "";
    website: string | "";
    displayName: string | "";
    nip05: string | "";
    lightning: string | "";
}
export interface Author  {
    name: string;
    avatar: string;
    npub: string;
    displayName: string;
    lightning: string;
    lnUrl: string;
    website: string;
    about: string;
}
export interface Note {
    content: string;
    date: string;
    author: Author;
}
export interface Article {
    id: string;
    pubkey: string;
    title: string;
    summary:string;
    content: string;
    date: string;
    image: string;
    tags: [];
    published: Date;
    author: Author;
}
