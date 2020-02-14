import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { CompatNavigationProp } from '@react-navigation/compat';
import { WebView } from 'react-native-webview';

interface WebScreenProps {
  route: {
    params: {
      uri: string
    }
  },
}

export default class WebScreen extends Component<WebScreenProps> {
  constructor(props: WebScreenProps) {
    super(props);
  }
  render() {
    const { route: { params } } = this.props;
    return (
      <View style={{flex: 1}}>
        <Text>Params:</Text>
        <Text>{JSON.stringify(this.props.route)}</Text>
        <WebView style={styles.root}
          source={{ uri: decodeURIComponent(params.uri) }}
          />
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
