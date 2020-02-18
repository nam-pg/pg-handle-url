import {NativeModules} from 'react-native';
import NavigationService from './NavigationService';
import {upperCase} from 'lodash';
import QString from 'query-string';

class UI {

  constructor(){
    this.parserUrl = this.parserUrl.bind(this);
  }

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

  parserUrl(links: any) {
    if (links instanceof Object && links.url) {
      const { url, query } = QString.parseUrl(links.url);
      this.openURL(upperCase(url.split('/').pop()), query);
    }
  }
}

export default new UI();
