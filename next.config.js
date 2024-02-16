const withImages = require('next-images');

module.exports = withImages({
    images: {
        domains: [process.env.BACKEND_HOST, 'storage.googleapis.com'],
        //domains: ['localhost:3000'],
        disableStaticImages: false,
    },
    async rewrites() {
        return [
            {
                source: '/about',
                destination: `${process.env.BACKEND_URL}/about/`,
            },
            {
                source: '/projects',
                destination: `${process.env.BACKEND_URL}/projects/`,
            },
            {
                source: '/technologies',
                destination: `${process.env.BACKEND_URL}/technologies/`,
            },
            {
                source: '/research',
                destination: `${process.env.BACKEND_URL}/research/`,
            },
            {
                source: '/contact',
                destination: `${process.env.BACKEND_URL}/contact/`,
            },
        ];
    },
});
