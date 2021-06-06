import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import {useNavigation} from '@react-navigation/core'

const ConfirmarCompra = () => {
    const navigation = useNavigation()

    return (
        <>
            <View style={styles.contenedorTituloEnvio}>
                <Text style={styles.tituloEnvio}>Confirma tu Compra</Text>
            </View>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate('metodoDePago')}>
                <Text>Volver</Text>
            </TouchableWithoutFeedback>

            <View style={styles.contenedorBotonContinuar}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('home')}>
                    <Text style={styles.botonContinuar}>Confirmar Compra</Text>
                </TouchableWithoutFeedback>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    contenedorTituloEnvio: {
        backgroundColor: 'rgb(201,182,135)',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tituloEnvio: {
        fontSize: 22,
        color: 'white'
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

export default ConfirmarCompra