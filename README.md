# Flux Commons Store Watch Mixin

Simple mixin for registering/unregistering automatically a component to the
change events on a store.

## Usage

```js
var StoreWatchMixin = require('./mixins/store_watch_mixin');
var MyStore = require('./my_store');

var Component = React.createClass({
  mixins: [StoreWatchMixin(MyStore)],

  render: function() {...}

})
```
By default will assume that your stores have the methods `addChangeListener` `removeChangeListener` and your components the method `onStoreChange`.
If you don't like the defaults you can change them by sending an options
object as the second argument of the StoreWatchMixin.

Available options

- `addListenerFnName` name of the register function on the Store.
- `removeListenerFnName` name of the unregister function on the Store.
- `handlerName` name of the handler that will be executed on the component when
a store emits a change event.
