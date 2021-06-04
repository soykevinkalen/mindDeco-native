import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, View, StyleSheet, ImageBackground, Text } from 'react-native'
import { connect } from 'react-redux'
import BackConCarrito from '../utilities/BackConCarrito'
import { Ionicons } from '@expo/vector-icons';

// <IoniCons name="magnifying-glass" size={24} color="black" />
import authActions from '../../redux/actions/authActions'
import ImagenesProductosSlider from './ImagenesProductosSlider';

const windowHeight = Dimensions.get('window').height;

const Producto = (props) => {
    const { nombre, precio, descripcion, fotos } = props.route.params.producto
    
    return (
        <>
            <BackConCarrito navigateTo='subcategorias'/>
            <View style={styles.mainContainer}>
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
                            <Text style={styles.btnAgregarCarrito}>Agregar al carrito</Text>
                        </View>
                    </View>

                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    price: {
        fontSize: 14,
        fontWeight: 'bold'
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
        height: 135
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
        minHeight: windowHeight,
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
        height: 400,
        padding: 12
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 2
    }
})

const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = {
    

}

export default connect(mapStateToProps, mapDispatchToProps)(Producto);