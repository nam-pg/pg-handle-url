import {NativeModules} from 'react-native';
import NavigationService from './NavigationService';
import queryStr from 'query-string';
import { upperCase } from 'lodash';

class UI {

  constructor() {
    this.parserUrl = this.parserUrl.bind(this);
  }

  openURL(path: string, data: any) {
    switch (path) {
      case 'HOME': {
        console.log('openUrl HOME');
        NavigationService.navigate('Home', data);
        break;
      }
      case 'PAYMENT': {
        NativeModules.PGNavigation.navigate('Payment');
        break;
      }
      case 'DASH': {
        NativeModules.PGNavigation.navigate('Dashboard', data);
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
    if (links.url) {
      const { url, query } = queryStr.parseUrl(links.url);
      const paths = url.split('/');
      if (url.includes('/Web/')) {
        query.uri =  paths.pop();
      }
      this.openURL(upperCase(paths.pop()), query);
    }
  }
}

export default new UI();
