module.exports = {
  async rewrites(){ 
    return [
    {
      source: "/static/*.{css,js,png,jpg,gif,svg,map}",
      destination: "/static/:ext*"
    },
    {
      source: "/logo.png",
      destination: "/logo.png"
    },
    {
      source: "/favicon.{png,jpg,ico}",
      destination: "/favicon/:file*"
    }
  ]},
  async redirects() {
    return[
    {
      source: "/*",
      destination: "/index.html",
      exclude: ["/static/css/*", "/static/media/*.{png,jpg,gif,svg}", "/static/js/*"]
    }
  ]},
  generateEtags: false,
};
