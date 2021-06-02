import React, { useEffect, useState } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Header from '../Header'

import carritoActions from '../../redux/actions/carritoActions'
import CarritoItem from './CarritoItem'

const Carrito = (props) => {
    const [carrito, setCarrito] = useState([])

    let precioTotal = 0
    let articulosTotales = 0

    useEffect(() => {
        productos()
    }, [])
   
    const productos = async () => {
        if(props.userLogged){
            const array = await props.obtenerProductos(props.userLogged)
            setCarrito(array.carrito)
        }else{
            props.history.push('/')
        }
    }
    
    const modificaProducto = async (producto, cantidad) => {
        if(!cantidad) return borrarProducto(producto)
        const response = await props.modificarProducto(props.userLogged, producto, cantidad)
        setCarrito(response.carrito)
    }

    const borrarProducto = async (producto) => {
        const response = await props.borrarProducto(props.userLogged, producto)
        setCarrito(response.carrito)
    }

    return (
        <>
            <Header props={props} />
            <ScrollView style={styles.mainContainer}>
                <View style={styles.productContainer}>
                    {
                        carrito.map((producto, index) => {
                        
                            precioTotal +=  producto.cantidad*producto.idProducto.precio
                            articulosTotales += producto.cantidad
                            return <CarritoItem key={index} producto={producto} borrarProducto={borrarProducto} modificaProducto={modificaProducto} />
                    })
                    }
                </View>
                
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        alignItems: 'center',
        marginVertical: 2
    }
})

const mapStateToProps = state => {
    return { 
        userLogged: state.authReducer.userLogged
     }
 }
 
 const mapDispatchToProps = {
     obtenerProductos: carritoActions.obtenerProductos,
     modificarProducto: carritoActions.modificarProducto,
     borrarProducto: carritoActions.borrarProducto
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(Carrito)