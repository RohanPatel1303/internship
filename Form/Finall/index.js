/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MYApp from './component/navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MYApp);
