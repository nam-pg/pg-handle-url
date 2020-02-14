import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface HomeScreenProps {
  route: {
    params: {
      id: string
    }
  },
}

export default class HomeScreen extends Component<HomeScreenProps> {
  constructor(props: HomeScreenProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.root}>
        <Text>Home Screen(RN)</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
