module.exports = {
    async headers() {
      return [
        {
          source: '/(.*)', // Match all routes
          headers: [
            {
              key: 'ETag',
              value: 'DynamicallyGenerated',
            },
            {
              key: 'Cache-Control',
              value: 'public,max-age=31536000,immutable',
            },
          ],
        },
        {
          source: '/.*\\.json',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-cache',
            },
          ],
        },
        {
          source: '/static/.*\\.(css|js|png|jpg|gif|svg|map)',
          // No specific headers defined for this route
        },
        {
          source: '/logo.png',
          // No specific headers defined for this route
        },
        {
          source: '/favicon.(png|jpg|ico)',
          // No specific headers defined for this route
        },
      ];
    },
    async rewrites() {
      return [
        {
          source: '/(.*)',
          destination: '/index.html',
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
    async navigationFallback() {
      return {
        rewrite: '/index.html',
        exclude: [
          '/static/css/(.*)',
          '/static/media/.*\\.(png|jpg|gif|svg)',
          '/static/js/(.*)',
        ],
      };
    },
    async mimeTypes() {
      return {
        '.json': 'text/json',
      };
    },
  };
  