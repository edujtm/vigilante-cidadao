import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Linking } from 'react-native';
import { TextInput, FAB, Snackbar, DefaultTheme } from 'react-native-paper';
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
		axios.post(`${BASE_URL}/denuncias`, formData).then((response) => {
			console.log(response);
			if (response.status === 200) {
			 	this.setState({ message: 'Denúncia feita com sucesso', snackbarVisible: true });
			} else if (response.status === 400) {
				this.setState({ message: 'Erro ao enviar dados para o servidor. Por favor, Tente aproximar sua localização.' })
			}
		}).catch((error) => {
			console.log(error);
			this.setState({ message: 'Erro ao enviar dados para o servidor. Por favor, Tente aproximar sua localização.', snackbarVisible: true });
		});
  }

  _handleMPLink = () => {
    Linking.openURL('http://www.mprn.mp.br/portal/');
  }

  render() {
    const { navigation } = this.props;
    const { message, items, snackbarVisible, formData } = this.state;

		const location = navigation.getParam('location', null);

    return (    
        <View style={styles.container}>
          <ScrollView style={styles.content}>
            <View style={styles.wrapperTitle}>
              <Text style={styles.title}>Faça sua denúncia!</Text>
              <Text style={styles.subtitle}>Sua denúncia será enviada para o <Text style={styles.external} onPress={this._handleMPLink}>Ministério Público do Rio Grande do Norte</Text>.</Text>
            </View>
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
          <View style={{ paddingHorizontal: 8, paddingVertical: 20 }}>
            <FAB
              style={styles.sendButton}
              icon="send"
              onPress={this.onSend}
            />
            <Snackbar
              style={styles.snackbar}
              visible={snackbarVisible}
              onDismiss={() => this.setState({ snackbarVisible: false })}
            >
            {message} 
            </Snackbar> 
          </View>
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
  wrapperTitle: {
    paddingHorizontal: 8
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 15
  },
  external: {
    fontWeight: 'bold',
    color: DefaultTheme.colors.primary
  },
  snackbar: {
    width: '100%'
  },
  sendButton: {
    position: 'absolute',
    right: 5,
    bottom: 10,
    backgroundColor: DefaultTheme.colors.primary
  }
});

export { FormScreen };
