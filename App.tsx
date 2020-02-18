import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { NavigationContainer, useLinking } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationService from './src/utils/NavigationService';
import HomeScreen from './src/components/HomeScreen';
import WebScreen from './src/components/WebScreen';
import ListScreen from './src/components/ListScreen';

const AppStack = createStackNavigator();

export default function App() {
  const ref = React.useRef();

  const { getInitialState } = useLinking(ref, {
    prefixes: ['https://nam-pg.github.io', 'nam-pg://'],
    config: {
      Home: {
        path: 'Home/:name'
      },
      Web: {
        path: 'Web/:uri'
      }
    }
  });

  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    getInitialState()
      .catch(() => {})
      .then(state => {
        if (state !== undefined) {
          setInitialState(state);
        }
        setIsReady(true);
      });
  }, [getInitialState]);

  if (!isReady) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer initialState={initialState} ref={navigationRef => {
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


