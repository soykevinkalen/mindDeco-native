import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'

import Home from '../screens/Home/Home'
import Access from '../screens/Auth/Access'
import SignIn from '../screens/Auth/SignIn'
import SignUp from '../screens/Auth/SignUp'
import Categoria from '../screens/Categoria/Categoria'
import Carrito from '../screens/Carrito/Carrito'

const Stack = createStackNavigator()

export const HomeStack = () => {
    return (    
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='home' component={Home} options={{
                title: 'Inicio'
            }} />
            <Stack.Screen name='categoria' component={Categoria}/>
        </Stack.Navigator>
    )
}

export const CarritoStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='carrito' component={Carrito} options={{
                title: 'Ir a carrito'
            }} />
        </Stack.Navigator>
    )
}

export const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='access' component={Access} options={{
                title: 'Access'
            }}/>
            <Stack.Screen name='signin' component={SignIn} />
            <Stack.Screen name='signup' component={SignUp} />
        </Stack.Navigator>
    )
}
