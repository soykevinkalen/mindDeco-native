import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { AuthStack, CarritoStack, HomeStack } from './Stack';
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux';
import DrawerContent from './DrawerContent'
import authActions from '../redux/actions/authActions'
import Toast from 'react-native-toast-message';

const Drawer = createDrawerNavigator();

const MyDrawer = (props) => {
    const getTokenStoraged = async () => {
        try {
            let token = await AsyncStorage.getItem('token')
            return token
        } catch(e) {
            Toast.show({
                text1: 'Oops!',
                text2: 'Error interno del servidor, intenta más tarde por favor',
                type: 'error'
            });
            console.log(e)
        }
    }

    const getObjectStoraged = async () => {
        try {
            let userStoraged = await AsyncStorage.getItem('userLogged')
            return JSON.parse(userStoraged)
        } catch (e) {
            Toast.show({
                text1: 'Oops!',
                text2: 'Error interno del servidor, intenta más tarde por favor',
                type: 'error'
            });
            console.log(e)
        }
    }

    const getDataStoraged = async () => {
        if(!props.userLogged && getTokenStoraged) {
            try {
                let userStoraged = await getObjectStoraged()
                let token = await getTokenStoraged()
                const userStorageObj = {
                    token,
                    ...userStoraged
                }
                if(userStoraged && token) {
                    props.logInForced(userStorageObj)
                }
            } catch(e) {
                Toast.show({
                text1: 'Oops!',
                text2: 'Error interno del servidor, intenta más tarde por favor',
                type: 'error'
            });
                console.log(e)
            }
        }
    }

    useEffect(() => {
        getDataStoraged()
    }, [])

    return(
        <>  
            <Drawer.Navigator
                drawerStyle={{
                    backgroundColor: '#eeeeee',
                    width: '50%'
                }}
                drawerContent={props => <DrawerContent {...props} />}
            >
                <Drawer.Screen name='home' component={ HomeStack } options={{
                    drawerIcon: () => ( <Ionicons name="home-sharp" size={24} color={'#000100'}/> ),
                    title: 'Inicio'
                }} />

                <Drawer.Screen name='carrito' component={ CarritoStack } options={{
                    drawerIcon: () => ( <Ionicons name="cart" size={24} color={'#000100'}/> ),
                    title: 'Carrito'
                }} />

                {
                    !props.userLogged && <Drawer.Screen name='access' component={ AuthStack } options={{
                        drawerIcon: () => ( <Ionicons name="key" size={24} color={'#000100'}/> ),
                        title: 'Ingresar'
                    }}/>
                }
    
            </Drawer.Navigator>
        </>
    )
}

const mapStateToProps = state => {
return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    logInForced: authActions.logInForced,
    logOutUser: authActions.logOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDrawer);