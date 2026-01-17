export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // 'body-max-line-length': [0],
        'body-max-line-length': [2, 'always', 500],
        'header-max-length': [2, 'always', 125],
    },
}
