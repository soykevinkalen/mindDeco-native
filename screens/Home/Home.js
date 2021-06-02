import React, { useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Header from '../Header'
import HeroCarrousel from './HeroCarrousel'
import GrillaCategorias from './GrillaCategorias';

import productosActions from '../../redux/actions/productosActions'

const Home = (props) => {

    useEffect(() => {
        props.obtenerLosProductos()
    }, [])
    
    return (
        <>
        <Header props={props} />
        <ScrollView style={styles.bgBodyColor}>
            <HeroCarrousel />
            <GrillaCategorias />
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    bgBodyColor: {
        backgroundColor: "#fff"
      }
})

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged,
        todosLosProductos: state.productosReducer.todosLosProductos
    }
}

const mapDispatchToProps = {
    obtenerLosProductos: productosActions.obtenerLosProductos
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);