import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


import { Ionicons } from '@expo/vector-icons';

const Back = ({navigateTo, color, title}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={ () => navigation.navigate(navigateTo)} >
                    <Ionicons name="chevron-back" size={32} color={color} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.title}>{title ? title : null}</Text>
                </View>
                <View></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        width: '90%',
        height: 55,
        padding: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        backgroundColor: 'black'
    },
    title: {
        fontSize: 22,
        color: 'white'
    }
})

export default Back;