/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import App from './AppPro';
import {name as appName} from './app.json';
import appPro from './AppPro';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => appPro);
