import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, View, StyleSheet, ImageBackground, Text } from 'react-native'
import { connect } from 'react-redux'
import BackConCarrito from '../utilities/BackConCarrito'


import authActions from '../../redux/actions/authActions'

const windowHeight = Dimensions.get('window').height;

const SubCategoriaItem = (props) => {
    // console.log(props.producto)
    return (
        <View style={styles.mainContainer}>
            <ImageBackground style={styles.productImage} source={{
                    uri: props.producto.fotos[0]
                }}>
                    <Text>{props.producto.nombre}</Text>
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
        minHeight: windowHeight,
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
        productosCategoria: state.productosReducer.productosCategoria
    }
}

const mapDispatchToProps = {
    logOutUser: authActions.logOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoriaItem);