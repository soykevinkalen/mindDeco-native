import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback, TextInput, Button, TouchableOpacity } from 'react-native';

import NumericInput from 'react-native-numeric-input'
import Toast from 'react-native-toast-message';

import { Ionicons } from '@expo/vector-icons';

const CarritoItem = (props) => {
    const { cantidad, idProducto: { fotos, nombre, precio, stock } } = props.producto
    const { modificaProducto, borrarProducto } = props
    return (
        <>
            <View style={styles.mainContainer}> 
                <ImageBackground style={styles.productImage} source={{
                    uri: fotos[0]
                }}></ImageBackground>
                <View style={styles.infoContainer}>
                    <View style={styles.upperContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{nombre.charAt(0).toUpperCase()+ nombre.slice(1, nombre.length)}</Text>
                        </View>
                        <TouchableOpacity onPress={ () =>  borrarProducto(props.producto) } >
                            <View style={styles.removeItemContainer}>
                                <Ionicons name="close-circle-sharp" size={22} color="black" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomContainer}>
                        <NumericInput totalWidth={85} value={cantidad} textColor={cantidad === stock ? '#cecece' : '#000'} minValue={1} step={1} size={5} maxValue={stock} onChange={
                            (e) => {
                                if(String(e) === String(stock)){
                                    Toast.show({
                                        text1: 'Hey!',
                                        text2: 'Llegaste al limite de unidades disponibles',
                                        type: 'info'
                                      });
                                }
                                modificaProducto(props.producto, e)
                            }
                        }
                        />
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>Total: ${precio * cantidad}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    price: {
        marginTop: 17
    },
    totalInnerContainer: {
        justifyContent: 'center'
    },
    addContainer: {
        justifyContent: 'center',
        borderTopEndRadius: 4,
        borderBottomEndRadius: 4,
        overflow: 'hidden'
    },
    removeContainer: {
        justifyContent: 'center',
        borderBottomStartRadius: 4,
        borderTopStartRadius: 4,
        overflow: 'hidden'
    },
    total:{
        backgroundColor: 'white',
        width: 34,
        height: 22,
        textAlign: 'center',
        fontSize: 16
    },
    remove:{
        backgroundColor: 'black',
        width: 26,
        height: 22,
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
    add:{
        backgroundColor: 'black',
        width: 26,
        height: 22,
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
    totalContainer: {
        flexDirection: 'row',
        width: 70
    },
    infoContainer: {
        width: '80%',
        height: 70,
        justifyContent: 'space-between',
        paddingLeft: 6
    },
    title: {
        fontWeight: '600'
    },
    upperContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceContainer: {
        alignItems: 'baseline'
    },
    productImage: {
        width: 65,
        height: 65,
        marginTop: 5
    },
    mainContainer: {
        width: '95%',
        height: 82,
        borderRadius: 2,
        marginVertical: 10,
        paddingHorizontal: 8,
        paddingVertical: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,

        elevation: 4,
    }
})
export default CarritoItem;