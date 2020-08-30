import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducer/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { getFirestore, reduxFirestore, createFirestoreInstance} from 'redux-firestore'
import { getFirebase, ReactReduxFirebaseProvider, reactReduxFirebase} from 'react-redux-firebase'
import firebaseConfig from './config/fbconfig'
import firebase from './config/fbconfig'


const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
  reduxFirestore(firebaseConfig),
))


const rrfConfig = {
  userProfile: 'users',
}
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance

}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);




serviceWorker.unregister();
