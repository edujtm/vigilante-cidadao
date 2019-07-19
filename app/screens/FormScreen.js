import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';

import { Dropdown, LabeledInput, FileUploader, LocationCard } from '../components';

import { BASE_URL } from '../../environment.js';

class FormScreen extends Component {
  static navigationOptions = {
    title: 'Denúncia'
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
    ],
    filepath: null,
    snackbarVisible: false,
    message: '',
  }

  onError = (error) => {
    this.setState({ message: error, snackbarVisible: true });
  }
  
  onSend = () => {
    const { filepath } = this.props;
    if (filepath) {
      console.log(filepath);
    }
  }

  render() {
<<<<<<< HEAD
    const { items, snackbarVisible } = this.state;
=======
    const { items, message, snackbarVisible } = this.state;
>>>>>>> d1c9c9d259c9dbab1daceaa9cecc4c75a48363bb

    return (    
        <View style={styles.container}>
          <ScrollView style={styles.content}>
            <LabeledInput label="Categorias">
              <View style={styles.category}>
                <Dropdown 
                    items={items}
                    onSelect={(index) => console.log(items[index])}
                />
              </View>
            </LabeledInput>
            <LabeledInput label="Descrição">
              <TextInput 
                style={{ height: 150 }}
                mode='outlined'
                multiline 
                numberOfLines={5}
              />
            </LabeledInput>
            <LabeledInput label="Media">
              <FileUploader/>
            </LabeledInput>
            <LabeledInput label="Localização">
              <LocationCard />
            </LabeledInput>
          </ScrollView>
          <Button
            mode='outlined'
            onPress={this.onSend}
          >
            Enviar
          </Button>
          {/* <Snackbar
            visible={snackbarVisible}
          >
            oi
          </Snackbar> */}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  category: {
    alignItems: 'stretch',
  },
});

export { FormScreen };
