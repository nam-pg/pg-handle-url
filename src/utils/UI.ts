import {NativeModules, NativeEventEmitter} from 'react-native';
import NavigationService from './NavigationService';
const eventEmitterModule = NativeModules.EventEmitter;

class UI {
  eventEmitter = new NativeEventEmitter(eventEmitterModule);
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

      case 'WEB': {
        console.log('openUrl web');
        NavigationService.navigate('Web', data);
        break;
      }
    }
  }

  constructor() {
    this.eventEmitter.addListener(eventEmitterModule.MyEventName, params => {
      this.openURL(params, { uri: 'https://nam-pg.github.io' });
    });
  }
}

export default new UI();
