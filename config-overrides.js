const rewireReactHotLoader = require('react-app-rewire-hot-loader');

/* config-overrides.js */
module.exports = function override(config, env) {
  const newConfig = rewireReactHotLoader(config, env);
  return newConfig;
};

//this configures an override? what does that mean? Overrides what?
