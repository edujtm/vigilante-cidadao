import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const LEARN_IMG = require('../../assets/learn.jpg');

class LearnScreen extends Component {
  static navigationOptions = {
    title: 'Aprenda'
  }

  render() {
    return (
      <View style={styles.container}>
				<Image 
					style={{ width: 240, height: 150 }}
					source={LEARN_IMG}
				/>
        <Text style={styles.text}>Aprenda como fazer uma denúncia de forma efetiva</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
	text: {
		marginTop: 20,
		fontWeight: '600',
		width: 300,
		fontSize: 16,
		textAlign: 'center',
	}
})

export { LearnScreen };
