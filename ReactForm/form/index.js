/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Reg from './component/Reg';
import Form from './component/Form';
import Checkbox from './component/RadioButton/Checkboxreactnative';
import Multicheck from './component/RadioButton/multiplecheckbox';
 
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Form);
