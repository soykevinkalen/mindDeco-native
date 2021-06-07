import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'

import Home from '../screens/Home/Home'
import Access from '../screens/Auth/Access'
import SignIn from '../screens/Auth/SignIn'
import SignUp from '../screens/Auth/SignUp'
import Categoria from '../screens/Categoria/Categoria'
import Carrito from '../screens/Carrito/Carrito'
import SubCategorias from '../screens/Categoria/SubCategorias'
import Producto from '../screens/Categoria/Producto'
import SeccionDirecciones from '../screens/PasarelaDePago/SeccionDirecciones'
import MetodoDeEnvio from '../screens/PasarelaDePago/MetodoDeEnvio'
import MetodoDePago from '../screens/PasarelaDePago/MetodoDePago'
import ConfirmarCompra from '../screens/PasarelaDePago/ConfirmarCompra'
import CreditCard from '../screens/PasarelaDePago/CreditCard'
import PagoEnEfectivo from '../screens/PasarelaDePago/PagoEnEfectivo'

const Stack = createStackNavigator()

export const HomeStack = () => {
    return (    
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='home' component={Home} options={{
                title: 'Inicio'
            }} />
            <Stack.Screen name='categoria' component={Categoria}/>
            <Stack.Screen name='subcategorias' component={SubCategorias}/>
            <Stack.Screen name='producto' component={Producto}/>
        </Stack.Navigator>
    )
}

export const CarritoStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='carrito' component={Carrito} options={{
                title: 'Ir a carrito'
            }} />
            <Stack.Screen name='seccionDirecciones' component={SeccionDirecciones} />
            <Stack.Screen name='metodoDeEnvio' component={MetodoDeEnvio} />
            <Stack.Screen name='metodoDePago' component={MetodoDePago} />
            <Stack.Screen name='creditCard' component={CreditCard} />
            <Stack.Screen name='pagoEnEfectivo' component={PagoEnEfectivo} />
            <Stack.Screen name='confirmarCompra' component={ConfirmarCompra} />
            <Stack.Screen name='home' component={Home}/>
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