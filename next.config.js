const nextTranslate = require('next-translate');

const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: [''],
    },
};

module.exports = nextTranslate(nextConfig);
