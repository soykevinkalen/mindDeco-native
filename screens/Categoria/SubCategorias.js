import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import BackConCarrito from '../utilities/BackConCarrito'
import SubCategoriaItem from './SubCategoriaItem'

import authActions from '../../redux/actions/authActions'

const windowHeight = Dimensions.get('window').height;

const SubCategorias = (props) => {
    const subcategorias = props.productosCategoria.filter(producto => producto.subcategoria === props.route.params.subcategoria)
    // console.log('SubCategorias.js ',subcategorias)
    
    return (
        <ScrollView style={styles.mainContainer}>
            <BackConCarrito navigateTo='home'/>
            
            {
                subcategorias.map(producto => <SubCategoriaItem navigation={props.navigation} key={producto._id} producto={producto} />)
            }
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    categoriaItemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%'
    },
    mainContainer: {
        minHeight: windowHeight,
        width: '100%'
    }
})

const mapStateToProps = state => {
    return {
        productosCategoria: state.productosReducer.productosCategoria
    }
}

const mapDispatchToProps = {
    logOutUser: authActions.logOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SubCategorias);