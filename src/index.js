import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {WidgetsPageConnected} from './components/widgets-page';
import store from './stores';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  (
    <Provider store={store}>
      <WidgetsPageConnected />
    </Provider>
  ),
  document.getElementById('root')
);

