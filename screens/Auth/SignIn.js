import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Dimensions, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux';

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

    const sendData = async () => {
        if(!Object.values(user).some(value => !value)) {
            const response = await props.logUser(user)

            if(!response) {
                setUser({
                    email: '',
                    password: ''
                })
            } else { 
                alert(response)
            }
        } else {
            alert('All the fields are mandatory')
        }
    }
    

    return (
        <>  
            <Back navigateTo='access' />
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Welcome back.</Text>
                <View>
                    
                    <Text style={styles.text}>Email address</Text>
                    <TextInput style={styles.input} placeholder="Email address" value={email} onChangeText={ (e) => saveUser('email', e) }></TextInput>

                    <Text style={styles.text}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" value={password} onChangeText={ (e) => saveUser('password', e) } ></TextInput>
                    {/* <Text style={styles.errors}>Invalid password</Text> */}

                </View>
                <View style={styles.btnContainer}>
                    <TouchableHighlight onPress={ sendData }>
                        <View style={[styles.accessEmailBtn, styles.signIn]}>
                            <Text style={[styles.textEmail, styles.textSignIn]}>Sign in</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ () => navigation.navigate('signup')}>
                        <View style={styles.accessEmailBtn}>
                            <Text style={styles.textEmail}>Sign up</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </>
    )
}


const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    logUser: authActions.logUser
}

const styles = StyleSheet.create({
    btnContainer: {
        marginTop: 10
    },
    mainContainer: {
        backgroundColor: '#000115',
        minHeight: windowHeight,
        width: '100%',
        padding: 20
    },
    errors: {
        color: '#FF603F'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 30
    },
    text: {
        color: '#eeeeee',
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#cecece',
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
        borderWidth: 2,
        borderColor: 'white',
        padding: 14,
        borderRadius: 30,
        marginVertical: 6
    },
    textEmail: {
        color: 'white',
        fontWeight: 'bold'
    },
    signIn: {
        backgroundColor: 'white'
    },
    textSignIn: {
        color: 'black'
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);