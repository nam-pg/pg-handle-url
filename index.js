/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import ListApp from './ListApp';
import {name as appName} from './app.json';
// import ReducerFactory from './src/redux/reducer/ReducerFactory';
// import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';
// import {createStore, applyMiddleware} from 'redux';

// const store = createStore(ReducerFactory, applyMiddleware(thunk));

// const ReduxApp = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('ListApp', () => ListApp);
