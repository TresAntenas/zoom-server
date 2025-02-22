module.exports = {
  apps: [
    {
      name: "zoom-auth-server",
      script: "zoom-server.js",
      cwd: "/var/www/zoom-auth",
      env: {
        NODE_ENV: "production",
        ZOOM_CLIENT_ID: "2ezbinChQtWN90mIi0hVgw",
        ZOOM_CLIENT_SECRET: "6MEfLAifcy5IhowbggDEQNd3azK426v2",
        ZOOM_PORT: "5000"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};

