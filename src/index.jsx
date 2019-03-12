import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';

import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())

);

const render = (Component) => {
  require("react-hot-loader/patch");
  ReactDOM.render(
      <HashRouter>
        <Provider store={store}>
          <Component />
        </Provider>
      </HashRouter>,
    document.getElementById('root')
  );
};

render(App);


/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
