import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import BackConCarrito from '../utilities/BackConCarrito'
import SubCategoriaItem from './SubCategoriaItem'

import authActions from '../../redux/actions/authActions'

const windowHeight = Dimensions.get('window').height;

const SubCategorias = (props) => {
    let subcategorias = []
    if(props.route.params.componente === 'grilla') {
        subcategorias = props.route.params.productos
    } else {
        subcategorias = props.productosCategoria.filter(producto => producto.subcategoria === props.route.params.subcategoria)
    }
    
    return (
        <>
            <BackConCarrito navigateTo={props.route.params.componente === 'grilla' ? 'home' : 'categoria'}/>
            <ScrollView style={styles.mainContainer}>
                {
                    subcategorias.map(producto => <SubCategoriaItem navigation={props.navigation} key={producto._id} producto={producto} />)
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    categoriaItemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%'
    },
    mainContainer: {
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