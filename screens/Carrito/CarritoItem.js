import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const CarritoItem = (props) => {
    const { cantidad, idProducto: { fotos, nombre, precio } } = props.producto

    return (
        <View style={styles.mainContainer}>
            <ImageBackground style={styles.productImage} source={{
                uri: fotos[0]
            }}></ImageBackground>
            
            <View></View>

        </View>
    )
}

const styles = StyleSheet.create({
    productImage: {
        width: 65,
        height: 65
    },
    mainContainer: {
        width: '95%',
        height: 100,
        backgroundColor: 'red',
        marginVertical: 5,
        justifyContent: 'center',
        paddingHorizontal: 10
    }
})
export default CarritoItem;