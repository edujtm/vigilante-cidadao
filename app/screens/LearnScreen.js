import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class LearnScreen extends Component {
  static navigationOptions = {
    title: 'Aprenda'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Learn Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export { LearnScreen };