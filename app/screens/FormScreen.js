import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from 'react-native-ui-kitten';

class FormScreen extends Component {
  static navigationOptions = {
    title: 'Denuncia'
  }

  render() {
    return (    
        <Layout style={styles.container}>
            <Text>Form Screen</Text>
        </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export { FormScreen };