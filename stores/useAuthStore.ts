import {defineStore} from "pinia";
import NDK, {NDKEvent, NDKNip07Signer, NDKUser} from "@nostr-dev-kit/ndk";
import router from "#app/plugins/router";
// Create a new NDK instance with explicit relays


interface User {
    id: string;
}
const geekiamKey = "geekiam-key";

export const useAuthStore = defineStore('useAuthStore', {
    id: 'user-store',
    state: () => ({
       npub:'',
        pubKey: '',
        name: '',
        image: '',
        signedIn: false,
        signedOut: true
    }),
    getters: {
        isAuthenticated: (state) => state.signedIn === true,
    },


    actions: {

        async profile(user,ndk){
            console.log('got here')
            user = ndk.getUser({
                npub: user.npub,
            })
            if(user.profile === undefined){
                await user.fetchProfile()
                console.log(user)
                this.name = user.profile.name
                this.image = user.profile.image
            }
        },
      async  signIn(user,ndk) {

          this.pubKey = user.pubKey
          await this.profile(user,ndk)
          this.signedIn = true
          this.signedOut = false

          /*  const ndk = new NDK()
            ndk.signer = new NDKNip07Signer();
           await ndk.connect()
            const signer = await ndk.signer.user()

          const user = ndk.getUser({npub: signer.npub})
          await user.fetchProfile()
          console.log(user.profile)*/
          /*  const nip07signer = new NDKNip07Signer();
            const ndk = new NDK({signer: nip07signer});
            nip07signer.user().then(async (ndkUser) => {

                if (!!ndkUser.npub) {
                    const pablo = ndk.getUser({
                        npub: ndkUser.npub,
                    });

                    console.log(pablo)
                    await pablo.fetchProfile()
                    console.log(pablo.profile)
                    this.setUser(ndkUser);
                    return useNuxtApp().$router.push('/')
                }
            });*/
        },
        setUser(user: NDKUser) {
            this.user = {id: user.npub}
            localStorage.setItem(geekiamKey, JSON.stringify(this.user));
        },
        removeUser(){
            this.user = null;
            localStorage.removeItem(geekiamKey)
        },
        signOut(){

          this.removeUser();


        }
    }



})