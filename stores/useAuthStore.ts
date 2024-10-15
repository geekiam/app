import {defineStore} from "pinia";
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
                user = ndk.getUser({
                npub: user.npub,
            })
            if(user.profile === undefined){
                await user.fetchProfile()
                this.name = user.profile.name
                this.image = user.profile.image
                this.npub = user.npub
            }
        },
      async signIn(user,ndk) {

          this.pubKey = user.pubKey
          await this.profile(user,ndk)
          this.signedIn = true
          this.signedOut = false
        },
       async signOut(){
          this.removeUser();

        }
    }



})