import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';


import { Ionicons } from '@expo/vector-icons';

const Back = ({navigateTo, color}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Ionicons name="chevron-back" size={32} color={color} onPress={ () => navigation.navigate(navigateTo)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        width: '90%',
        height: 60,
        paddingTop: 18,
        marginTop: 10,
        padding: 6,
    },
    container: {
        width: '100%'
    }
})

export default Back;