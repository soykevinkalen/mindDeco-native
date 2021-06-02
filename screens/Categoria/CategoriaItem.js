import React from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView, ImageBackground } from 'react-native'

const windowHeight = Dimensions.get('window').height;

const CategoriaItem = ({subcategoria}) => {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground style={styles.imageContainer} source={{
                uri: `${subcategoria.fotos[0]}`
            }}>
                <Text>{subcategoria.subcategoria.replace(/\b\w/g, l => l.toUpperCase())}</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '50%',
        height: 150,
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriaItem