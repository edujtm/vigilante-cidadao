import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormScreen = () => {
    return (    
        <View style={styles.container}>
            <Text>Form Screen</Text>
        </View>
    );
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