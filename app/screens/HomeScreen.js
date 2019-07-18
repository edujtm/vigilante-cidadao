import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Layout } from 'react-native-ui-kitten';

const HomeScreen = (props) => {
  const { navigation } = props;

  return (    
      <Layout style={styles.container}>
        <View style={styles.expand}/>
        <Button 
          style={styles.button}
          textStyle={styles.buttonText}
          appearance='outline'
          onPress={() => navigation.navigate('form')}
        >
            Denuncie
        </Button>
      </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'red',
    marginBottom: 16,
  },
  buttonText: {
    color: 'red',
  },
  expand: {
    flex: 1,
  }
});

export { HomeScreen };