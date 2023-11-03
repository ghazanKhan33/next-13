const { sources } = require('next/dist/compiled/webpack/webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    forwardingGateway: {
      requiredHeaders: {
        'X-Azure-FDID': 'ADDED_DURING_DEPLOYMENT',
      },
      allowedForwardedHosts: [
        'ADDED_DURING_DEPLOYMENT',
        'app.dakotasoft.com',
        'www.app.dakotasoft.com',
      ],
    },
    generateEtags: false,
    async headers() {
        return [
          {
            source: '/(.*).json',
            headers: [
              {
                key: 'Cache-Control',
                value: 'no-cache',
              },
            ],
          },
          {
            source: '/static/(.*)',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable',
              },
            ],
          },
          {
            source: '/(logo.png|favicon.(png|jpg|ico))',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable',
              },
            ],
          },
          {
            source: '/(.*)',
            headers: [
              {
                key: 'ETag',
                value: 'DynamicallyGenerated',
              },
              {
                key: 'Cache-Control',
                value: 'private, no-cache, no-store, must-revalidate',
              },
              {
                key: 'pragma',
                value: 'no-cache',
              },
              {
                key: 'expires',
                value: 'Sat, 01 Jan 2000 00:00:00 GMT',
              },
            ],
          },
        ];
      },
  };

module.exports = nextConfig
