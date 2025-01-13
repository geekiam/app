export default defineAppConfig({
    title: 'geekiam',
    description: 'authentication client',
    app: {

        head: {
            meta:[],
            link: [
                {rel: "icon", type: 'image/x-icon', href: '/favicon.ico'},
            ],
        }
    },
    ui: {
        notifications: {
            // Show toasts at the top right of the screen
            position: 'top-0 bottom-[unset]'
        }
    }
})
