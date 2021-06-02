import React from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableHighlight, TouchableWithoutFeedback, ImageBackground } from 'react-native'
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
                <ImageBackground style={styles.upperContainer} source={{
                    uri: 'https://i.pinimg.com/564x/b3/66/f3/b366f36cf0105d1269da64673aaa5b2f.jpg'
                }}>
                    {/* <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require('../../assets/logo.png')}></Image>
                    </View> */}
                    <View style={styles.subContainer}>                        
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>Renová y disfrutá más todos tu espacios.</Text>
                            {/* <Text style={styles.text}>Al registrarte o ingresar, aceptas nuestros terminos de uso y almacenamiento de cookies.</Text> */}
                        </View>
                        <View>
                            <TouchableWithoutFeedback onPress={ () => navigation.navigate('signin')}>
                                <View style={styles.accessEmailBtn}>
                                    <Ionicons style={styles.iconMail} name="mail-outline" size={28} color="white" />
                                    <Text style={styles.textEmail}>Ingresar con email</Text>
                                    <View></View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={ () => console.log('Has tu magia Kalensinho') }>
                                <View style={[styles.accessEmailBtn, styles.accessBtnGoogle]}>
                                    <Ionicons style={styles.iconMail} name="logo-google" size={28} color="white" />
                                    <Text style={[styles.textEmail, styles.textGoogle]}>Ingresar con Google</Text>
                                    <View></View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </ImageBackground>
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
    subContainer: {
        height: '37%',
        justifyContent: 'space-between',
        marginTop: 115
    },
    accessEmailBtn: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#00000099',
        padding: 12,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    textGoogle: {

    },
    accessBtnGoogle: {
        borderColor: 'red'
    },
    textEmail: {
        color: '#fff',
        paddingRight: 15,
        fontSize: 14,
        fontWeight: 'bold'
    },
    iconMail: {
        paddingLeft: 10
    },
    mainContainer: {
        backgroundColor: '#fff',
        minHeight: windowHeight,
        width: '100%',
        justifyContent: 'center'
    },
    accessContainer: {
        justifyContent: 'center',
        padding: 8,
        height: '40%'
    },
    upperContainer: {
        height: windowHeight,
        padding: 20
    },
    imageContainer: {
        width: '100%',
        height: 100,
    },
    image: {
        width: 300,
        height: 80
    },
    textContainer: {
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28
    },
    text: {
        color: 'gray',
        fontSize: 12,
        marginVertical: 8,
        padding: 2
    },

})



export default connect(mapStateToProps, mapDispatchToProps)(Access);