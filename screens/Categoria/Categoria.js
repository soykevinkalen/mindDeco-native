import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import BackConCarrito from '../utilities/BackConCarrito'
import CategoriaItem from './CategoriaItem'

const windowHeight = Dimensions.get('window').height;

const Categoria = (props) => {
    
    // let subcategorias = props.productosCategoria.map(articulo => articulo.subcategoria)
    // let subsNoRep = Array.from(new Set(subcategorias))
    let hash = {};
    let subsNoRep = props.productosCategoria.filter(o => hash[o.subcategoria] ? false : hash[o.subcategoria] = true);
    
    return (
        <ScrollView style={styles.mainContainer}>
            <BackConCarrito navigateTo='home' props={props} />
            <View style={styles.categoriaItemContainer}>
                {   
                    subsNoRep.map((subcategoria, index) => {
                        return <CategoriaItem key={index} subcategoria={subcategoria} />
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

export default connect(mapStateToProps)(Categoria);