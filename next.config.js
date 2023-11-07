module.exports = {
    async headers() {
      return [
        {
          source: '/.*\\.json',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-cache',
            },
          ],
        },
      ];
    },
    async rewrites() {
      return [
        {
          source: '/static/.*\\.(css|js|png|jpg|gif|svg|map)',
          destination: '/static/...your-destination-path', // Update with your actual destination
        },
        {
          source: '/logo.png',
          destination: '/...your-destination-path', // Update with your actual destination
        },
        {
          source: '/favicon.(png|jpg|ico)',
          destination: '/...your-destination-path', // Update with your actual destination
        },
      ];
    },
    async redirects() {
      return [
        {
          source: '/401',
          destination: '/login',
          statusCode: 302,
        },
      ];
    },
    // async navigationFallback() {
    //   return {
    //     rewrite: '/index.html',
    //     exclude: [
    //       '/static/css/(.*)',
    //       '/static/media/.*\\.(png|jpg|gif|svg)',
    //       '/static/js/(.*)',
    //     ],
    //   };
    // },
    // async mimeTypes() {
    //   return {
    //     '.json': 'text/json',
    //   };
    // },
  };
  