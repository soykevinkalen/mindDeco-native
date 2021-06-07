import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import BackConCarrito from '../utilities/BackConCarrito'
import CategoriaItem from './CategoriaItem'

import authActions from '../../redux/actions/authActions'

const windowHeight = Dimensions.get('window').height;

const Categoria = (props) => {
    let hash = {};
    let subsNoRep = props.productosCategoria.filter(o => hash[o.subcategoria] ? false : hash[o.subcategoria] = true);

    return (
        <ScrollView style={styles.mainContainer}>
            <BackConCarrito navigateTo='home'/>
            <View style={styles.categoriaItemContainer}>
                {   
                    subsNoRep.map((subcategoria, index) => {
                        return <CategoriaItem navigation={props.navigation} key={index} subcategoria={subcategoria} />
                    })
                }
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Categoria);