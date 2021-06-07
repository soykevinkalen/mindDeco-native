import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, Modal, Pressable, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextField, FilledTextField, OutlinedTextField,  } from 'rn-material-ui-textfield'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import {Picker} from '@react-native-picker/picker';
import Toast from 'react-native-toast-message';

import Back from '../utilities/Back'

const SeccionDirecciones = ()=>{
    const navigation = useNavigation();
    const [provincias, setProvincias] = useState([])
    const [infoDelUsuario, setInfoDelUsuario] = useState({nombreYApellido: '', direccion: '', localidad: '', codigoPostal: '', provincia: '', telefono: '',  infoExtra: ' ',})
    const [inputEstaVacio, setinputEstaVacio] = useState({nombreYApellido: false, direccion: false, localidad: false, codigoPostal: false, provincia: false, telefono: false,  infoExtra: true,})
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        axios.get('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre')
        .then( response => {
            setProvincias(response.data.provincias)})
    }, [])

    const leerInput = (campo, valor)=>{
        setInfoDelUsuario({...infoDelUsuario, [campo]: valor})
    }
    
    const continuar = ()=>{
        if(!Object.values(infoDelUsuario).some(value => value === "")){
            navigation.navigate('metodoDeEnvio')
            AsyncStorage.setItem('infoDelUsuario', JSON.stringify(infoDelUsuario))
        } else {
            Toast.show({
                text1: 'Oops!',
                text2: 'Todos los campos son obligatorios',
                type: 'error'
            });
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
        <ScrollView style={styles.contenedorDirecciones}>        
        
            <Back navigateTo='carrito' color='white' bgColor='black' title='Datos del envío' />

            <View style={styles.contenedorInputDirecciones}>
                <TextField
                    style={styles.direccionesInput}
                    lineWidth={1}
                    width= {30}
                    label="Nombre y Apellido"
                    baseColor="rgb(0,0,0)"
                    onChangeText={(e)=>leerInput('nombreYApellido', e)}
                />
            </View>

            <View style={styles.contenedorInputDirecciones}>
                <TextField
                    style={styles.direccionesInput}
                    lineWidth={1}
                    width= {30}
                    label="Dirección"
                    baseColor="rgb(0,0,0)"
                    onChangeText={(e)=>leerInput('direccion', e)}
                />
            </View>

            <View style={styles.contenedorInputDirecciones}>
                <TextField
                    style={styles.direccionesInput}
                    lineWidth={1}
                    width= {30}
                    label="Localidad"
                    baseColor="rgb(0,0,0)"
                    onChangeText={(e)=>leerInput('localidad', e)}
                />
            </View>

            <View style={styles.contenedorInputDirecciones}>
                <TextField
                    style={styles.direccionesInput}
                    lineWidth={1}
                    width= {30}
                    label="Código Postal"
                    baseColor="rgb(0,0,0)"
                    onChangeText={(e)=>leerInput('codigoPostal', e)}
                />
            </View>

            <View style={styles.contenedorInputDirecciones}>
                <TextField
                    style={styles.direccionesInput}
                    lineWidth={1}
                    width= {30}
                    label="Telefono de Contacto"
                    baseColor="rgb(0,0,0)"
                    keyboardType="phone-pad"
                    onChangeText={(e)=>leerInput('telefono', e)}
                />
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
                                        selectedValue={infoDelUsuario.provincia}
                                        
                                        onValueChange={itemValue => leerInput('provincia', itemValue)}>
                                            {
                                            provincias.map(provincia => {
                                                    return <Picker.Item style={styles.pickerItem} key={provincia.nombre} label={provincia.nombre} value={provincia.nombre} />
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
                        <Text style={[styles.btnCountryText]}>{infoDelUsuario.provincia === '' ? 'Provincia' : infoDelUsuario.provincia}</Text>
                    </Pressable>
                </View> 
                
            </View>


           

            

            <View style={styles.contenedorInputDirecciones}>
                <Text style={styles.textoIndicaciones}> Indicaciones adicionales (opcional)</Text>
                <TextInput onChangeText={(e)=>leerInput('infoExtra', e)} placeholder="Color de la casa, entre calles...." style={styles.indicacionesAdicionales}></TextInput>
            </View>

                <TouchableOpacity onPress={() => continuar()}>
                    <View style={styles.contenedorBotonContinuar}>
                            <Text style={styles.botonContinuar}>Continuar</Text>
                    </View>
                </TouchableOpacity>

        </ScrollView>
        )
}

const styles = StyleSheet.create({
    contenedorDirecciones: {
        height: '100%',
        backgroundColor: 'rgb(230,230,230)'
    },
    contenedorTituloDirecciones: {
        // backgroundColor: 'rgb(201,182,135)',
        backgroundColor:"black",
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tituloDirecciones: {
        fontSize: 22,
        color: 'white'
        // color: 'rgb(201,182,135)'
        // color: 'rgb(230,230,230)',
    },
    textoIndicaciones: {
        marginTop: 20,
        marginBottom: 5
    },
    indicacionesAdicionales: {
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 7,
        paddingBottom: 20,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    contenedorBotonContinuar: {
        height: 70,
        alignItems: 'center'
    },
    botonContinuar: {
        borderRadius: 5,
        color: 'white',
        width: '80%',
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        // backgroundColor: 'rgb(52,131,250)'
        // backgroundColor: 'rgb(201,182,135)',
        backgroundColor: 'black',
        color: 'white',
        overflow: 'hidden'
    },
    contenedorInputDirecciones: {
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    direccionesInput: {
        width: '80%'
        // borderRightColor: 'white'
    },
    flexInputsWidth50: {
        width: '100%',
        marginTop: 20,
        // backgroundColor: 'lightpink',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    centeredView: {
        // backgroundColor: 'green',
        width: '100%',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    modalView: {
        width: '65%',
        margin: 20,
        backgroundColor: "white",
        // backgroundColor: "blue",
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
    pickerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'blue'
    },
    picker: {
        width: 160,
        color:'#191D1F',
        // color:'blue',
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
    btnCountry: {
        backgroundColor: '#cecece',
        // backgroundColor: 'green',
        marginVertical: 4,
        padding: 6,
        marginTop: 6,
        borderWidth: 2,
        borderColor: '#cecece',
        borderRadius: 4,
        width: '80%',
        marginBottom: 3
    },
    btnCountryConfirm: {
        color: 'white'
    },
    btnCountryText: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
})



export default SeccionDirecciones