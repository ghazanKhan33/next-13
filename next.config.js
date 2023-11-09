module.exports = {
  async rewrites() {
    return [
      {
        source: "/favicon.{png,jpg,ico}",
        destination: "/favicon/:file*",
        has: {
          file: /\.(png|jpg|ico)$/
        }
      },
      {
        source: "/static/css/:path*",
        destination: "/static/css/:path*"
      },
      {
        source: "/static/media/:path*.{png,jpg,gif,svg}",
        destination: "/static/media/:path*"
      },
      {
        source: "/static/js/:path*",
        destination: "/static/js/:path*"
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: '/index.html',
        permanent: false,
      }
    ];
  },
  generateEtags: false,
};
