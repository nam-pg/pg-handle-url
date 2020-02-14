import {NativeModules, NativeEventEmitter} from 'react-native';
import NavigationService from './NavigationService';
//const eventEmitterModule = NativeModules.EventEmitter;

class UI {
  //eventEmitter = new NativeEventEmitter(eventEmitterModule);
  openURL(path: string, data: any) {
    switch (path) {
      case 'HOME': {
        console.log('openUrl HOME');
        NavigationService.navigate('Home', {});
        break;
      }
      case 'PAYMENT': {
        console.log('openUrl Payment');
        NativeModules.PGNavigation.navigate('Payment');
        break;
      }

      case 'LIST': {
        console.log('openUrl LIST');
        NavigationService.navigate('List', {});
        break;
      }
    }
  }

  constructor() {
    // this.eventEmitter.addListener(eventEmitterModule.MyEventName, params => {
    //   this.openURL('HOME');
    // });
  }
}

export default new UI();
