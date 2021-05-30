import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { AuthStack, HomeStack, CitiesStack } from './Stack';
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux';

import authActions from '../redux/actions/authActions'

const Drawer = createDrawerNavigator();

const MyDrawer = (props) => {
    const getTokenStoraged = async () => {
        try {
            let token = await AsyncStorage.getItem('token')
            return token
        } catch(e) {
            alert('Internal database error, try in a moment')
            console.log(e)
        }
    }

    const getObjectStoraged = async () => {
        try {
            let userStoraged = await AsyncStorage.getItem('userLogged')
            return JSON.parse(userStoraged)
        } catch (e) {
            alert('Internal database error, try in a moment')
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
                    props.loginWithLS(userStorageObj)
                }
            } catch(e) {
                alert('Internal database error, try in a moment')
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
                drawerType={'back'}
                drawerStyle={{
                    backgroundColor: '#eeeeee',
                    width: '50%'
                }}
            >
                <Drawer.Screen name='home' component={ HomeStack } options={{
                    drawerIcon: () => ( <Ionicons name="home-sharp" size={24} color={'#000100'}/> ),
                    title: 'Home'
                }} />
                
                {
                    !props.userLogged && <Drawer.Screen name='access' component={ AuthStack } options={{
                        drawerIcon: () => ( <Ionicons name="key" size={24} color={'#000100'}/> ),
                        title: 'Access'
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
    loginWithLS: authActions.loginWithLS
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDrawer);