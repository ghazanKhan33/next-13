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
    headers: async()=> ([
        {
            source: '*json',
            header: [
                {
                    key: 'Cache-Control',
                    value: 'no-cache'
                }
            ]
        },
        {
            source: 'static*.{css,js,png,jpg,gif,svg,map}',
        },
        {
            source: 'logo.png',
        },
        {
            source: 'favicon.{png,jpg,ico}',
        },
        {
            source: '*',
            headers: [
                {
                    key: 'ETag',
                    value: ''
                },
                {
                    key: 'Cache-Control',
                    value: 'private, no-cache, no-store, must-revalidate'
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
    
        }

    ])
  };

module.exports = nextConfig
