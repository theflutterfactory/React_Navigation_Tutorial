import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/styles.js'

class Screen3 extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Screen 3</Text>
      </View>
    );
  }
}

export default Screen3;