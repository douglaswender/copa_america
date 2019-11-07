import React, { Component, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, ImageBackground, TextInput, Text, Dimensions, TouchableOpacity, Alert } from 'react-native';
import firebase from '../firebase'
const { width: WIDTH } = Dimensions.get('window')

// import { Container } from './styles';

export default class Interfaces extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            senha: ''
        }
    }
    register = (email, senha) => {
        console.log(email, '=', senha)
        try {
            firebase.auth().createUserWithEmailAndPassword(email, senha).then((res) => {
                console.log(res);
                Alert.alert('Parabéns', 'Usuário criado com sucesso')
                setTimeout(() => this.props.navigation.navigate("Login"), 5000)

            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            })
        } catch (e) {
            console.log(e)
        }
    }
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <ImageBackground source={require('../assets/background.jpg')} style={styles.bg}>
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
                    <Text style={styles.welcome}>Registre-se</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="email"
                        onChangeText={
                            (email) => this.setState({ email })
                        }
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="senha"
                        onChangeText={
                            (senha) => this.setState({ senha })
                        }
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.btn}
                        onPress={() => {
                            this.register(this.state.email, this.state.senha)
                        }
                        } >
                        <Text style={styles.btnTxt}>Cadastre-se</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ImageBackground>

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
        justifyContent: "center",
        alignItems: "center",
    },
    viewButtons: {
        flex: 3,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
        ,
    },
    viewInputs: {
        paddingTop: 40,
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: WIDTH - 66,
        height: 45,
        borderRadius: 25,
        paddingLeft: 45,
        marginVertical: 5,
        backgroundColor: 'white',
        borderColor: 'rgba(34,223,34, 0.8)',
        borderWidth: 2,
        color: 'green',
        fontSize: 14,
        fontWeight: 'bold',
    },
    btn: {
        alignItems: "center",
        justifyContent: "center",
        width: 120,
        height: 45,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'blue',
        marginTop: 12,
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
    }
})
