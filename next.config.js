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
            'ETag': 'DynamicallyGenerated',
            'Cache-Control': 'public,max-age=31536000,immutable',
          },
        ],
      },
    ]
  },
  async rewrites() { return [
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
  ]},

};
