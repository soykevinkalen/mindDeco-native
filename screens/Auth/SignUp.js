import React, { useRef, useState } from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView, Modal, Pressable, Platform, TouchableHighlight, ImageBackground, Dimensions } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { connect } from 'react-redux';

import Back from '../utilities/Back'

import authActions from '../../redux/actions/authActions'

const windowHeight = Dimensions.get('window').height;

const SignUp = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    const provincias = ['Santa Fe', 'Cordoba', 'Neuquen', 'Buenos Aires', 'Mendoza'];

    const [newUser, setNewUser] = useState({
        nombre: '',
		apellido: '',
		email: '',
		provincia: '',
		contraseña: ''
    })

    const [errors,  setErrors] = useState({
		nombre: '',
		apellido: '',
		email: '',
		contraseña: ''
	});

    const handleUserData = (field, value) => {
		setNewUser({
			...newUser,
			[field] : value
		})
	}

    const sendData = async () => {
		if(!Object.values(newUser).some(value => value === '')) {
			const response = await props.newUser(newUser)

			let campos = {
				nombre: '',
                apellido: '',
                email: '',
                provincia: '',
                contraseña: ''
			}

            response ? setErrors(campos) : setNewUser(campos)
			
			response && response.details.map(err => setErrors(prevState => {
				return {...prevState, [err.context.label]: err.message}
			}))
			
		} else {
			alert('Todos los campos son obligatorios')
		}
	}
	
    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }

    return (
        <>  
            <ImageBackground style={styles.mainContainer} source={{
                uri: 'https://i.pinimg.com/564x/1b/c9/51/1bc951be50aea8d66312a95db3561637.jpg'
            }}>
                <Back navigateTo='signin' color="white" />
                <View style={styles.subContainer}>
                    <Text style={styles.title}>Un paso más para ser un Deco <Text style={styles.titleSecText}>Expert.</Text></Text>
                    <View>
                        
                        <View style={styles.flexInputsContainer}>
                            <View style={styles.flexInputsWidth50}>
                                <Text style={styles.text}>Nombre</Text>
                                <TextInput style={styles.input} placeholder="Ingresa tu nombre" onChangeText={ (e) => handleUserData('firstName', e) }></TextInput>
                                <Text style={styles.errors}>{errors.nombre !== '' && 'Nombre invalido' }</Text>
                            </View>
                            <View style={styles.flexInputsWidth50}>
                                <Text style={styles.text}>Apellido</Text>
                                <TextInput style={styles.input} placeholder="Ingresa tu apellido" onChangeText={ (e) => handleUserData('lastName', e) }></TextInput>
                                <Text style={styles.errors}>{errors.apellido !== '' && 'Apellido invalido' }</Text>
                            </View>
                        </View>
                        
                        <Text style={styles.text}>Email</Text>
                        <TextInput style={styles.input} placeholder="Ingresa tu correo" onChangeText={ (e) => handleUserData('email', e) }></TextInput>
                        <Text style={styles.errors}>{errors.email !== '' && 'Email invalido' }</Text>

                        <View style={styles.flexInputsContainer}>
                            <View style={styles.flexInputsWidth50}>
                                <Text style={styles.text}>Contraseña</Text>
                                <TextInput style={styles.input} secureTextEntry={true} placeholder="Ingresa tu contraseña" onChangeText={ (e) => handleUserData('password', e) } ></TextInput>
                                <Text style={styles.errors}>{errors.contraseña !== '' && 'Clave invalida' }</Text>
                            </View>
                            <View style={styles.flexInputsWidth50}>
                                
                                <View style={styles.centeredView}>
                                    <Modal
                                        
                                        animationType="slide"
                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => {setModalVisible(!modalVisible)}}
                                    >
                                        <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                            <View style={styles.pickerContainer}>
                                                <Text>Elegi tu provincia</Text>
                                                <Picker 
                                                        mode="dropdown"
                                                        style={styles.picker} 
                                                        ref={pickerRef}
                                                        selectedValue={newUser.provincia}
                                                        
                                                        onValueChange={itemValue => setNewUser({
                                                            ...newUser,
                                                            provincia: itemValue
                                                            })}>
                                                            {
                                                            provincias.map((provincia, index) => {
                                                                    return <Picker.Item style={styles.pickerItem} key={index} label={provincia} value={provincia} />
                                                            }) 
                                                            }
                                                </Picker>
                                            </View>

                                            <Pressable
                                            style={[styles.btnConfirm]}
                                            onPress={() => setModalVisible(!modalVisible)}
                                            >
                                            <Text style={styles.btnCountryConfirm}>Confirmar</Text>
                                            </Pressable>
                                        </View>
                                        </View>
                                    </Modal>
                                    <Pressable
                                        style={styles.btnCountry}
                                        onPress={() => setModalVisible(true)}
                                    >
                                        <Text style={[styles.btnCountryText]}>{newUser.provincia === '' ? 'Provincia' : newUser.provincia}</Text>
                                    </Pressable>
                                </View> 
                                
                            </View>
                        </View>

                    </View>
                    <TouchableHighlight onPress={ sendData }>
                        <View style={styles.btnContainer}>
                            <View style={[styles.accessEmailBtn, styles.signIn]}>
                                <Text style={[styles.textEmail, styles.textSignIn]}> Crear cuenta </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ sendData }>
                        <View style={styles.btnContainer}>
                            <View style={[styles.accessEmailBtn, styles.signIn]}>
                                <Text style={[styles.textEmail, styles.textSignIn]}> Crear cuenta con Google </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        </>
    )
}



const mapStateToProps = state => {
	return{
		userLogged: state.authReducer.userLogged
	}
}

const mapDispatchToProps = {
	newUser: authActions.newUser
}

const styles = StyleSheet.create({
    subContainer: {
        padding: 20
    },
    pickerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    picker: {
        width: 160,
        color:'#191D1F',
        height: 20,
        ...Platform.select({
            ios: {
                marginBottom: 100
            },
            android: {
                marginBottom: 0,
                marginTop: 10
            }
        })
    },
    btnCountry: {
        backgroundColor: '#cecece',
        marginVertical: 4,
        padding: 6,
        marginTop: 6,
        borderWidth: 2,
        borderColor: '#cecece',
        borderRadius: 4,
        width: '100%',
        marginBottom: 3
    },
    btnCountryText: {
        fontWeight: 'bold'
    },
    btnConfirm: {
        backgroundColor: '#191D1F',
        padding: 10,
        borderRadius: 4,
        width: 90,
        alignItems: 'center',
        marginTop: 50
    },
    btnCountryConfirm: {
        color: 'white'
    },
    flexInputsWidth50: {
        width: '49%'
    },
    flexInputsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    mainContainer: {
        minHeight: windowHeight,
        width: '100%'
    },
    errors: {
        color: '#FF603F',
        marginBottom: 10
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 20
    },
    titleSecText: {
        color: '#C9B687',
        fontSize: 32
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#cecece',
        marginVertical: 5,
        padding: 6,
        paddingLeft: 10,
        borderWidth: 2,
        borderColor: '#cecece',
        borderRadius: 4
    },
    inputPicker: {
        backgroundColor: '#cecece',
        marginVertical: 5,
        borderColor: '#cecece',
        borderRadius: 4
    },
    textEmail: {
        fontWeight: 'bold'
    },
    signIn: {
        backgroundColor: '#00000099',
    },
    textSignIn: {
        color: 'white'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    modalView: {
        width: '65%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 6,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
    },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    accessEmailBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 14,
        marginVertical: 6
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);