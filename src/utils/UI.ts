import {NativeModules} from 'react-native';
import NavigationService from './NavigationService';

class UI {
  openURL(path: string, data: any) {
    switch (path) {
      case 'HOME': {
        console.log('openUrl HOME');
        NavigationService.navigate('Home', {});
        break;
      }
      case 'PAYMENT': {
        NativeModules.PGNavigation.navigate('Payment');
        break;
      }
      case 'DASH': {
        NativeModules.PGNavigation.navigate('Dashboard');
        break;
      }
      case 'WEB': {
        console.log('openUrl web');
        NavigationService.navigate('Web', data);
        break;
      }
    }
  }
}

export default new UI();
