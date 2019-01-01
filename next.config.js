const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');

const nextConfig = {
  distDir: 'build'
};

module.exports = withPlugins([[withCSS]], nextConfig);
