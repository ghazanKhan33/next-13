/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*?)",
        headers: [
          {
            key: 'ETag',
            value: 'DynamicallyGenerated',
          },
          {
            key: 'Cache-Control',
            value: 'public,max-age=31536000,immutable',
          }
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/static/(.*)\\.(css|js|png|jpg|gif|svg|map)',
        destination: '/static/$1',
      },
      {
        source: '/logo.png',
        destination: '/logo.png',
      },
      {
        source: '/favicon\\.(png|jpg|ico)',
        destination: '/favicon.$1',
      },
      {
        source: '/(.*)',
        destination: '/index.html',
      },
    ];
  }  

};
