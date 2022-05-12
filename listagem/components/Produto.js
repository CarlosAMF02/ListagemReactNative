import React from 'react'
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

    export default class Produto extends React.Component {
        render() {
            return (
                <TouchableOpacity 
                    onPress={() => {
                        if (typeof this.props.onPress === 'function') {
                            this.props.onPress( this.props.item )
                        }
                    }}
                    style={estilos.produto}>
                    <Image source={{uri : this.props.item.imagem}} style={estilos.imagem}/>
                    <View style={estilos.dados}>
                        <Text>Nome: {this.props.item.nome}</Text>
                        <Text>Descrição: {this.props.item.descricao}</Text>
                        <Text>Valor: {this.props.item.valor}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    const estilos = StyleSheet.create({
        imagem : {
            height : 80,
            width : 80
          },
          produto : {
            flexDirection : 'row',
            marginBottom : 8
          },
          dados : {
            padding : 8,
            width : 300
          }
    })