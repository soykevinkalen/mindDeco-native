import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import {useNavigation} from '@react-navigation/core'
import RadioGroup,{Radio} from "react-native-radio-input";

const MetodoDePago = () => {
    const navigation = useNavigation()

    const getChecked = (value) => {
        // value = our checked value
        console.log(value)
    }
    return (
        <>
            <View style={styles.contenedorTituloEnvio}>
                <Text style={styles.tituloEnvio}>Seleccioná un método de Envio</Text>
            </View>
            
            <RadioGroup getChecked={getChecked}>
                <Radio label={"Visa Debito"} value={"visaDebito"}/>
                <Radio label={"Visa Credito"} value={"visaCredito"}/>
                <Radio label={"Efectivo en Puntos de Pago"} value={"efectivo"}/>
            </RadioGroup>


            {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('metodoDeEnvio')}>
                <Text>Volver</Text>
            </TouchableWithoutFeedback> */}
            
            <View style={styles.contenedorBotonContinuar}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('confirmarCompra')}>
                    <Text style={styles.botonContinuar}>Continuar</Text>
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

export default MetodoDePago
