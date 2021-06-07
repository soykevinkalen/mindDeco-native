import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TextInput, Dimensions, TouchableHighlight, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import { connect } from 'react-redux';
import * as Google from "expo-google-app-auth";

import Toast from 'react-native-toast-message';

import Back from '../utilities/Back'

import authActions from '../../redux/actions/authActions'
import { useNavigation } from '@react-navigation/core';

const windowHeight = Dimensions.get('window').height;

const SignIn = (props) => {
    const navigation = useNavigation();

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user;

    const saveUser = (field, value) => {
        setUser({
            ...user,
            [field] : value
        })
    }

    const registerGoogle = async () => {

        try {
            const { type, user } = await Google.logInAsync({
                iosClientId: "687710738267-g3hisgph5mjb4pvdm0o8g863korgefk9.apps.googleusercontent.com",
                androidClientId: "687710738267-a2tg95hcdhuv1v0kig9vife0h5de226r.apps.googleusercontent.com",
          });
    
            if (type === "success") {
                await props.logInUser({email: user.email, password: 'a'+user.id})
            
            }
        } catch (error) {
            Toast.show({
                text1: 'Oops!',
                text2: 'Error interno del servidor, intenta más tarde por favor',
                type: 'error'
            });
        }
    }

    const sendData = async () => {
        if(!Object.values(user).some(value => !value)) {
            const response = await props.logInUser(user)
            if(!response) {
                setUser({
                    email: '',
                    password: ''
                })
            } else { 
                Toast.show({
                    text1: 'Oops!',
                    text2: 'Error interno del servidor, intenta más tarde por favor',
                    type: 'error'
                });
            }
        } else {
            Toast.show({
                text1: 'Oops!',
                text2: 'Todos los campos son obligatorios',
                type: 'error'
            });
        }
    }
    

    return (
        <>  
            
            <ImageBackground style={styles.mainContainer} source={{
                uri: 'https://i.pinimg.com/564x/26/2c/b2/262cb2fc860cbef2935bf3e394b0588f.jpg'
            }}>
                <Back navigateTo='access' color='white' />

                <View style={styles.subContainer}>
                    <Text style={styles.title}>Bienvenido de nuevo!</Text>
                    <View>
                        
                        <Text style={styles.text}>Email</Text>
                        <TextInput style={styles.input} placeholder="Ingresa tu email" value={email} onChangeText={ (e) => saveUser('email', e) }></TextInput>

                        <Text style={styles.text}>Contraseña</Text>
                        <TextInput style={styles.input} secureTextEntry={true} placeholder="Ingresa tu contraseña" value={password} onChangeText={ (e) => saveUser('password', e) } ></TextInput>

                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableWithoutFeedback onPress={ sendData }>
                            <View style={[styles.accessEmailBtn, styles.signIn]}>
                                <Text style={[styles.textEmail, styles.textSignIn]}>Ingresar</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        {/* <TouchableWithoutFeedback onPress={ registerGoogle }>
                            <View style={[styles.accessEmailBtn, styles.signIn]}>
                                <Text style={[styles.textEmail, styles.textSignIn]}>Ingresar con Google</Text>
                            </View>
                        </TouchableWithoutFeedback> */}
                        <TouchableWithoutFeedback onPress={ () => navigation.navigate('signup')}>
                            <View style={styles.accessEmailBtn}>
                                <Text style={styles.textEmail}>No tengo cuenta aún</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </ImageBackground>
        
        </>
    )
}


const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    logInUser: authActions.logInUser
}

const styles = StyleSheet.create({
    subContainer: {
        padding: 20
    },
    btnContainer: {
        marginTop: 10
    },
    mainContainer: {
        minHeight: windowHeight,
        width: '100%'
    },
    errors: {
        color: '#FF603F'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 30
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#cccccc',
        marginVertical: 5,
        padding: 6,
        borderWidth: 2,
        borderColor: '#cecece',
        borderRadius: 4,
        marginBottom: 20
    },
    accessEmailBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#00000099',
        padding: 14,
        marginVertical: 6
    },
    textEmail: {
        color: 'white',
        fontWeight: 'bold'
    },
    signIn: {
        backgroundColor: '#00000099'
    },
    textSignIn: {
        color: 'white'
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);