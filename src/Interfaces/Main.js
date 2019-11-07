import React, { Component } from 'react';
const db = require('../db.json');
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

export default class Interfaces extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jogos: []
        }
    }
    componentDidMount() {
        this.setState({ jogos: db.Jogos })
    }

    renderJogos = ({ item }) => (
        <View style={styles.jogosContainer}>
            <Text style={styles.adv}>
                Adversário: {item.adversario}
            </Text>
            <Text style={styles.jogo}>
                Jogo: {item.status}
            </Text>
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    this.props.navigation.navigate('Game', {item: item})
                }}>
                <Text style={styles.txtButton}>
                    Ver mais</Text>
            </TouchableOpacity>
        </View>
    )
    static navigationOptions = {
        title: 'Main',
        headerLeft: null,
        headerStyle: {
            backgroundColor: '#F8F220'
        },
        headerTintColor: '#22DF22',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
    render() {
        return (
            <View>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.jogos}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderJogos}
                />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DFDFD9',
        flex: 1
    },
    list: {
        padding: 12,
    },
    jogosContainer: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'blue', // alterar
        borderRadius: 6,
        padding: 16,
        marginBottom: 10
    },
    adv: {
        fontSize: 22,
        fontWeight: "bold"
        ,
        paddingBottom: 6,
        color: "black"
    }, jogo: {
        fontSize: 18,
        color: "green"
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        height: 45,
        borderRadius: 5,
        borderColor: '#22DF22',
        borderWidth: 3,
        backgroundColor: '#F8F220'
    },
    txtButton: {
        fontSize: 18,
        fontWeight: "bold"
        ,
        color: "#22DF22"
    },
})