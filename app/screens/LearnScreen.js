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
},
{
  title: 'O que pode ser denunciado?',
  text: `A seguir exemplos de algumas situações que podem ser noticiadas ao MP. Para conhecer mais a legislação visite: http://www4.planalto.gov.br/legislacao/

  Violação do direito do consumidor, em âmbito coletivo, procure as Promotorias de Justiça com atribuição na matéria, para que sejam tomadas as providências cabíveis.
  Exemplos:como no caso de uma propaganda enganosa publicada em jornais de grande circulação; os interesses coletivos, a exemplo de várias pessoas que assinam contratos de adesão de uma operadora de telefonia celular com cláusulas abusivas; e os individuais homogêneos, como no caso de consumidores que compram um tipo de carro com o mesmo defeito de fabricação.
  Para saber mais sobre o trabalho do MP na defesa dos direitos do consumidor acesse : http://rn.consumidorvencedor.mp.br
  
  Os cidadãos podem encaminhar informações em geral que possam levar à prisão de criminosos, denunciar atos de corrupção e crimes de qualquer natureza.
  A denúncia de crimes pode ser feita gratuitamente por e-mail: denuncia@mprn.mp.br, telefone 127, whatsapp (84) 98863-4585. No Whatsapp, como neste app, são aceitos textos, fotos, áudios e vídeos que possam comprovar as informações oferecidas.
  
  Violência na escola, más condições da estrutura física das escolas, falta de professores, falta de merenda escolar, problemas no transporte escolar, falta de políticas públicas voltadas para a educação e aplicação inadequada de verba.
  
  Ameaça ou violação aos direitos dos idosos por ação ou omissão da sociedade ou do Estado; por falta, omissão ou abuso da família, curador ou entidade de atendimento, em razão de sua condição pessoal.
  `
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
          <Text style={styles.text}>Aprenda como fazer uma denúncia de forma efetiva.</Text>
        </View>
        <List.Section style={styles.list}>
          {LEARN_ITEMS.map(item => (
            <List.Accordion
              theme={{ colors: { text: '#FFFF' } }}
              title={item.title}
              titleStyle={styles.listItemTitle}
              style={styles.listItem}
              key={item.title}
            >
              <Text style={styles.listItemContent}>
              {item.text}
              </Text>
            </List.Accordion>
          ))}
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
    backgroundColor: DefaultTheme.colors.primary,
    marginTop: 10
  },
  listItemTitle: {
    color: '#FFFF',
    fontSize: 17,
    fontWeight: 'bold',
    flexWrap: 'nowrap'
  },
  listItemContent: {
    padding: 15,
    color: '#262626',
    borderColor: DefaultTheme.colors.primary,
    borderWidth: 1,
    fontSize: 15,
    textAlign: 'justify'
  }
})

export { LearnScreen };
