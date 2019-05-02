import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/styles.js'

class Tab2 extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Tab 2</Text>
      </View>
    );
  }
}

export default Tab2;