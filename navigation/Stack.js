import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'

import Home from '../screens/Home/Home'
import Access from '../screens/Auth/Access'
import SignIn from '../screens/Auth/SignIn'
import SignUp from '../screens/Auth/SignUp'

const Stack = createStackNavigator()

export const HomeStack = () => {
    return (    
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='home' component={Home} options={{
                title: 'Home'
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
