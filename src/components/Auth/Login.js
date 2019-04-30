import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from '../../styles/styles.js'

class Login extends Component {

  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Coding with Curry</Text>
        <Button
          title='Login'
          onPress={() => this.props.navigation.navigate('App')}
        />
      </View>
    );
  }
}

export default Login;