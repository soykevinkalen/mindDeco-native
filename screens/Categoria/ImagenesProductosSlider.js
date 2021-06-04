import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'

const ImagenesProductosSlider = ({productImage}) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={{
                    uri: productImage
            }}></ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    container: {
        width: 400,
        height: 375
    }
})

export default ImagenesProductosSlider