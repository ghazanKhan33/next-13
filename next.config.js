
module.exports = {
  async rewrites() {
    return [
      {
        source: "/favicon.{png,jpg,ico}",
        destination: "/favicon/:file*",
        has: {
          file: /\.(png|jpg|ico)$/
        }
      }
    ];
  },
  async redirects() {
    return [
      {
        source: "/*",
        destination: "/index.html",
        exclude: ["/static/css/*", "/static/media/*.{png,jpg,gif,svg}", "/static/js/*"]
      }
    ];
  },
  generateEtags: false,
};