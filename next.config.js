const nextTranslate = require('next-translate');

const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextTranslate(nextConfig);
