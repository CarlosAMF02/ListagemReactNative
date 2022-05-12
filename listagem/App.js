import React from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import dados from './data/produtos.json'

import Produto from './components/Produto'

export default class App extends React.Component {

  state = {
    produtoSelecionado: null
  }

  render() {
    return (
      <View>
        {this.state.produtoSelecionado == null && (
          <FlatList
            data={dados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Produto onPress={(produto) => this.setState({ produtoSelecionado: produto })} item={item} />
            )} 
          />
        )}
        {this.state.produtoSelecionado != null && (
          <View>
            <Image 
              source={{uri : this.state.produtoSelecionado.imagem}} 
              style={estilos.imagem}/>
            <TouchableOpacity onPress={()=> this.setState({produtoSelecionado : null})}>Fechar (x)</TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}

const estilos = StyleSheet.create({
  imagem : {
    alignSelf : 'center',
    height : 200,
    width : 200
    
  }
})