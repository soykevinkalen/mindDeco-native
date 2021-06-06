import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextField, FilledTextField, OutlinedTextField,  } from 'rn-material-ui-textfield'

const SeccionDirecciones = ()=>{
    const navigation = useNavigation();
    // const [login, setLogin] = useState('');

    const fieldRef = React.createRef()

    // const onSubmit = () => {
    //   let { current: field } = fieldRef
  
    //   console.log(field.value())
    // }
  
    // const formatText = (text) => {
    //   return text.replace(/[^+\d]/g, '')
    // }

    return (
        <>
            <ScrollView style={styles.contenedorDirecciones}>
                <View style={styles.contenedorTituloDirecciones}>
                    <Text style={styles.tituloDirecciones}>Agregá un Domicilio</Text>
                </View>

                <View style={styles.contenedorInputDirecciones}>
                    <TextField
                        // textColor="rgb(0,0,0)"
                        style={styles.direccionesInput}
                        lineWidth={1}
                        width= {30}
                        label="Nombre y Apellido"
                        baseColor="rgb(0,0,0)"
                        // keyboardType="phone-pad"
                        // formatText={formatText}
                        // onSubmitEditing={onSubmit}
                        // ref={fieldRef}
                        />
                </View>

                <View style={styles.contenedorInputDirecciones}>
                    <TextField
                        style={styles.direccionesInput}
                        lineWidth={1}
                        width= {30}
                        label="Dirección"
                        baseColor="rgb(0,0,0)"
                        // keyboardType="phone-pad"
                        // formatText={formatText}
                        // onSubmitEditing={onSubmit}
                        // ref={fieldRef}
                        />
                </View>

                <View style={styles.contenedorInputDirecciones}>
                    <TextField
                        style={styles.direccionesInput}
                        lineWidth={1}
                        width= {30}
                        label="Localidad"
                        baseColor="rgb(0,0,0)"
                        // keyboardType="phone-pad"
                        // formatText={formatText}
                        // onSubmitEditing={onSubmit}
                        // ref={fieldRef}
                        />
                </View>

                <View style={styles.contenedorInputDirecciones}>
                    <TextField
                        style={styles.direccionesInput}
                        lineWidth={1}
                        width= {30}
                        label="Código Postal"
                        baseColor="rgb(0,0,0)"
                        // keyboardType="phone-pad"
                        // formatText={formatText}
                        // onSubmitEditing={onSubmit}
                        // ref={fieldRef}
                        />
                </View>

                <View style={styles.contenedorInputDirecciones}>
                    <TextField
                        style={styles.direccionesInput}
                        lineWidth={1}
                        width= {30}
                        label="Provincia"
                        baseColor="rgb(0,0,0)"
                        // keyboardType="phone-pad"
                        // formatText={formatText}
                        // onSubmitEditing={onSubmit}
                        // ref={fieldRef}
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
                        // labelFontSize={26}
                        // formatText={formatText}
                        // onSubmitEditing={onSubmit}
                        // ref={fieldRef}
                        />
                </View>

                <View style={styles.contenedorInputDirecciones}>
                    <Text style={styles.textoIndicaciones}> Indicaciones adicionales (opcional)</Text>
                    <TextInput placeholder="Color de la casa, entre calles...." style={styles.indicacionesAdicionales}></TextInput>
                </View>

                {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('carrito')}>
                    <Text>Volver</Text>
                </TouchableWithoutFeedback> */}

                <View style={styles.contenedorBotonContinuar}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('metodoDeEnvio')}>
                        <Text style={styles.botonContinuar}>Continuar</Text>
                    </TouchableWithoutFeedback>
                </View>

            </ScrollView>
        </>
        )
}

const styles = StyleSheet.create({
    contenedorDirecciones: {
        height: '100%',
        // backgroundColor: 'green'
    },
    contenedorTituloDirecciones: {
        backgroundColor: 'rgb(201,182,135)',
        // backgroundColor:"black",
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tituloDirecciones: {
        fontSize: 22,
        // color: 'rgb(201,182,135)'
        color: 'white'
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
        color: 'white'
    },
    contenedorInputDirecciones: {
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    direccionesInput: {
        width: '80%'
        // borderRightColor: 'white'
    }
})



export default SeccionDirecciones