import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import Toast from 'react-native-toast-message';

import carritoActions from '../../redux/actions/carritoActions'

const windowHeight = Dimensions.get('window').height;

const SubCategoriaItem = (props) => {
    const { nombre, precio } = props.producto
    
    const agregandoProducto = async () => {
        const response = await props.agregarProductoAlCarrito(props.userLogged, props.producto)
        if(response.success) {
            Toast.show({
             text1: 'Genial!',
             text2: 'El producto fue agregado al carrito',
             type: 'success'
           });
            
         } else {
             Toast.show({
                 text1: 'Oops!',
                 text2: 'Este producto ya esta en el carrito',
                 type: 'error'
             });
        }
    }
    
    return (
        <View style={styles.mainContainer}>
            <ImageBackground style={styles.productImage} source={{
                    uri: props.producto.fotos[0]
                }}>
            </ImageBackground>
            <View style={styles.infoContainer}>
                <View style={styles.infoProduct}>
                    <Text>{nombre.charAt(0).toUpperCase()+ nombre.slice(1, nombre.length)}</Text>
                    <Text style={styles.productPrice}>${precio}</Text>
                </View>
                <View style={styles.actionsContainer}>
                    <TouchableOpacity onPress={()=>  props.navigation.navigate('producto', {producto: props.producto})}>
                        <Ionicons name="search-outline" size={26} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ ()=> agregandoProducto() } >
                        <SimpleLineIcons name="handbag" size={26} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    actionsContainer: {
        height: 55,
        justifyContent: 'space-between'
    },
    categoriaItemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%'
    },
    mainContainer: {
        minHeight: 250,
        width: '100%'
    },
    productImage: {
        width: '100%',
        height: 250
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16
    },
    infoProduct: {
        justifyContent: 'space-between',
        height: 45
    },
    productPrice: {
        fontWeight: 'bold'
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

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoriaItem);