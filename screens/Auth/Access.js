import React from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import Header from '../Header';

const windowHeight = Dimensions.get('window').height;

const Access = (props) => {
    const navigation = useNavigation();

    return (
        <>
            <Header props={props}/>
            <View style={styles.mainContainer}>
                <View style={styles.upperContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require('../../assets/pngegg.png')}></Image>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Sign in to get your dreams started.</Text>
                        <Text style={styles.text}>By proceeding, you agree to our Terms of Use and confirm you have read our Privacy and Cookie Statement.</Text>
                    </View>
                </View>
                <TouchableHighlight onPress={ () => navigation.navigate('signin')}>
                    <View style={styles.accessEmailBtn}>
                        <Ionicons style={styles.iconMail} name="mail-outline" size={28} color="white" />
                        <Text style={styles.textEmail}>Continue with email</Text>
                        <View></View>
                    </View>
                </TouchableHighlight>
            </View>
        </>
    )
}

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    
}

const styles = StyleSheet.create({
    accessEmailBtn: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        borderRadius: 30
    },
    textEmail: {
        color: 'white',
        paddingRight: 15,
        fontWeight: 'bold'
    },
    iconMail: {
        paddingLeft: 10
    },
    mainContainer: {
        backgroundColor: '#000115',
        minHeight: windowHeight,
        width: '100%',
        padding: 20
    },
    accessContainer: {
        justifyContent: 'center',
        padding: 8,
        height: '40%',
        backgroundColor: 'red'
    },
    upperContainer: {
        height: '40%'
    },
    imageContainer: {
        width: '100%',
        height: 100,
    },
    image: {
        width: 70,
        height: 70
    },
    textContainer: {
    
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28
    },
    text: {
        color: '#cecece',
        fontSize: 12,
        marginVertical: 8,
        padding: 2
    },

})



export default connect(mapStateToProps, mapDispatchToProps)(Access);