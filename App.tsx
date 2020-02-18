import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationService from './src/utils/NavigationService';
import HomeScreen from './src/components/HomeScreen';
import WebScreen from './src/components/WebScreen';
import ListScreen from './src/components/ListScreen';
import { firebase } from '@react-native-firebase/dynamic-links';
import UI from './src/utils/UI';

const AppStack = createStackNavigator();

export default function App() {
  React.useEffect(() => {
    const unsubscribe = firebase.dynamicLinks().onLink(UI.parserUrl);
    // When the is component unmounted, remove the listener
    return () => unsubscribe();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer ref={navigationRef => {
          NavigationService.setTopLevelNavigator(navigationRef)
        }}>
        <AppStack.Navigator headerMode='none' initialRouteName="Home">
          <AppStack.Screen name="Home" component={HomeScreen}/>
          <AppStack.Screen name="Web" component={WebScreen}/>
          <AppStack.Screen name="List" component={ListScreen}/>
        </AppStack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}