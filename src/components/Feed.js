import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from '../styles/styles.js';

class Feed extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text>Feed with Navigation Drawer</Text>
        <Button title='Feed Item' />
      </View>
    );
  }
}

export default Feed;