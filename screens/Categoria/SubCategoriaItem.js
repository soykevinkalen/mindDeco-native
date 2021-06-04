import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, View, StyleSheet, ImageBackground, Text } from 'react-native'
import { connect } from 'react-redux'
import BackConCarrito from '../utilities/BackConCarrito'
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 

// <AntDesign name="shoppingcart" size={24} color="black" />
import authActions from '../../redux/actions/authActions'
import carritoActions from '../../redux/actions/carritoActions'

const windowHeight = Dimensions.get('window').height;

const SubCategoriaItem = (props) => {
    const { nombre, precio } = props.producto
    const agregandoProducto = async () => {
        const response = await props.agregarProductoAlCarrito(props.userLogged, props.producto)
        // PONELE TOSTADAS DE NATIVE
        if(response.success) {
           return alert('Se agrego al carrito')
        }else{
           return alert('Este producto ya esta en el carrito')
        }
    }
    
    return (
        <View style={styles.mainContainer}>
            <ImageBackground style={styles.productImage} source={{
                    uri: props.producto.fotos[0].includes('https') ? props.producto.fotos[0] : `/fotos/${props.producto.fotos[0]}`
                }}>
            </ImageBackground>
            <View style={styles.infoContainer}>
                <View style={styles.infoProduct}>
                    <Text>{nombre.charAt(0).toUpperCase()+ nombre.slice(1, nombre.length)}</Text>
                    <Text style={styles.productPrice}>${precio}</Text>
                </View>
                <View style={styles.actionsContainer}>
                    <Ionicons name="search-outline" size={26} color="black" onPress={()=>  props.navigation.navigate('producto', {producto: props.producto})}/>
                    <SimpleLineIcons name="handbag" onPress={ ()=> agregandoProducto() } size={26} color="black" />
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