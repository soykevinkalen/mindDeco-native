import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const CarritoItem = (props) => {
    const { cantidad, idProducto: { fotos, nombre, precio } } = props.producto

    console.log(props)
    return (
        <View style={styles.mainContainer}>
            <ImageBackground style={styles.productImage} source={{
                uri: fotos[0]
            }}></ImageBackground>
            <View style={styles.infoContainer}>
                <View style={styles.upperContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{nombre.charAt(0).toUpperCase()+ nombre.slice(1, nombre.legth)}</Text>
                    </View>
                    <View style={styles.removeItemContainer}>
                        <Ionicons name="close-circle-sharp" size={22} color="black" onPress={ () => console.log('hola') } />
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.totalContainer}>
                        <View style={styles.removeContainer}>
                            <Text style={styles.remove}>-</Text>
                        </View>
                        <View style={styles.totalInnerContainer}>
                            <Text style={styles.total}>{cantidad}</Text>
                        </View>
                        <View style={styles.addContainer}>
                            <Text style={styles.add}>+</Text>
                        </View>
                    </View>
                    <View style={styles.counterContainer}></View>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    totalInnerContainer: {
        justifyContent: 'center'
    },
    addContainer: {
        justifyContent: 'center',
        borderTopEndRadius: 4,
        borderBottomEndRadius: 4,
        overflow: 'hidden'
    },
    removeContainer: {
        justifyContent: 'center',
        borderBottomStartRadius: 4,
        borderTopStartRadius: 4,
        overflow: 'hidden'
    },
    total:{
        backgroundColor: 'white',
        width: 34,
        height: 22,
        textAlign: 'center',
        fontSize: 16
    },
    remove:{
        backgroundColor: 'black',
        width: 26,
        height: 22,
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
    add:{
        backgroundColor: 'black',
        width: 26,
        height: 22,
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
    totalContainer: {
        flexDirection: 'row',
        width: 70
    },
    infoContainer: {
        width: '80%',
        height: 70,
        justifyContent: 'space-between',
        paddingLeft: 6
    },
    title: {
        fontWeight: '600'
    },
    upperContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    productImage: {
        width: 65,
        height: 65,
        marginTop: 5
    },
    mainContainer: {
        width: '95%',
        height: 75,
        backgroundColor: 'red',
        marginVertical: 5,
        paddingHorizontal: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default CarritoItem;