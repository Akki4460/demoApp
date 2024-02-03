/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import AppPro from './AppPro';
import AppDemo from './components/AppDemo';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => AppPro);
AppRegistry.registerComponent(appName, () => AppDemo);
