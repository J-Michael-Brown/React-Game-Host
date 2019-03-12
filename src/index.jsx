import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';

import ContentInfoListReducer from './reducers/ContentInfoListReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

const store = createStore(ContentInfoListReducer, applyMiddleware(thunkMiddleware));

const render = (Component) => {
  require("react-hot-loader/patch");
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Provider store={store}>
          <Component />
        </Provider>
      </HashRouter>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
//
// );


/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
