
var StoreWatchMixin = function(stores, options) {
  if (!options) options = {};

  options.addListenerFnName = options.addListenerFnName || 'addChangeListener';
  options.removeListenerFnName = options.removeListenerFnName || 'removeChangeListener';
  options.handlerName = options.handlerName || 'onStoreChange';

  return {
    componentDidMount: function() {
      if (!this[options.handlerName]) {
        console.log("WARNING: The handler required for the store listener was not found.");
      }

      stores.forEach(function(store) {
        store[options.addListenerFnName](this[options.handlerName]);
      }, this);
    },

    componentWillUnmount: function() {
      stores.forEach(function(store) {
        store[options.removeListenerFnName](this[options.handlerName]);
      }, this);
    }
  };
}

module.exports = StoreWatchMixin;
