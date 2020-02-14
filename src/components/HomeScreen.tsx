import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
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
