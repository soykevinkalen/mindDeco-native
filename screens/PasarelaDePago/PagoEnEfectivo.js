import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableHighlightComponent, View } from "react-native"
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo } from '@expo/vector-icons'; 
import Back from '../utilities/Back';

const PagoEnEfectivo = () => {
    const navigation = useNavigation()
    
    const [metodoDePagoEnEfectivoElegido, setMetodoDePagoEnEfectivoElegido] = useState('')

    const elegirMetodoDePagoEnEfectivo = (metodo) => {
        setMetodoDePagoEnEfectivoElegido(metodo)
        AsyncStorage.setItem('metodoDePagoEnEfectivoElegido', metodo)
        navigation.navigate('confirmarCompra')
    }

    return (
        <ScrollView style={styles.contenedorGeneral}>
            
            <Back navigateTo='metodoDePago' color='white' bgColor='black' title='¿Dónde te gustaría pagar?' />

            <View style={styles.contenedorOpcionesDePago}>
                <TouchableHighlight onPress={()=> elegirMetodoDePagoEnEfectivo('pagoFacil')} style={styles.contenedorOpcionDePago} underlayColor='#858585'>
                    <View style={styles.opcionDePago1}>
                            <Text style={styles.textoOpcionDePago}>Pago Fácil</Text>
                            <View style={styles.contenedorIconoFlecha}>
                                <Entypo name="chevron-thin-right" style={styles.iconoFlecha} size={24} color="black" />
                            </View>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => elegirMetodoDePagoEnEfectivo('rapiPago')} style={styles.contenedorOpcionDePago} underlayColor='#858585'>
                    <View style={styles.opcionDePago2}>
                        <Text style={styles.textoOpcionDePago}>Rapi Pago</Text>    
                        <View style={styles.contenedorIconoFlecha}>
                            <Entypo name="chevron-thin-right" style={styles.iconoFlecha} size={24} color="black" />
                        </View>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => elegirMetodoDePagoEnEfectivo('provinciaNet')} style={styles.contenedorOpcionDePago} underlayColor='#858585'>
                    <View style={styles.opcionDePago3}>
                        <Text style={styles.textoOpcionDePago}>Provincia NET pagos</Text>  
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
    contenedorGeneral: {
        backgroundColor: 'rgb(230,230,230)'
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
        // color: 'rgb(201,182,135)'
        color: 'white'
    },
    contenedorOpcionesDePago: {
        marginTop: 50
    },
    contenedorOpcionEfectivo: {
        marginTop: 20,
        marginBottom: 20
    },
    contenedorOpcionDePago: {
        width: '92%',
        marginLeft: "4%",
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
        paddingVertical: 25,
        paddingLeft: 25,
        borderBottomWidth: .3,
    },
    opcionDePago2: {
        width: "100%",
        // backgroundColor: 'rgb(230,230,230)',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 25,
        paddingLeft: 25,
        borderBottomStartRadius: 7,
        borderBottomEndRadius: 7,
        borderBottomWidth: .3,
    },
    opcionDePago3: {
        borderTopStartRadius: 7,
        borderTopEndRadius: 7,
        borderBottomStartRadius: 7,
        borderBottomEndRadius: 7,
        // backgroundColor: 'rgb(230,230,230)',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 25,
        paddingLeft: 25,
    },
    iconoOpcion1: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'white'
    },
    iconoOpcion2: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'white'
    },
    iconoOpcion3: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'white'
    },
    textoOpcionDePago: {
        fontSize: 17,
        marginLeft: 10
    },
    contenedorIconoFlecha: {
        // backgroundColor: 'green',
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 20
    }
})

export default PagoEnEfectivo