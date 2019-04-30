import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/styles.js'

class Detail extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text>Detail Screen in Stack Navigator</Text>
      </View>
    );
  }
}

export default Detail;