import * as components from '~/assets/css/themes/index.js'

export default defineAppConfig({
    ui: {
        ...components,
        colors: {
            primary: 'brand-blue',
            secondary: 'brand-purple',
            success: 'brand-green',
            warning: 'brand-orange',
            error: 'brand-red',
            info: 'brand-blue-sky',
            neutral: 'brand-grey',
            test: 'purple',
        },
    },
})
