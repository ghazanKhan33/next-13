module.exports = {
  headers: {
    "ETag": "DynamicallyGenerated",
    "Cache-Control": "public,max-age=31536000,immutable"
  },
  rewrites: [
    {
      source: "/static/*.{css,js,png,jpg,gif,svg,map}",
      destination: "/static/:path*"
    },
    {
      source: "/logo.png",
      destination: "/logo.png"
    },
    {
      source: "/favicon.{png,jpg,ico}",
      destination: "/favicon/:path*"
    }
  ],
  redirects: [
    {
      source: "/*",
      destination: "/index.html",
      exclude: ["/static/css/*", "/static/media/*.{png,jpg,gif,svg}", "/static/js/*"]
    }
  ],
  mimeTypes: {
    ".json": "text/json"
  }
};
