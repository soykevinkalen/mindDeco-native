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
    illustration: 'https://i.pinimg.com/564x/05/cb/e6/05cbe6391d453d94713ec2e674df4f0f.jpg',
    categoria: 'dormitorio'
  },
  {
    illustration: 'https://i.pinimg.com/564x/fe/88/95/fe8895b3d668271af22ed289bd2df725.jpg',
    categoria: 'living'
  },
  {
    illustration: 'https://cdn.discordapp.com/attachments/819989635764584488/848994218977263626/687f1edb2b31a015b6d7e8ffcc9e6b03.png',
    categoria: 'cocina & comedor'
  },
  {
    illustration: 'https://images.pexels.com/photos/6620856/pexels-photo-6620856.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    categoria: 'baño'
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