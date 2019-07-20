import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, List, DefaultTheme } from 'react-native-paper';

const LEARN_IMG = require('../../assets/learn.jpg');

class LearnScreen extends Component {
  static navigationOptions = {
    title: 'Aprenda'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image 
            style={{ width: 240, height: 150 }}
            source={LEARN_IMG}
          />
          <Text style={styles.text}>Aprenda como fazer uma denúncia de forma efetiva</Text>
        </View>
        <List.Section style={styles.list}>
          <List.Accordion
            theme={{ colors: { text: '#FFFF' } }}
            title="Qual a diferença entre Denúncia, Queixa e Notícia-crime?"
            titleStyle={styles.listItemTitle}
            style={styles.listItem}
          >
            <Text style={styles.listItemContent}>
            É a exposição do fato criminoso à polícia ou ao Ministério Público.
            Queixa-crime é a petição inicial para dar origem à ação penal privada, perante o juízo criminal, com o pedido de que o autor ou os autores do crime sejam processados e condenados. É necessário que o ofendido contrate um advogado ou procure a Defensoria Pública para que o procedimento seja iniciado.
            Denúncia é a petição inicial da ação penal pública. Por ser de interesse público, a denúncia é promovida necessariamente pelo Ministério Público.
            </Text>
          </List.Accordion>
        </List.Section>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  imageContainer: {
    marginTop: 20,
    marginBottom: 15,
    alignItems: 'center'
  },
	text: {
		marginTop: 20,
		fontWeight: '600',
		width: 300,
		fontSize: 16,
		textAlign: 'center',
  },
  list: {
    flex: 1,
    width: '100%',
  },
  listItem: {
    backgroundColor: DefaultTheme.colors.primary
  },
  listItemTitle: {
    color: '#FFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  listItemContent: {
    padding: 15,
    color: '#262626',
    borderColor: DefaultTheme.colors.primary,
    borderWidth: 1,
    fontSize: 14,
    textAlign: 'justify'
  }
})

export { LearnScreen };
