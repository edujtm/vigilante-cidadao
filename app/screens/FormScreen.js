import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import Uppy from '@uppy/core';
import Aws3 from '@uppy/aws-s3-multipart';

import { Dropdown, LabeledInput } from '../components';

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
  }
  
  constructor(props) {
    super(props);
    this.uppy = Uppy({ debug: false, autoProceed: false })
      .use(Aws3, { companionUrl: BASE_URL });

    this.uppy.on('upload-progress', () => {
      console.log('Upload complete');
    });

    this.uppy.on('complete', (result) => {
      this.setState({
        message: 'Envio finalizado',
        snackbarVisible: true,
      })
    });
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
              <FileUploader uppy={this.uppy} />
            </LabeledInput>
          </ScrollView>
          <Button
            mode='outlined'
            onPress={this.onSend}
          >
            Enviar
          </Button>
          <Snackbar
            visible={snackbarVisible}
          >
            {message}
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
