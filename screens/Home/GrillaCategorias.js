import React from 'react'
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native'

const GrillaCategorias = () => {
    return (
        <View style={styles.gridContainer}>
            <View style={styles.rowImageContainer}>
                <ImageBackground style={styles.imageContainer} source={{
                    uri: 'https://i.imgur.com/4EzRXgv.jpg'
                }}>
                    <View style={styles.textGridImageContainer}>
                        <Text style={styles.textGridImage}>Hola jefa</Text>
                    </View>
                </ImageBackground>
                <ImageBackground style={styles.imageContainer} source={{
                    uri: 'https://i.imgur.com/4EzRXgv.jpg'
                }}>
                    <View style={styles.textGridImageContainer}>
                        <Text style={styles.textGridImage}>Hola jefa</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.rowImageContainer}>
                <ImageBackground style={styles.imageContainer} source={{
                    uri: 'https://i.imgur.com/4EzRXgv.jpg'
                }}>
                    <View style={styles.textGridImageContainer}>
                        <Text style={styles.textGridImage}>Hola jefa</Text>
                    </View>
                </ImageBackground>
                <ImageBackground style={styles.imageContainer} source={{
                    uri: 'https://i.imgur.com/4EzRXgv.jpg'
                }}>
                    <View style={styles.textGridImageContainer}>
                        <Text style={styles.textGridImage}>Hola jefa</Text>
                    </View>
                </ImageBackground>
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

export default GrillaCategorias