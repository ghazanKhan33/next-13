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
    headers: async()=> ({
      'ETag': 'DynamicallyGenerated',
      'Cache-Control': 'public,max-age=31536000,immutable',
    }),
    routes: [
      {
        route: '/*.json',
        headers: {
          'Cache-Control': 'no-cache',
        },
      },
      {
        route: '/static/*.{css,js,png,jpg,gif,svg,map}',
      },
      {
        route: '/logo.png',
      },
      {
        route: '/favicon.{png,jpg,ico}',
      },
      {
        route: '/*',
        headers: {
          'ETag': '',
          'Cache-Control': 'private, no-cache, no-store, must-revalidate',
          pragma: 'no-cache',
          expires: 'Sat, 01 Jan 2000 00:00:00 GMT',
        },
      },
    ],
  };
  
  module.exports = nextConfig;

module.exports = nextConfig
