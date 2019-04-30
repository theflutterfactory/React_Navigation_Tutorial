import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from '../styles/styles.js'

class Feed extends Component {

  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Feed with Navigation Drawer</Text>
        <Button
          title='Feed Item'
          onPress={() => this.props.navigation.navigate('DetailRoute')}
        />
      </View>
    );
  }
}

export default Feed;