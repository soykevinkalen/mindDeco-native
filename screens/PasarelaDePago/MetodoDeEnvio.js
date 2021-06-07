import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View, Platform } from 'react-native'
import {useNavigation} from '@react-navigation/core'
import RadioGroup,{Radio} from "react-native-radio-input";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Icon, InlineIcon } from '@iconify/react';
// import arrowRightAlt2 from '@iconify-icons/dashicons/arrow-right-alt2';
import { Entypo } from '@expo/vector-icons'; 
import Back from '../utilities/Back';

const MetodoDeEnvio = () => {
    const navigation = useNavigation()
    const [infoDelUsuario, setInfoDelUsuario] = useState({nombreYApellido: '', direccion: '', localidad: '', codigoPostal: '', provincia: '', telefono: '',  infoExtra: '',})
    const [metodoDeEnvioElegido, setMetodoDeEnvioElegido] = useState('')  

    useEffect(()=>{
        console.log('entré en metodo de envio')
        const traerAsyncStorage = async() => {
            const infoEnAsyncStorage = await AsyncStorage.getItem('infoDelUsuario')
            setInfoDelUsuario(infoEnAsyncStorage)
        }
        traerAsyncStorage()
    },[])

    const elegirMetodo = async(metodo) => {
        setMetodoDeEnvioElegido(metodo)
        AsyncStorage.setItem('metodoDeEnvioElegido', metodo)
        navigation.navigate('metodoDePago')
    }

    // const getChecked = (value) => {
    //     // value = our checked value
    //     console.log(value)
    // }

    return (
        <ScrollView style={styles.contenedorGeneral}>
            <Back navigateTo='seccionDirecciones' color='white' bgColor='black' title='Método de envío' />

            <View style={styles.contenedorOpcionesDeEnvio}>
                <TouchableHighlight style={styles.contenedorDeEnvio1} onPress={() => elegirMetodo('recibirCompra')}>
                    <View style={styles.opcionDeEnvio1}>
                        {/* <View style={styles.circulo}></View> */}
                        <Text style={styles.textoOpcionDeEnvio}>Recibir Compra</Text>
                        <View style={styles.contenedorEnvioGratis}>
                            <Text style={styles.textoGratisEnvio}>Gratis</Text>
                            <Entypo name="chevron-thin-right" size={24} color="black" />
                        </View>   
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.contenedorDeEnvio2} onPress={()=> elegirMetodo('retiroPorSucursal')}>
                    <View style={styles.opcionDeEnvio2}>
                        {/* <View style={styles.circulo}></View> */}
                        <Text style={styles.textoOpcionDeEnvio}>Retiro por Sucursal</Text>
                        <View style={styles.contenedorEnvioGratis}>
                            <Text style={styles.textoGratisEnvio}>Gratis</Text>
                            <Entypo name="chevron-thin-right" size={24} color="black" />
                        </View>                
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.contenedorDeEnvio3} onPress={() => elegirMetodo('retiroPorCorreo')}>
                    <View style={styles.opcionDeEnvio3}>
                        {/* <View style={styles.circulo}></View> */}
                        <Text style={styles.textoOpcionDeEnvio}>Retirar por Correo Argentino</Text>
                        <View style={styles.contenedorEnvioGratis}>
                            <Text style={styles.textoGratisEnvio}>Gratis</Text>
                            <Entypo name="chevron-thin-right" size={24} color="black" />
                        </View>
                    </View>
                </TouchableHighlight>
            </View>

            {/* <View style={styles.contenedorBotonContinuar}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('metodoDePago')}>
                    <Text style={styles.botonContinuar}>Continuar</Text>
                </TouchableWithoutFeedback>
            </View> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contenedorGeneral: {
        backgroundColor: 'rgb(230,230,230)'
    },
    contenedorTituloEnvio: {
        // backgroundColor: 'rgb(201,182,135)',
        backgroundColor: 'black',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tituloEnvio: {
        fontSize: 22,
        color: 'white'
        // color: 'rgb(201,182,135)'
    },
    contenedorOpcionesDeEnvio: {
        marginTop: 50,
        alignItems: 'center'
    },
    contenedorDeEnvio1: {
        width: '90%',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10
    },
    contenedorDeEnvio2: {
        width: '90%',
    },
    contenedorDeEnvio3: {
        width: '90%',
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10
    },
    opcionDeEnvio1: {
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        // width: "92%",
        width: "100%",
        // marginLeft: "4%",
        // backgroundColor: 'rgb(230,230,230)',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 25,
        paddingLeft: 25,
        borderBottomWidth: .3,
    },
    opcionDeEnvio2: {
        width: "100%",
        // marginLeft: "4%",
        // backgroundColor: 'rgb(230,230,230)',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 25,
        paddingLeft: 25,
        borderBottomWidth: .3,
    },
    opcionDeEnvio3: {
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        width: "100%",
        // marginLeft: "4%",
        // backgroundColor: 'rgb(230,230,230)',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 25,
        paddingLeft: 25,
    },
    circulo: {
        width: 15,
        height: 15,
        borderRadius: 100,
        borderWidth: 1
    },
    textoOpcionDeEnvio: {
        fontSize: 17,
        // marginLeft: 10
    },
    contenedorEnvioGratis: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 10,
        // backgroundColor: "grey",
        justifyContent: 'flex-end'
    },
    textoGratisEnvio: {
        color: '#24AD27',
        marginRight: 10,
        ...Platform.select({
            ios: {
                marginTop: 4.5
            },
        })
        // backgroundColor: 'green',
    },
    contenedorBotonContinuar: {
        marginTop: 30,
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
        backgroundColor: 'black',
        color: 'white'
    }
})

export default MetodoDeEnvio