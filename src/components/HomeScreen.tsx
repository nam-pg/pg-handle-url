import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import UI from '../utils/UI';

interface HomeScreenProps {
  route: {
    params: {
      name: string
    }
  },
}

export default class HomeScreen extends Component<HomeScreenProps> {
  constructor(props: HomeScreenProps) {
    super(props);
  }

  componentDidMount(){
    this.handleUrl();
  }

  handleUrl = () => {
    const { route: { params } } = this.props;
    if (params instanceof Object && params.name) {
      UI.openURL(params.name, {});
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={{padding: 20}}>Home Screen(RN)</Text>
        <TouchableOpacity
        onPress={() => {
          UI.openURL('PAYMENT', {});
        }}>
          <Text>Open Native screen</Text>
        </TouchableOpacity>
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
