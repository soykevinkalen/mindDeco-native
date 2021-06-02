import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import { View, Dimensions, StyleSheet, Platform, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

const windowHeight = Dimensions.get('window').height;
const {width: screenWidth} = Dimensions.get('window');

import { useNavigation } from '@react-navigation/core';

import productosActions from '../../redux/actions/productosActions'

const HeroCarrousel = (props) => {
  const navigation = useNavigation();

  const categorias = [
  {
    illustration: 'https://i.imgur.com/olerOyT.jpg',
    categoria: 'dormitorio'
  },
  {
    illustration: 'https://i.imgur.com/qz6gg3K.jpg',
    categoria: 'living'
  },
  {
    illustration: 'https://i.imgur.com/GEidCU8.jpgca',
    categoria: 'baño'
  },
  {
    illustration: 'https://i.imgur.com/npFG1K3.jpg',
    categoria: 'cocina & comedor'
  },
  {
    illustration: 'https://i.imgur.com/CxDkjrK.jpg',
    categoria: 'jardin'
  }
  ];

  const [entries, setEntries] = useState([]);

  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  const handleCategorias = (categoria) => {
      props.obtenerProductosPorCategoria(categoria)
      navigation.navigate('categoria')
  }

  useEffect(() => {
    setEntries(categorias);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <TouchableWithoutFeedback onPress={ () => handleCategorias(item.categoria) }>
        <View style={styles.item}>
          <ParallaxImage
            source={{uri: item.illustration}}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.2}
            {...parallaxProps}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        loop={true}
        autoplay={true}
        autoplayInterval={8000}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
      productosCategoria: state.productosReducer.productosCategoria
  }
}

const mapDispatchToProps = {
  obtenerProductosPorCategoria: productosActions.obtenerProductosPorCategoria
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroCarrousel);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -1
  },
  item: {
    width: screenWidth ,
    height: windowHeight,
    zIndex: -1
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    zIndex: -1
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    zIndex: -1
  },
});