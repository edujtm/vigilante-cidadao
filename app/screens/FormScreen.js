import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';

import { Dropdown, LabeledInput, FileUploader } from '../components';

import { BASE_URL } from '../../environment.js';

class FormScreen extends Component {
  static navigationOptions = {
    title: 'Denuncia'
  }

  // Isso daqui vai ser obtido da api
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
    snackbarVisible: true
  }
  
  constructor(props) {
    super(props);
  }

  onSend = () => {
    const { filepath } = this.props;
    if (filepath) {
      console.log(filepath);
    }
  }

  render() {
    const { items } = this.state;

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
            <LabeledInput label="Documentos">
              <FileUploader/>
            </LabeledInput>
          </ScrollView>
          <Button
            mode='outlined'
            onPress={this.onSend}
          >
            Enviar
          </Button>
          <Snackbar
            visible={this.state.snackbarVisible}
          >
            oi
          </Snackbar>
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
