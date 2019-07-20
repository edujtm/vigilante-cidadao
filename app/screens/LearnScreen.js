import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { Text, List, DefaultTheme } from 'react-native-paper';

const LEARN_IMG = require('../../assets/learn.jpg');

const LEARN_ITEMS = [
{
	title: 'Qual a diferença entre Denúncia, Queixa e Notícia-crime?',
	text: 'É a exposição do fato criminoso à polícia ou ao Ministério Público. Queixa-crime é a petição inicial para dar origem à ação penal privada, perante o juízo criminal, com o pedido de que o autor ou os autores do crime sejam processados e condenados. É necessário que o ofendido contrate um advogado ou procure a Defensoria Pública para que o procedimento seja iniciado. Denúncia é a petição inicial da ação penal pública. Por ser de interesse público, a denúncia é promovida necessariamente pelo Ministério Público.'
},
{
	title: 'Qual a diferença entre Ministério Público e Defensoria Pública?',
	text: 'A  Defensoria Pública (DP) é uma instituição permanente destinada à função social de dispor serviços jurídicos de orientação, assistência judicial e extrajudicial, integrais e gratuitas, a todos os cidadãos que não possuam recursos ou que comprovem sua vulnerabilidade financeira para a contratação de serviços advocatícios. O Ministério Público (MP) é instituição permanente, essencial à função jurisdicional do Estado, incumbindo-lhe a defesa da ordem jurídica, do regime democrático e dos interesses sociais e individuais indisponíveis (art. 127, da CF). Exemplo de algumas atribuições do MP são a atuação perante a Justiça Criminal, oferecendo denúncias contra autores de crimes e contravenções, e fiscalizando a execução das penas; a defesa dos direitos coletivos, relacionados à defesa da saúde, educação, pessoas com deficiência, consumidor, meio ambiente, patrimônio público, infância e juventude, idosos, cidadania, entre outros; atuação como fiscal da lei nos processos perante as varas judiciais; fiscalização da aplicação da legislação pertinente perante as Zonas Eleitorais.',
},
{
	title: 'Quais as áreas de atuação do MP?',
	text: 'Consumidor; Criminal; Educação; Idoso; Infância, juventude e família; Meio Ambienter; Patrimônio Público; Pessoa com deficiência; Saúde.'
}
];

class LearnScreen extends Component {
  static navigationOptions = {
    title: 'Aprenda'
	
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image 
            style={{ width: 240, height: 150 }}
            source={LEARN_IMG}
          />
          <Text style={styles.text}>Aprenda como fazer uma denúncia de forma efetiva</Text>
        </View>
        <List.Section style={styles.list}>
          {LEARN_ITEMS.map((item) => {
						<List.Accordion
							style={styles.listItem}
							left={() => <Text style={styles.listItemTitle}>{item.title}</Text>}
						>
							<Text style={styles.listItemContent}>
								{item.text}
							</Text>
						</List.Accordion>
					})}

        </List.Section>
      </ScrollView>
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
    borderColor: DefaultTheme.colors.primary,
    borderWidth: 1,
    paddingVertical: 10,
    textAlign: 'left'
  }
})

export { LearnScreen };
