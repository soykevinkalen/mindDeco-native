import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import {useNavigation} from '@react-navigation/core'
import { TouchableHighlight } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon, InlineIcon } from '@iconify/react';
import truckIcon from '@iconify-icons/bi/truck';
import carritoActions from '../../redux/actions/carritoActions'
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Toast from 'react-native-toast-message';

import Back from '../utilities/Back';

const ConfirmarCompra = (props) => {
    const navigation = useNavigation()
    const [infoDelUsuario, setInfoDelUsuario] = useState({})
    const [carrito, setCarrito] = useState([])

    useEffect(() => {
        productos()
        console.log('entre a confirmar Metodo de Pago')
        const traerCosasDelStorage = async() => {            
            
            const infoDelUsuario = await AsyncStorage.getItem('infoDelUsuario')
            const metodoDeEnvioElegido = await AsyncStorage.getItem('metodoDeEnvioElegido')
            const metodoDePagoElegido = await AsyncStorage.getItem('metodoDePagoElegido')
            const metodoDePagoEnEfectivoElegido = await AsyncStorage.getItem('metodoDePagoEnEfectivoElegido')
            const datosTarjeta = await AsyncStorage.getItem('datosTarjeta')

            

            setInfoDelUsuario(JSON.parse(infoDelUsuario))

            console.log(infoDelUsuario)
            console.log(metodoDeEnvioElegido)
            console.log(metodoDePagoElegido)
            console.log(metodoDePagoEnEfectivoElegido)
            console.log(datosTarjeta)
        }
        traerCosasDelStorage()
    }, [])

    const productos = async () => {
        if(props.userLogged){
            const array = await props.obtenerProductos(props.userLogged)
            setCarrito(array.carrito)
            console.log(array.carrito)
            await AsyncStorage.setItem("carrito", JSON.stringify(array.carrito))
        }
    }

    let precioTotal = 0
    let articulosTotales = 0

    carrito.map(producto => {
        console.log('linea53', producto)

        precioTotal +=  producto.cantidad*producto.idProducto.precio
        console.log('linea 54', precioTotal)

        articulosTotales += producto.cantidad
        return null
    })

    console.log('linea 58', precioTotal)

    const confirmarCompra = async() => {
        carrito.map(producto => {
            props.vaciarCarrito(props.userLogged, producto)
        })
        navigation.navigate('home')
        Toast.show({
            text1: 'Excelente compra!',
            text2: 'Gracias por confiar en nosotros',
            type: 'success'
          });
        await AsyncStorage.removeItem("carrito")
        await AsyncStorage.removeItem("infoDelUsuario")
        await AsyncStorage.removeItem("metodoDeEnvioElegido")
        await AsyncStorage.removeItem("metodoDePagoElegido")
        await AsyncStorage.removeItem("metodoDePagoEnEfectivoElegido")
        await AsyncStorage.removeItem("cardatosTarjetarito")
    }

    return (
        <>
            <Back navigateTo='metodoDePago' color='white' bgColor='black' title='Finalizar compra' />
            <ScrollView style={styles.contenedorDeSeccion}>
                <View style={styles.contenedorTituloPrincipal}>
                    <Text style={styles.tituloPrincipal}>Confirma tu Compra</Text>
                    <View style={styles.seccionInfoDeLaCompra}>
                        <View style={styles.contenedorTextoDelTitulo}>
                            <Text style={styles.textoSeccionPrincipal}>Productos ({articulosTotales})</Text>
                            <Text style={styles.textoSeccionPrincipal}>$ {precioTotal}</Text>
                        </View>
                        <View style={styles.contenedorTextoDelTitulo}>
                            <Text style={styles.textoSeccionPrincipal}>Envío</Text>
                            <Text style={styles.textoSeccionPrincipal}>Gratis</Text>
                        </View>
                        <View style={styles.barraDivisora}></View>
                        <View style={styles.contenedorTextoDelTitulo}>
                            <Text style={styles.textoSeccionPrincipal}>Total</Text>
                            <Text style={styles.textoSeccionPrincipal}>$ {precioTotal}</Text>
                        </View>
                        <TouchableOpacity style={styles.contenedorBotonConfirmar} underlayColor='black' onPress={() => confirmarCompra()}>
                            <View style={styles.BotonConfirmar} >
                                <Text style={styles.textoBotonConfirmar}>Confirmar Compra</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.contenedorInfoDeEntrega}>
                    <View style={styles.iconoEntrega}>
                        <MaterialCommunityIcons name="truck-fast-outline" size={30} color="rgb(61, 137, 250)" />
                    </View>
                    {/* <Icon icon={truckIcon} /> */}
                    <Text style={styles.textoDireccionDeEntrega}>{infoDelUsuario.direccion}</Text>
                    <Text style={styles.textoInfoDeEntrega}>{infoDelUsuario.localidad}, {infoDelUsuario.provincia}</Text>
                    <Text style={styles.textoInfoDeEntrega}>{infoDelUsuario.nombreYApellido} - {infoDelUsuario.telefono}</Text>
                    <View style={styles.contenedorBotonesEditar}>
                        <TouchableOpacity style={styles.contenedorBotonEditar} onPress={() => navigation.navigate('metodoDeEnvio')} underlayColor="rgb(215, 215, 215)">
                            <Text style={styles.textoBotonEditar}>Editar forma de Envio</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.contenedorBotonEditar} onPress={() => navigation.navigate('metodoDePago')} underlayColor="rgb(215, 215, 215)">
                            <Text style={styles.textoBotonEditar}>Editar forma de Pago</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {carrito.map(producto => {
                    return (
                        <View key={producto._id} style={styles.contenedorProductoAComprar}>
                            <Image style={styles.fotoDeProducto} source={{uri: producto.idProducto.fotos[0] }} ></Image>
                            <Text style={styles.textoProductoAComprar}>{producto.idProducto.nombre}</Text>
                            <Text style={styles.textoUnidades}>Unidades: {producto.cantidad}</Text>
                        </View>
                    )
                })}

                    <TouchableOpacity onPress={() => confirmarCompra()}>
                        <View style={styles.contenedorBotonContinuar}>
                            <Text style={styles.botonContinuar}>Confirmar Compra</Text>
                        </View>
                    </TouchableOpacity>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    contenedorDeSeccion: {
        // backgroundColor: 'rgb(230,230,230)'
        backgroundColor: 'white'
    },
    contenedorTituloPrincipal: {
        backgroundColor: 'rgb(228, 201, 135)',
        // height: '55%',
        alignItems: 'center',
        width: '100%'
        // justifyContent: 'center',
    },
    tituloPrincipal: {
        marginTop: 35,
        fontSize: 22,
        color: 'black'
    },
    seccionInfoDeLaCompra: {
        // backgroundColor: 'white',
        marginTop: 25,
        width: '90%',
    },
    contenedorTextoDelTitulo: {
        marginVertical: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
        // backgroundColor: 'lightpink',
    },
    textoSeccionPrincipal: {
        color: 'grey', 
        fontSize: 18
    },
    barraDivisora: {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
        marginVertical: 15
    },
    contenedorBotonConfirmar: {
        marginTop: 40,
        marginBottom: 40,
        borderRadius: 5,
        width: '100%',
        backgroundColor: 'lightpink',
    },
    BotonConfirmar: {
        borderRadius: 5,
        alignItems: 'center',
        paddingVertical: 13,
        width: '100%',
        backgroundColor: 'black'
    },
    textoBotonConfirmar: {
        fontSize: 20,
        color: 'white'
    },
    contenedorInfoDeEntrega: {
        // borderWidth: 1,
        paddingTop: 40,
        // marginTop: 40,
        // backgroundColor: 'rgb(230,230,230)',
        paddingBottom: 40,
        borderBottomWidth: .5,
        alignItems: 'center'
    },
    iconoEntrega: {
        width: 50,
        height: 50,
        backgroundColor: 'rgb(230,230,230)',
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoDireccionDeEntrega: {
        color: '#858585',
        fontSize: 17,
        marginTop: 10,
        marginBottom: 5
    },
    textoInfoDeEntrega: {
        color: '#858585',
        fontSize: 15
    },
    contenedorBotonesEditar: {
        // backgroundColor: 'green',
        marginTop: 15,
        width: 210,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contenedorBotonEditar: {
        // backgroundColor: 'lightpink',
        paddingVertical: 8,
        width: 100,
        borderRadius: 5
    },
    textoBotonEditar: {
        textAlign: 'center',
        fontSize: 15,
        color: 'rgb(52,131,250)'
    },
    contenedorProductoAComprar: {
        // marginTop: 40,
        // borderTopWidth: .5,
        borderBottomWidth: .5,
        backgroundColor: 'white',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fotoDeProducto: {
        // 36.300
        width: 80,
        height: 80,
        backgroundColor: 'rgb(230,230,230)',
        borderRadius: 200,
        marginBottom: 20,
        // backgroundSize: 'cover'
        resizeMode: 'cover'
    },
    textoProductoAComprar: {
        fontSize: 18,
    },
    textoUnidades: {
        fontSize: 15,
        color: 'grey'
    },
    contenedorBotonContinuar: {
        // backgroundColor: 'red',
        marginTop: 30,
        // backgroundColor: 'white',
        paddingTop: 10,
        marginBottom: 30,
        height: 70,
        alignItems: 'center'
    },
    botonContinuar: {
        borderRadius: 5,
        width: '80%',
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 5,
        overflow: 'hidden'
    }
})

const mapStateToProps = state => {
    return { 
        userLogged: state.authReducer.userLogged
     }
 }

const mapDispatchToProps = {
    obtenerProductos: carritoActions.obtenerProductos,
    vaciarCarrito: carritoActions.vaciarCarrito
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmarCompra)