import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const ENTRIES1 = [
  {
    illustration: 'https://i.imgur.com/4EzRXgv.jpg',
  },
  {
    illustration: 'https://i.imgur.com/EFuiHfL.jpg',
  },
  {
    illustration: 'https://i.imgur.com/P1xFN88.jpg',
  },
  {
    illustration: 'https://i.imgur.com/ziBtGrl.jpg',
  }
];
const windowHeight = Dimensions.get('window').height;
const {width: screenWidth} = Dimensions.get('window');

const HeroCarrousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.2}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
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

export default HeroCarrousel;

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