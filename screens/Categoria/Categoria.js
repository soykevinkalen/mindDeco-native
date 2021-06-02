import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import BackConCarrito from '../utilities/BackConCarrito'
import CategoriaItem from './CategoriaItem'

const windowHeight = Dimensions.get('window').height;

const Categoria = (props) => {
    const [articulos, setArticulos] = useState([])

    useEffect(() => {
        props.productosCategoria.map(articulo => {
            if(articulos.indexOf(articulo.subcategoria) == -1) {
                setArticulos([...articulo])
            }
        })
    }, [])

    return (
        <ScrollView style={styles.mainContainer}>
            <BackConCarrito navigateTo='home' props={props} />
            <View style={styles.categoriaItemContainer}>
                {   articulos.length > 0 && articulos.map((articulo, index) => {
                        return <CategoriaItem key={index} articulo={articulo} />
                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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