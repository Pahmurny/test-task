const path = require('path');
// you can use this file to add your custom webpack plugins, loaders and
// anything you like. This is just the basic way to add additional webpack
// configurations. For more information refer the docs:
// https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is
// similar to "React Create App". This only has babel loader to load
// JavaScript.

const fontsFileName = `fonts/[name].[ext]`;
const imagesFileName = `img/[name].[ext]`;


module.exports = {
  plugins: [],
    module: {
    rules: [
      // "url" loader works like "file" loader except that it embeds assets
      // smaller than specified limit in bytes as data URLs to avoid requests.
      // A missing `test` is equivalent to a match.
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }]
      },
        {
            test: /\.woff(\?.*)?$/,
            loader: `url-loader?prefix=fonts/&name=${fontsFileName}&limit=100000&mimetype=application/font-woff`,
        },
        {
            test: /\.woff2(\?.*)?$/,
            loader: `url-loader?prefix=fonts/&name=${fontsFileName}&limit=100000&mimetype=application/font-woff2`
        },
        {
            test: /\.ttf(\?.*)?$/,
            loader: `url-loader?prefix=fonts/&name=${fontsFileName}&limit=100000&mimetype=application/octet-stream`
        },
        {test: /\.eot(\?.*)?$/, loader: `file-loader?prefix=fonts/&name=${fontsFileName}`},
        {test: /\.svg(\?.*)?$/, loader: `url-loader?prefix=fonts/&name=${fontsFileName}&limit=100000&mimetype=image/svg+xml`},
        {test: /\.(png|jpg)$/, loader: `url-loader?limit=51092&name=${imagesFileName}`}
    ]
  }
}
