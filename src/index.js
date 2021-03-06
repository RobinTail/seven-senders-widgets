import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'connected-react-router';
import {WidgetCreationWizardConnected} from './components/widget-creation-wizard';
import {frontendPaths} from './constants/paths';
import configureStore, {history} from './stores';
import {WidgetsPageConnected} from './components/widgets-page';
import 'semantic-ui-css/semantic.min.css'

const store = configureStore();

ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path={frontendPaths.addWidget} component={WidgetCreationWizardConnected}/>
          <Route path={frontendPaths.root} component={WidgetsPageConnected}/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  ),
  document.getElementById('root')
);

