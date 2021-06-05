import React from 'react'
import { View, StyleSheet, Image, Text, ImageBackground, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/core';

import productosActions from '../../redux/actions/productosActions'

const GrillaCategorias = (props) => {
    const navigation = useNavigation();

    const handleSubcat = (subcat) => {
        const filteredSubcats = props.todosLosProductos.filter(prod => prod.subcategoria === subcat)
        navigation.navigate('subcategorias', {productos: filteredSubcats, componente: 'grilla'})
    }

    return (
        <View style={styles.gridContainer}>
            <View style={styles.rowImageContainer}>
                <TouchableOpacity style={styles.imageContainer} onPress={() => handleSubcat('textil')}>
                    <ImageBackground style={styles.imageContainer} source={{
                        uri: 'https://i.imgur.com/VsEFghf.jpg'
                    }}>
                        <View style={styles.textGridImageContainer}>
                            <Text style={styles.textGridImage}>Textil</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.imageContainer} onPress={() => handleSubcat('muebles')}>
                    <ImageBackground style={styles.imageContainer} source={{
                        uri: 'https://i.imgur.com/4EzRXgv.jpg'
                    }}>
                        <View style={styles.textGridImageContainer}>
                            <Text style={styles.textGridImage}>Mueble</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={styles.rowImageContainer}>
                <TouchableOpacity style={styles.imageContainer} onPress={() => handleSubcat('vajillas')}>
                    <ImageBackground style={styles.imageContainer} source={{
                        uri: 'https://i.imgur.com/4EzRXgv.jpg'
                    }}>
                        <View style={styles.textGridImageContainer}>
                            <Text style={styles.textGridImage}>Vajilla</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer} onPress={() => handleSubcat('decoración')}>
                    <ImageBackground style={styles.imageContainer} source={{
                        uri: 'https://i.imgur.com/4EzRXgv.jpg'
                    }}>
                        <View style={styles.textGridImageContainer}>
                            <Text style={styles.textGridImage}>Decoración</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textGridImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: '100%',
        height: '100%'
    },
    gridContainer: {
        marginTop: 75,
        marginBottom: 75
    },
    rowImageContainer: {
        flexDirection: 'row',
        width: '50%',
        height: 200
    }
})

const mapStateToProps = state => {
    return {
        todosLosProductos: state.productosReducer.todosLosProductos
    }
}

const mapDispatchToProps = {
    fetchearSubcategorias: productosActions.obtenerProductosPorSubcategoria,
}

export default connect(mapStateToProps, mapDispatchToProps)(GrillaCategorias)