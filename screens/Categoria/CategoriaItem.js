import React from 'react'
import { Text, View } from 'react-native'

const CategoriaItem = ({articulo}) => {
    console.log(articulo.subcategoria)
    return (
        <View>
            <Text>{articulo.subcategoria}</Text>
        </View>
    )
}
export default CategoriaItem