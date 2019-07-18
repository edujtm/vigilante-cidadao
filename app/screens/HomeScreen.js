import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const HomeScreen = (props) => {
  const { navigation } = props;

  return (    
      <View style={styles.container}>
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
      </View>
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