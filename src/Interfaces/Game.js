import React, { Component } from 'react';

import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

// import { Container } from './styles';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default class Interfaces extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jogo: {}
        }
    }

    static navigationOptions = {
        title: 'Resultado',
        headerStyle: {
            backgroundColor: '#F8F220'
        },
        headerTintColor: '#22DF22',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }

    componentDidMount() {
        this.setState({ jogo: this.props.navigation.getParam('item', { id: 'erro ao selecionar item' }) })
    }
    dinamicImg(img) {
        switch (img) {
            case 'brasil':
                return require('../assets/brasil.png')
            case 'bolivia':
                return require('../assets/bolivia.png')
            case 'argentina':
                return require('../assets/argentina.png')
            case 'peru':
                return require('../assets/peru.png')
            case 'venezuela':
                return require('../assets/venezuela.png')
            case 'paraguai':
                return require('../assets/paraguai.png')
            default:
                return null
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewInputs}>
                    <View style={styles.card}>
                        <View style={styles.bandeiras}>
                            <View style={styles.column}>
                                <Image style={styles.bandeira} source={this.dinamicImg(this.state.jogo.img1)} />
                                <Text> {this.state.jogo.casa} </Text>
                                {this.state.jogo.resultadoP1
                                    ? <Text style={styles.resultado}>{this.state.jogo.resultado1} ({this.state.jogo.resultadoP1})</Text>
                                    : <Text style={styles.resultado}>{this.state.jogo.resultado1} </Text>}
                            </View>
                            <View style={styles.column}>
                                <Image style={styles.x} source={require('../assets/x.png')} />
                            </View>
                            <View style={styles.column}>
                                <Image style={styles.bandeira} source={this.dinamicImg(this.state.jogo.img2)} />
                                <Text> {this.state.jogo.visitante} </Text>
                                {this.state.jogo.resultadoP2
                                    ? <Text style={styles.resultado}>{this.state.jogo.resultado2} ({this.state.jogo.resultadoP2})</Text>
                                    : <Text style={styles.resultado}>{this.state.jogo.resultado2} </Text>}
                            </View>

                        </View>
                        <View style={styles.resultados}>



                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bg: {
        flex: 1,
        width: null,
        height: null,
    },
    container: {
        flex: 1,
    },
    viewButtons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
        ,
    },
    viewInputs: {
        paddingTop: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: WIDTH - 66,
        height: 45,
        borderRadius: 25,
        paddingLeft: 45,
        marginVertical: 5,
        backgroundColor: 'transparent'
        ,
        borderColor: 'rgba(34,223,34, 0.6)',
        borderWidth: 2,
        color: 'green'
        ,
        fontSize: 14,
        fontWeight: 'bold'
        ,
    },
    btn: {
        alignItems: "center",
        justifyContent: "center",
        width: 120,
        height: 45,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'blue',
        marginTop: 36,
        margin: 12,
        backgroundColor: 'rgba(34,223,34, 0.8)',
        color: 'white'
    },
    btnTxt: {
        color: 'white'
        ,
        fontSize: 18,
        fontWeight: 'bold'
        ,
        textAlign: 'center'
    },
    card: {
        margin: 15,
        padding: 15,
        backgroundColor: '#fff',
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 6,
        width: WIDTH - 30
    },
    bandeiras: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    bandeira: {
        display: 'flex',
        height: 50,
        width: 75,
        marginBottom: 15
    },
    x: {
        height: 10,
        width: 10,
        marginTop: 110
    },
    resultados: {
        flexDirection: 'row',
        paddingTop: 15,
        justifyContent: 'space-between',
        alignItems: "center",
        paddingRight: 78,
        paddingLeft: 78
    },
    resultado: {
        fontSize: 25,
        marginTop: 20
    },
    column: {
        justifyContent: "center",
        alignItems: "center",
        height: 200
    }
})
