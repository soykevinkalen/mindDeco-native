import React from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView, ImageBackground } from 'react-native'

const windowHeight = Dimensions.get('window').height;

const CategoriaItem = ({subcategoria}) => {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground style={styles.imageContainer} source={{
                uri: 'https://i.pinimg.com/236x/48/f5/9e/48f59eb5dab501a8c802d609d2857d50.jpg'
            }}>
                <Text>{subcategoria}</Text>
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