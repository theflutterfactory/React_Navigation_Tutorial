import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/styles.js'

class Detail extends Component {

  static navigationOptions = {
    headerTitle: 'Detail'
  };

  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Detail Screen in Stack Navigator</Text>
      </View>
    );
  }
}

export default Detail;