import React from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'

const windowHeight = Dimensions.get('window').height;

const CategoriaItem = ({subcategoria, navigation}) => {
    return (
        // le puse el TouchableOpacity porque el onPress() no anda en el View, aparte del opacity hay otros colores
        <TouchableOpacity style={styles.mainContainer} onPress={()=> navigation.navigate('subcategorias', {subcategoria: subcategoria.subcategoria})}>
            <ImageBackground style={styles.imageContainer} source={{
                uri: `${subcategoria.fotos[0]}`
            }}>
                {/* <Text style={styles.textCategoria}>{subcategoria.subcategoria.replace(/\b\w/g, l => l.toUpperCase())}</Text> */}
                <Text style={styles.textCategoria}>{subcategoria.subcategoria.charAt(0).toUpperCase()+ subcategoria.subcategoria.slice(1, subcategoria.subcategoria.length)}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '50%',
        height: 200
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCategoria: {
        backgroundColor: '#00000050',
        width: '85%',
        padding: 2,
        textAlign: 'center',
        color: 'white',
        fontSize: 18
    }
})

export default CategoriaItem