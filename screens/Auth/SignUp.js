import React, { useRef, useState } from 'react'
import { Text, View, StyleSheet, TextInput, Dimensions, ScrollView, Alert, Modal, Pressable, Platform, TouchableHighlight } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { connect } from 'react-redux';

import Back from '../utilities/Back'

import authActions from '../../redux/actions/authActions'
import { useNavigation } from '@react-navigation/core';

const windowHeight = Dimensions.get('window').height;

const SignUp = (props) => {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

    const countries = ['United States', 'Argentine', 'Chile', 'Mexico', 'Brazil', 'Canada', 'France', 'Spain', 'United Kingdom', 'Russia', 'New Zealand', 'Denmark'];

    const [newUser, setNewUser] = useState({
        firstName: '',
		lastName: '',
		email: '',
		urlPic: '',
		country: '',
		password: ''
    })

    const [errors,  setErrors] = useState({
		firstName: '',
		lastName: '',
		email: '',
		urlPic: '',
		password: ''
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

			let fields = {
				firstName: '',
				lastName: '',
				email: '',
				urlPic: '',
				country: '',
				password: ''
			}

            response ? setErrors(fields) : setNewUser(fields)
			
			response && response.details.map(err => setErrors(prevState => {
				return {...prevState, [err.context.label]: err.message}
			}))
			
		} else {
			alert('All the fields are mandatory')
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
            <Back navigateTo='signin' />
            <ScrollView style={styles.mainContainer}>
                <Text style={styles.title}>Became a MyTinerary member.</Text>
                <View>
                    
                    <View style={styles.flexInputsContainer}>
                        <View style={styles.flexInputsWidth50}>
                            <Text style={styles.text}>First name</Text>
                            <TextInput style={styles.input} placeholder="First name" onChangeText={ (e) => handleUserData('firstName', e) }></TextInput>
                            <Text style={styles.errors}>{errors.firstName !== '' && 'Invalid first name' }</Text>
                        </View>
                        <View style={styles.flexInputsWidth50}>
                            <Text style={styles.text}>Last name</Text>
                            <TextInput style={styles.input} placeholder="Last name" onChangeText={ (e) => handleUserData('lastName', e) }></TextInput>
                            <Text style={styles.errors}>{errors.lastName !== '' && 'Invalid last name' }</Text>
                        </View>
                    </View>
                    
                    <Text style={styles.text}>Email address</Text>
                    <TextInput style={styles.input} placeholder="Email address" onChangeText={ (e) => handleUserData('email', e) }></TextInput>
                    <Text style={styles.errors}>{errors.email !== '' && 'Invalid email' }</Text>

                    <Text style={styles.text}>Url photo</Text>
                    <TextInput style={styles.input} placeholder="Url photo" onChangeText={ (e) => handleUserData('urlPic', e) }></TextInput>
                    <Text style={styles.errors}>{errors.urlPic !== '' && 'Invalid URL' }</Text>

                    <View style={styles.flexInputsContainer}>
                        <View style={styles.flexInputsWidth50}>
                            <Text style={styles.text}>Password</Text>
                            <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" onChangeText={ (e) => handleUserData('password', e) } ></TextInput>
                            <Text style={styles.errors}>{errors.password !== '' && 'Invalid password' }</Text>
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
                                            <Text>Choose your country</Text>
                                            <Picker 
                                                    mode="dropdown"
                                                    style={styles.picker} 
                                                    ref={pickerRef}
                                                    selectedValue={newUser.country}
                                                    
                                                    onValueChange={itemValue => setNewUser({
                                                        ...newUser,
                                                        country: itemValue
                                                        })}>
                                                        {
                                                        countries.map((country, index) => {
                                                                return <Picker.Item style={styles.pickerItem} key={index} label={country} value={country} />
                                                        }) 
                                                        }
                                            </Picker>
                                        </View>

                                        <Pressable
                                        style={[styles.btnConfirm]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                        >
                                        <Text style={styles.btnCountryConfirm}>Confirm</Text>
                                        </Pressable>
                                    </View>
                                    </View>
                                </Modal>
                                <Pressable
                                    style={styles.btnCountry}
                                    onPress={() => setModalVisible(true)}
                                >
                                    <Text style={[styles.btnCountryText]}>{newUser.country === '' ? 'Choose Country' : newUser.country}</Text>
                                </Pressable>
                            </View> 
                            
                        </View>
                    </View>

                </View>
                <TouchableHighlight onPress={ sendData }>
                    <View style={styles.btnContainer}>
                        <View style={[styles.accessEmailBtn, styles.signIn]}>
                            <Text style={[styles.textEmail, styles.textSignIn]} > Sign up</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </ScrollView>
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
    pickerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    picker: {
        width: 160,
        color:'black',
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
        backgroundColor: 'black',
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
        backgroundColor: '#000115',
        width: '100%',
        padding: 20
    },
    errors: {
        color: '#FF603F',
        marginBottom: 10
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20
    },
    text: {
        color: '#eeeeee',
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
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);