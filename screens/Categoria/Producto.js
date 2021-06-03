import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, View, StyleSheet, ImageBackground, Text } from 'react-native'
import { connect } from 'react-redux'
import BackConCarrito from '../utilities/BackConCarrito'
import { Ionicons } from '@expo/vector-icons';

// <IoniCons name="magnifying-glass" size={24} color="black" />
import authActions from '../../redux/actions/authActions'

const windowHeight = Dimensions.get('window').height;

const Producto = (props) => {
    // console.log(props.producto)
    
    // console.log('Producto.js', props)
    return (
        <View style={styles.mainContainer}>
            <BackConCarrito navigateTo='home'/>
            <ImageBackground style={styles.productImage} source={{
                    uri: props.route.params.producto.fotos[0]
            }}></ImageBackground>
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
        
    }
}

const mapDispatchToProps = {
    

}

export default connect(mapStateToProps, mapDispatchToProps)(Producto);