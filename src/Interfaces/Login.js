import React, { Component, useState } from 'react';
import firebase from '../firebase'
import { KeyboardAvoidingView, View, ImageBackground, Alert, StyleSheet, Dimensions, TextInput, TouchableOpacity, Text } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')
export default class Interfaces extends Component {

    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    loginPress = (email, password) => {
        if (email != "" && password != "")
            try {
                firebase.auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(() => this.props.navigation.navigate('Main'))
                    .catch((e) => {
                        var errorMessage = e.message
                        if (errorMessage === 'The password is invalid or the user does not have a password.') console.log('Senha invalida')
                        console.log(e.message)
                        // if(e.message)
                        Alert.alert('Erro', 'A senha é inválida ou o usuário não cadastrado!')
                    })
            } catch (e) {
                console.log(e)

            }
        else Alert.alert('Atenção', 'Usuário e senha são campos obrigatórios')
    }
    render() {
        return (
            <ImageBackground source={require('../assets/background.jpg')} style={styles.bg}>
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <View style={styles.viewInputs}>
                        <Text style={styles.txt}>Entre!</Text>
                        <TextInput style={styles.input}
                            keyboardType='email-address'
                            autoCapitalize='none'
                            placeholder=
                            'Email'
                            onChangeText={
                                (email) => {
                                    this.setState({ email: email })
                                }} >
                        </TextInput>
                        <TextInput style={styles.input}
                            placeholder=
                            'Senha'
                            onChangeText={(password) => {
                                this.setState({ password: password })
                            }}
                            secureTextEntry={true} >
                        </TextInput>
                    </View>

                    <View style={styles.viewButtons}>
                        <TouchableOpacity style={styles.btn}
                            onPress={() => this.loginPress(this.state.email,
                                this.state.password)} >
                            <Text style={styles.btnTxt}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}
                            onPress={() => {
                                this.props.navigation.navigate("Register")
                            }} >
                            <Text style={styles.btnTxt}>Cadastro</Text>
                        </TouchableOpacity>
                    </View>
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
        ,
    },
    viewInputs: {
        paddingTop: 40,
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
        backgroundColor: 'rgba(34,223,34, 1)',
        color: 'white'
    },
    btnTxt: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    txt:{
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textShadowColor: 'black'
    }
})
