import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, View, StyleSheet, ImageBackground, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import BackConCarrito from '../utilities/BackConCarrito'
import Toast from 'react-native-toast-message';

import carritoActions from '../../redux/actions/carritoActions'

import ImagenesProductosSlider from './ImagenesProductosSlider';

const windowHeight = Dimensions.get('window').height;

const Producto = (props) => {
    const { nombre, precio, descripcion, fotos } = props.route.params.producto

    const agregandoProducto = async () => {
        const response = await props.agregarProductoAlCarrito(props.userLogged, props.route.params.producto)
        if(response.success) {
           Toast.show({
            text1: 'Genial!',
            text2: 'El producto fue agregado al carrito',
            type: 'success'
          });
           
        }else{
            Toast.show({
                text1: 'Oops!',
                text2: 'Este producto ya esta en el carrito',
                type: 'error'
            });
        }
    }

    return (
        <>
            <BackConCarrito navigateTo='subcategorias'/>
            <ScrollView style={styles.mainContainer}>
                <ScrollView horizontal={true} style={styles.imagesContainer}>
                    {
                        fotos.map((productImage, index) => {
                            return <ImagenesProductosSlider key={index} productImage={productImage} />
                        })
                    }
                </ScrollView>
                <View style={styles.midContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{nombre.charAt(0).toUpperCase()+ nombre.slice(1, nombre.length)}</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.description}>{descripcion}</Text>
                        </View>
                
                        <View style={styles.bottomContainer}>
                            <Text style={styles.price}>${precio}</Text>
                            <TouchableOpacity onPress={ ()=> agregandoProducto() }>
                                <Text style={styles.btnAgregarCarrito} >
                                    Agregar al carrito
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    price: {
        fontSize: 16,
        fontWeight: '500',
        marginHorizontal: 16
    },
    btnAgregarCarrito: {
        backgroundColor: 'black',
        padding: 6,
        color: 'white',
        borderRadius: 2,
        overflow: 'hidden'
    },
    subContainer: {
        justifyContent: 'space-between',
    },
    titleContainer: {
        marginBottom: 10
    },
    description: {
        color: 'gray'
    },
    descriptionContainer: {
        marginBottom: 20
    },
    categoriaItemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%'
    },
    mainContainer: {
        width: '100%'
    },
    imagesContainer: {
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    midContainer: {
        minHeight: 200,
        padding: 12
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 2
    }
})

const mapStateToProps = state => {
    return {
        productosCategoria: state.productosReducer.productosCategoria,
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    agregarProductoAlCarrito: carritoActions.agregarProductoAlCarrito
}

export default connect(mapStateToProps, mapDispatchToProps)(Producto);