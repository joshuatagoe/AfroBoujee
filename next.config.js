const path = require('path');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withReactSvg = require('next-react-svg')
const compose = require('next-compose');
const svgConfig = {
  include: path.resolve(__dirname, '/imgs/'),
  webpack(config, options) {
    return config
  }
}
module.exports = compose([
    [withSass],
    [withImages],
    [withReactSvg, svgConfig],
    {
      webpack: (config) => {
        /**some special code */
        return config
      }
    }
  ])