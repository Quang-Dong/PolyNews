/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import * as firebase from 'firebase';

AppRegistry.registerComponent(appName, () => App);

var firebaseConfig = {
  apiKey: 'AIzaSyBkkEjWcgpHzTdjyT2BeYAy0_ySt2CeQgw',
  authDomain: 'poly-2111b.firebaseapp.com',
  databaseURL: 'https://poly-2111b.firebaseio.com',
  projectId: 'poly-2111b',
  storageBucket: 'poly-2111b.appspot.com',
  messagingSenderId: '726964308357',
  appId: '1:726964308357:web:5b8377f29a899e91c71cec',
  measurementId: 'G-39TP5S58TZ',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
