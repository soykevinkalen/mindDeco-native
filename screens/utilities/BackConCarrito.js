import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 

import authActions from '../../redux/actions/authActions'

import { useNavigation } from '@react-navigation/core';

const BackConCarrito = (props) => {
    const navigation = useNavigation();
    const [modalOptions, setModalOptions] = useState(false)

    const handleAccess = () => {
        navigation.navigate('access')
        setModalOptions(!modalOptions)
    }

    console.log(props)
    
    return (
        <View style={styles.navbar}>
            <View style={styles.innerNavbar}>
                <View style={styles.menuHambContainer}>
                    <Ionicons name="chevron-back" size={32} color='white' onPress={ () => navigation.navigate(props.navigateTo)} />
                    <Text style={styles.textMenuHamb}>{props.userLogged && `Hola ${props.userLogged.nombre}!`}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 8, position: 'relative'}}>
                    <SimpleLineIcons onPress={ () => setModalOptions(!modalOptions) } style={{marginRight: 16}} name="user" size={22} color="white" />
                    <SimpleLineIcons name="handbag" size={22} color="white" />

                    <View style={styles.itemsInCart}>
                        <Entypo name="dot-single" size={10} color="red" />
                    </View>
                    

                    { modalOptions && <View style={styles.modalUserOptions}>
                            <TouchableWithoutFeedback>
                                {
                                !props.userLogged
                                ? <TouchableWithoutFeedback onPress={ handleAccess }>
                                    <View style={styles.accessContainer}>
                                        <Text>INGRESAR</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                : <View style={styles.accessContainerLogged}>
                                    <TouchableWithoutFeedback>
                                        <Text>MIS PEDIDOS</Text>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback>
                                        <Text>INFO PERSONAL</Text>
                                    </TouchableWithoutFeedback>
                                    
                                    <TouchableWithoutFeedback onPress={ props.logOutUser }>
                                        <Text>CERRAR SESION</Text>
                                    </TouchableWithoutFeedback>
                                </View>
                                }
                            </TouchableWithoutFeedback>
                        </View>
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemsInCart: {
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: 10,
        right: -4,
        top: 22
    },
    modalUserOptions: {
        position: 'absolute',
        right: -12,
        top: 37,
        backgroundColor: 'white',
        padding: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        zIndex: 999
    },
    accessContainer: {
        minHeight: 25,
        minWidth: 110,
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 999
    },
    accessContainerLogged: {
        minHeight: 65,
        minWidth: 110,
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 999
    },
    menuHambContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textMenuHamb: {
        color: 'white'
    },
    userImage: {
        width: 30,
        height: 30,
        borderRadius: 30,
        overflow: 'hidden'
    },
    innerNavbar: {
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navbar: {
        width: '100%',
        height: 50,
        backgroundColor: "black",
        justifyContent: 'flex-end',
        paddingBottom: 2,
        zIndex: 888
    }
})

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    logOutUser: authActions.logOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(BackConCarrito);