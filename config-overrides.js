module.exports = function override(config, env) {
  const babelLoader = config.module.rules
    .find((rule) => Array.isArray(rule.oneOf)).oneOf
    .find((rule) => rule.loader && rule.loader.includes('babel-loader'));

  // Include `mapbox-gl` in Babel transpilation
  babelLoader.include = [
    ...(Array.isArray(babelLoader.include) ? babelLoader.include : [babelLoader.include]),
    /node_modules\/mapbox-gl/,
  ];

  return config;
};
