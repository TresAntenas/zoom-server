module.exports = {
  apps: [
    {
      name: "zoom-auth-server",
      script: "zoom-server.js",
      env: {
        NODE_ENV: "production",
        ZOOM_CLIENT_ID: process.env.ZOOM_CLIENT_ID,
        ZOOM_CLIENT_SECRET: process.env.ZOOM_CLIENT_SECRET,
        ZOOM_PORT: process.env.ZOOM_PORT
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};

