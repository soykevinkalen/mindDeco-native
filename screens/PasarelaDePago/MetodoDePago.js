import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'
import {useNavigation} from '@react-navigation/core'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import Back from '../utilities/Back';


const MetodoDePago = () => {
    const navigation = useNavigation()

    const [metodoDePagoElegido, setMetodoDePagoElegido] = useState('')

    useEffect(() => {
        console.log('entré al metodo de pago')
        const traerAsyncStorage = async() => {
            // const infoEnAsyncStorage = await AsyncStorage.getItem('infoDelUsuario')
            // const metodoDeEnvioElegido = await AsyncStorage.getItem('metodoDeEnvioElegido')
        }
        traerAsyncStorage()
    }, [])

    const elegirMetodoDepago = async(metodo) => {
        setMetodoDePagoElegido(metodo)
        await AsyncStorage.setItem('metodoDePagoElegido', metodo)

        if(metodo === 'pagoEnEfectivo'){
            navigation.navigate('pagoEnEfectivo')
        } else {
            navigation.navigate('creditCard')
        }
    }

    return (
        <ScrollView style={styles.contenedorDeSeccion}>
            <Back navigateTo='seccionDirecciones' color='white' bgColor='black' title='Forma de pago' />
            
            <View style={styles.contenedorOpcionesDePago}>
                <TouchableHighlight onPress={()=> elegirMetodoDepago('creditCard')} style={styles.contenedorOpcionDePago} underlayColor='#858585'>
                    <View style={styles.opcionDePago1}>
                        <View style={styles.iconoOpcion1}>
                            <FontAwesome name="credit-card" size={24} color="rgb(61, 137, 250)" />
                        </View>
                        <Text style={styles.textoOpcionDePago}>Visa Debito</Text>
                        <View style={styles.contenedorIconoFlecha}>
                            <Entypo name="chevron-thin-right" style={styles.iconoFlecha} size={24} color="black" />
                        </View>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={()=> elegirMetodoDepago('creditCard')} style={styles.contenedorOpcionDePago} underlayColor='#858585'>
                    <View style={styles.opcionDePago2}>
                        <View style={styles.iconoOpcion2}>
                            <Entypo name="credit-card" size={26} color="rgb(61, 137, 250)" />
                        </View>
                        <Text style={styles.textoOpcionDePago}>Visa Credito</Text>    
                        <View style={styles.contenedorIconoFlecha}>
                            <Entypo name="chevron-thin-right" style={styles.iconoFlecha} size={24} color="black" />
                        </View>
                    </View>
                </TouchableHighlight>
            </View>

            <View style={styles.contenedorOpcionEfectivo}>
                <TouchableHighlight onPress={() => elegirMetodoDepago('pagoEnEfectivo')} style={styles.contenedorOpcionDePago} underlayColor='#858585'>
                    <View style={styles.opcionDePago3}>
                        <View style={styles.iconoOpcion3}>
                            <Ionicons name="md-cash-outline" size={28} color="rgb(61, 137, 250)" />    
                        </View>
                        <Text style={styles.textoOpcionDePago}>Efectivo en Puntos de Pago</Text>
                        <View style={styles.contenedorIconoFlecha}>
                            <Entypo name="chevron-thin-right" style={styles.iconoFlecha} size={24} color="black" />
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contenedorDeSeccion: {
        width: "100%",
        backgroundColor: 'rgb(230,230,230)',
        // alignItems: 'center'
        // backgroundColor: 'white'
    },
    contenedorTituloDeSeccion: {
        // backgroundColor: 'rgb(201,182,135)',
        backgroundColor: 'black',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 22,
        color: 'white'
    },
    contenedorOpcionesDePago: {
        marginTop: 50,
        // backgroundColor: 'green',
        alignItems: 'center'
        // marginLeft: '10%'
    },
    contenedorOpcionEfectivo: {
        // marginLeft: '10%',
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center'
    },
    contenedorOpcionDePago: {
        width: '92%',
        // marginLeft: "4%",
        borderRadius: 7
    },
    opcionDePago1: {
        borderTopStartRadius: 7,
        borderTopEndRadius: 7,
        width: "100%",
        // backgroundColor: 'rgb(230,230,230)',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 25,
        borderBottomWidth: .3,
    },
    opcionDePago2: {
        width: "100%",
        backgroundColor: 'white',
        // backgroundColor: 'rgb(230,230,230)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 25,
        borderBottomStartRadius: 7,
        borderBottomEndRadius: 7
        // borderBottomWidth: .3,
    },
    opcionDePago3: {
        borderTopStartRadius: 7,
        borderTopEndRadius: 7,
        borderBottomStartRadius: 7,
        borderBottomEndRadius: 7,
        backgroundColor: 'white',
        // backgroundColor: 'rgb(230,230,230)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 25,
    },
    iconoOpcion1: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'white',
        backgroundColor: 'rgb(230,230,230)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconoOpcion2: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'white',
        backgroundColor: 'rgb(230,230,230)',
        alignItems: 'center',
        justifyContent: 'center'
    
    },
    iconoOpcion3: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'white',
        backgroundColor: 'rgb(230,230,230)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoOpcionDePago: {
        fontSize: 17,
        marginLeft: 20
    },
    contenedorIconoFlecha: {
        flex: 1,
        alignItems: 'flex-end'
    },
    iconoFlecha: {
        marginRight: 20
        // backgroundColor: 'green'
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
        backgroundColor: 'black',
        color: 'white'
    }
})

export default MetodoDePago
