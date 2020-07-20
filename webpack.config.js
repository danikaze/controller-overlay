const { resolve } = require('path');
const { NamedModulesPlugin } = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

function absPath(pathFromProjectRoot) {
  return resolve(__dirname, pathFromProjectRoot);
}

module.exports = (env) => {
  const isProduction = env !== 'dev';
  const baseConfig = {
    mode: isProduction ? 'production' : 'development',
    watch: !isProduction,

    entry: absPath('src/index.ts'),

    output: {
      filename: 'js/[name].js',
      path: absPath('app'),
    },

    stats: {
      assetsSort: 'name',
      modules: false,
      children: false,
      excludeAssets: [/hot(-update)?\.js(on)?/, /webpack-dev-server/],
    },

    devtool: 'source-map',

    optimization: {
      minimize: false,
    },

    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })],
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                compilerOptions: {
                  declaration: false,
                  sourceMap: true,
                },
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new CopyPlugin({
        patterns: [{ from: 'static/' }],
      }),
    ],
  };

  if (!isProduction) {
    baseConfig.plugins.push(new NamedModulesPlugin());
  }

  return baseConfig;
};
