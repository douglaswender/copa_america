import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// import { Container } from './styles';


export default class src extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idade: 22,
            nome: "Douglas Wender",
            profissao: "Desenvolvedor",
            isPress: false
        }
    }
    troca = () => {
        this.setState({ isPress: true })
    }
    componentDidMount() {
        this.setState(this.props.state)
    }
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.txtBotao}>
                Olá {this.state.profissao}
                {this.state.isPress && this.state.nome}
            </Text>
            <TextInput onChangeText={(text) => {
                this.setState({ nome: text, isPress: false })
            }} style={styles.input} />
            <Button title='Troca' onPress={this.troca} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
        ,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        color: 'black'
        ,
        fontSize: 24
    },
    input: {
        width: 120,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#000000'
    },
});
