import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import axios from 'axios';

import { Dropdown, LabeledInput, FileUploader, LocationCard } from '../components';
import { BASE_URL } from '../../environment.js';

class FormScreen extends Component {
  static navigationOptions = {
    title: 'Denúncia'
  }

	state = {
		items: [
			{
				text: 'Consumidor'
			},
			{
				text: 'Criminal'
			},
			{
				text: 'Educação'
			},
			{
				text: 'Idoso',
			},
			{
				text: 'Meio Ambiente',
			},
			{
				text: 'Patrimônio Público',
			},
			{
				text: 'Saúde',
			}
    ],
    filepath: null,
    snackbarVisible: false,
    message: '',
		formData: {
			categoria: '',
			descricao: '',
		}
  }

	updateLocation = (location) => {
		const { formData } = this.state;
		this.setState({ formData: { ...formData, local: location } });
	}

	updateDescricao = (text) => {
		const { formData } = this.state;
		this.setState({ formData: { ...formData, descricao: text }});
	}

  onError = (error) => {
    this.setState({ message: error, snackbarVisible: true });
  }
  
  onSend = () => {
    const { formData } = this.state;
		const { categoria, descricao } = formData;
		console.log(formData);
		if (categoria === '') {
			this.setState({ message: 'Por favor, selecione uma categoria.', snackbarVisible: true });
			return;
		}

		if (descricao === '') {
			this.setState({ message: 'Por favor, escreva uma descrição breve da ocorrência', snackbarVisible: true });
			return;
		}
		axios.post('https://204cfe6f.ngrok.io', formData).then((response) => {
			console.log(response);
		}).catch((error) => {
			console.log(error);
		});
  }

  render() {
    const { navigation } = this.props;
    const { message, items, snackbarVisible, formData } = this.state;

		const location = navigation.getParam('location', null);

    return (    
        <View style={styles.container}>
          <ScrollView style={styles.content}>
            <LabeledInput label="Categorias">
              <View style={styles.category}>
                <Dropdown 
                    items={items}
                    onSelect={(index) => 
												this.setState({ formData: { ...formData, categoria: items[index] }})
										}
                />
              </View>
            </LabeledInput>
            <LabeledInput label="Descrição">
              <TextInput 
                style={{ height: 150 }}
                mode='outlined'
                multiline 
                numberOfLines={5}
								onChangeText={this.updateDescricao}
              />
            </LabeledInput>
            <LabeledInput label="Media">
              <FileUploader/>
            </LabeledInput>
            <LabeledInput label="Localização">
              <LocationCard 
								location={location}
                navigation={navigation}
								onLocationChanged={this.updateLocation}
              />
            </LabeledInput>
						<View style={styles.spacing}/>
          </ScrollView>
          <Button
            mode='outlined'
            onPress={this.onSend}
          >
            Enviar
          </Button>
          <Snackbar
            visible={snackbarVisible}
						onDismiss={() => this.setState({ snackbarVisible: false })}
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
	spacing: {
		height: 30,
	},
  category: {
    alignItems: 'stretch',
  },
});

export { FormScreen };
