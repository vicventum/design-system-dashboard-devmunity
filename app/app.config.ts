import * as components from '#layers/design-system/app/assets/css/themes'

export default defineAppConfig({
    ui: {
        ...components,
        colors: {
            primary: 'brand-blue',
            secondary: 'brand-purple',
            accent: 'brand-yellow',
            success: 'brand-green',
            warning: 'brand-orange',
            error: 'brand-red',
            info: 'brand-blue-sky',
            neutral: 'brand-grey',
            // test: 'purple',
        },
    },
})
