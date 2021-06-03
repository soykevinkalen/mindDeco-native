import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, View, StyleSheet, ImageBackground, Text } from 'react-native'
import { connect } from 'react-redux'
import BackConCarrito from '../utilities/BackConCarrito'
import { Ionicons } from '@expo/vector-icons';

// <AntDesign name="shoppingcart" size={24} color="black" />
import authActions from '../../redux/actions/authActions'
import carritoActions from '../../redux/actions/carritoActions'

const windowHeight = Dimensions.get('window').height;

const SubCategoriaItem = (props) => {
    // console.log(props.producto)
    const agregandoProducto = async () => {
        const response = await props.agregarProductoAlCarrito(props.userLogged, props.producto)

        // PONELE TOSTADAS DE NATIVE

        // if(response.success) {
        //    return toast.success('Se agrego al carrito')
        // }else{
        //    return toast.warning('Este producto ya esta en el carrito')
        // }
    }
    // console.log('SubCategoriaItem.js',props.navigation)
    return (
        <View style={styles.mainContainer}>
            <ImageBackground style={styles.productImage} source={{
                    uri: props.producto.fotos[0]
                }}>
                    <Ionicons name="glasses" size={24} color="black" onPress={()=>  props.navigation.navigate('producto', {producto: props.producto})}/>
                    <Ionicons name="cart" size={24} color="black" onPress={()=> agregandoProducto()} />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
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
        height: 180,
        justifyContent:'center',
        alignItems:'center'
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