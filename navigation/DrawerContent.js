import React from 'react';
// import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
// import { Title, Drawer, } from 'react-native-paper';
import { connect } from "react-redux"
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import authActions from '../redux/actions/authActions'
import Toast from 'react-native-toast-message';

const DrawerContent = (props) =>{
    return(
        <DrawerContentScrollView
        drawerType={'back'}
                
        {...props}>
            
            <DrawerItem 
                    icon={() => (
                        <Ionicons name="home-sharp" size={24} color={'#000100'}/>
                    )}
                    label="Inicio"
                    onPress={() => {
                        props.navigation.navigate('home')}}
            />
            
            {props.user ? <>
                <DrawerItem 
                    icon={() => (
                        <Ionicons name="cart" size={24} color={'#000100'}/>
                    )}
                    label="Carrito"
                    onPress={() => {
                        props.navigation.navigate('carrito')}}
                />
                <DrawerItem 
                    icon={() => (
                        <Ionicons name="exit" size={24} color={'#000100'}/>
                    )}
                    label="Cerrar sesion"
                    onPress={() => {
                        props.logOutUser()
                        props.navigation.navigate('home')
                        Toast.show({
                            text1: 'Hasta luego!',
                            text2: 'Esperamos que vuelvas pronto',
                            type: 'success'
                        });
                    }}
                />
                </>:
                <DrawerItem 
                    icon={() => (
                        <Ionicons name="key" size={24} color={'#000100'}/>
                    )}
                    label="Ingresar"
                    onPress={() => {
                        props.navigation.navigate('access')}}
                />
            }
        </DrawerContentScrollView>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    logOutUser: authActions.logOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)