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
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Productos por</Text><Text style={[styles.title, styles.titleColor]}>Categoría</Text>
            </View>
            <View style={styles.rowImageContainer}>
                <TouchableOpacity style={styles.imageContainer} onPress={() => handleSubcat('textil')}>
                    <ImageBackground style={styles.imageContainer} source={{
                        uri: 'https://cdn.discordapp.com/attachments/847145463417143341/850574447122317392/unknown.png'
                    }}>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.imageContainer} onPress={() => handleSubcat('vajillas')}>
                    <ImageBackground style={styles.imageContainer} source={{
                        uri: 'https://cdn.discordapp.com/attachments/847670056439119873/850568111098429460/unknown.png'
                    }}>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={styles.rowImageContainer}>
                <TouchableOpacity style={styles.imageContainer} onPress={() => handleSubcat('decoración')}>
                    <ImageBackground style={styles.imageContainer} source={{
                        uri: 'https://cdn.discordapp.com/attachments/847670056439119873/850566884965351454/unknown.png'
                    }}>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.imageContainer} onPress={() => handleSubcat('muebles')}>
                    <ImageBackground style={styles.imageContainer} source={{
                        uri: 'https://cdn.discordapp.com/attachments/847145463417143341/850573842078236682/unknown.png'
                    }}>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 6,
        marginTop: 12
    },
    titleColor: {
        color: '#C9B687',
        fontSize: 26,
        fontWeight: '500'
    },
    title: {
        fontSize: 22,
        marginHorizontal: 2.5
    },
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
        marginTop: 20,
        marginBottom: 30
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