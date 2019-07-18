import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Menu } from 'react-native-paper';

class FormScreen extends Component {
  static navigationOptions = {
    title: 'Denuncia'
  }

	state = {
		items: [
			{
				text: 'obra irregular'
			},
			{
				text: 'lixo em local inapropriado'
			},
			{
				text: 'saude'
			}
		]
	}

  render() {
    const { items } = this.props;

    return (    
        <View style={styles.container}>
            <View style={styles.categoryRow}>
                <Text
                    style={styles.catergoryLabel}
                >
                    Categorias: 
                </Text>
								<Menu 
								>
                  {items.map((item) => {

                  })}
								</Menu>
            </View>
        </View>
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
  categoryRow: {
    flex: 1,
    flexDirection: 'row',
  },
  catergoryLabel: {
    padding: 8,
  }
})

export { FormScreen };
