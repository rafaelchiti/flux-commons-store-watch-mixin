
var StoreWatchMixin = function(stores, options) {
  if (!options) options = {};

  options.addListenerFnName = options.addListenerFnName || 'addChangeListener';
  options.removeListenerFnName = options.removeListenerFnName || 'removeChangeListener';
  options.handlerName = options.handlerName || 'onStoreChange';

  return {
    componentDidMount: function() {
      if (!this[options.handlerName]) {
        throw new Error("Handler not found on the view. " +
          "Handler with name: [" + options.handlerName + "] expected to be defined on the view.");
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
