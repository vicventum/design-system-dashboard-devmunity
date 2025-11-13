export default /* ui */ {
    slots: {
        header: 'min-h-auto',
        title: 'text-xl',
        close: 'text-primary',
    },
    variants: {
        fullscreen: {
            false: {
                content: 'max-w-auto',
            },
        },
    },
}
