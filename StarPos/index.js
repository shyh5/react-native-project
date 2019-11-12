/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import TabRootVC from './src/TabRootVC';

import RootVC from './src/RootVC';


AppRegistry.registerComponent(appName, () => RootVC);
