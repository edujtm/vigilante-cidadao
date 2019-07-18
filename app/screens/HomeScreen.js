import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Layout } from 'react-native-ui-kitten';

const HomeScreen = (props) => {
  const { navigation } = props;

  return (    
      <Layout style={styles.container}>
        <Button 
          appearance='outline'
          onPress={() => navigation.navigate('form')}
        >
            Denuncie
        </Button>
        <Button 
          appearance='outline'
          onPress={() => navigation.navigate('learn')}
        >
          Aprenda
        </Button>
      </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'red',
  },
  expand: {
    flex: 1,
  }
});

export { HomeScreen };