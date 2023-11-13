/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  headers: {
    ETag: 'DynamicallyGenerated',
    'Cache-Control': 'public,max-age=31536000,immutable',
  },
  rewrites: [
    {
      source: '/*.json',
      headers: {
        'Cache-Control': 'no-cache',
      },
    },
    {
      source: '/static/*.{css,js,png,jpg,gif,svg,map}',
      destination: '/static/*.{css,js,png,jpg,gif,svg,map}',
    },
    {
      source: '/logo.png',
      destination: '/logo.png',
    },
    {
      source: '/favicon.{png,jpg,ico}',
      destination: '/favicon.{png,jpg,ico}',
    },
    {
      source: '/*',
      destination: '/index.html',
      exclude: ['/static/css/*', '/static/media/*.{png,jpg,gif,svg}', '/static/js/*'],
    },
  ],
  env: {
    networking: {
      allowedIpRanges: [
        'AzureFrontDoor.Backend',
        '168.62.172.58/32',
      ],
    },
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
    responseOverrides: {
      401: {
        statusCode: 302,
        redirect: '/login',
      },
    },
  },
};
