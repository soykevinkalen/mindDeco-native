import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import {useNavigation} from '@react-navigation/core'
import RadioGroup,{Radio} from "react-native-radio-input";
// import { Icon, InlineIcon } from '@iconify/react';
// import arrowRightAlt2 from '@iconify-icons/dashicons/arrow-right-alt2';

const MetodoDeEnvio =  ()=>{
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

            <View style={styles.contenedorOpcionesDeEnvio}>
                <View style={styles.opcionDeEnvio1}>
                    <View style={styles.circulo}></View>
                        <Text style={styles.textoOpcionDeEnvio}>Recibir Compra</Text>
                    <Text style={styles.textoGratisEnvio}>Gratis</Text>
                </View>
                <View style={styles.opcionDeEnvio2}>
                    <View style={styles.circulo}></View>
                    <Text style={styles.textoOpcionDeEnvio}>Retiro por Sucursal</Text>
                    <View>
                        <Text style={styles.textoGratisEnvio}>Gratis</Text>
                    </View>                
                </View>
                <View style={styles.opcionDeEnvio3}>
                    <View style={styles.circulo}></View>
                    <Text style={styles.textoOpcionDeEnvio}>Retirar por Correo Argentino</Text>
                    <View>
                        <Text style={styles.textoGratisEnvio}>Gratis</Text>
                    </View>
                </View>
            </View>

            {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('seccionDirecciones') }>
                <Text>Volver</Text>
            </TouchableWithoutFeedback> */}

            <View style={styles.contenedorBotonContinuar}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('metodoDePago')}>
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
    contenedorOpcionesDeEnvio: {
        marginTop: 50
    },
    opcionDeEnvio1: {
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        width: "92%",
        marginLeft: "4%",
        backgroundColor: 'rgb(230,230,230)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 25,
        paddingLeft: 25,
        borderBottomWidth: .3,
    },
    opcionDeEnvio2: {
        width: "92%",
        marginLeft: "4%",
        backgroundColor: 'rgb(230,230,230)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 25,
        paddingLeft: 25,
        borderBottomWidth: .3,
    },
    opcionDeEnvio3: {
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        width: "92%",
        marginLeft: "4%",
        backgroundColor: 'rgb(230,230,230)',
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
        marginLeft: 20
    },
    textoGratisEnvio: {
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'flex-end'
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