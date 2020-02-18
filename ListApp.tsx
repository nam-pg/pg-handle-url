import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationService from './src/utils/NavigationService';
import ListScreen from './src/components/ListScreen';
import { Alert } from 'react-native';

const AppStack = createStackNavigator();

export default function App() {
  Alert.alert("lkjasldk", "asdasd");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer ref={navigationRef => {
          NavigationService.setTopLevelNavigator(navigationRef)
        }}>
        <AppStack.Navigator headerMode='none' initialRouteName="List">
          <AppStack.Screen name="List" component={ListScreen}/>
        </AppStack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}


