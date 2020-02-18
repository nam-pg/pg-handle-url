import React, {Component,} from 'react';
import { View, StyleSheet, Text, AppRegistry } from 'react-native';

interface ListScreenProps {
  route: {
    params: {
      name: string
    }
  },
}

export default class ListScreen extends Component<ListScreenProps> {
  constructor(props: ListScreenProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={{padding: 20}}>List Screen(RN)</Text>
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

AppRegistry.registerComponent('ListApp', () => ListScreen);
