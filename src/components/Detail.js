import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from '../styles/styles.js'

class Detail extends Component {

  static navigationOptions = {
    headerTitle: 'Detail'
  };

  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Detail Screen in Stack Navigator</Text>
        <Button
          title='View TabbedScreen'
          onPress={() => this.props.navigation.navigate('TabRoute')}
        />
      </View>
    );
  }
}

export default Detail;