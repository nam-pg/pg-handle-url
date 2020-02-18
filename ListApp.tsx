import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationService from './src/utils/NavigationService';
import ListScreen from './src/components/ListScreen';

const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef => {
      NavigationService.setTopLevelNavigator(navigationRef)
    }}>
      <AppStack.Navigator headerMode='none'>
        <AppStack.Screen name="List" component={ListScreen}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}


