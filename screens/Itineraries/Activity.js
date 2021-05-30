import React from 'react'
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

 const Activity = (props) => {
    const {activityPic, title} = props.activity
    
    return (
        <View>
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={{
                    uri: activityPic
                }}>

                    {/* <View style={styles.textContainer}>
                        <Text style={styles.text}>{title}</Text>
                    </View> */}
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 200,
        marginRight: 3,
        overflow: 'hidden',
        borderRadius: 2
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 170,
        backgroundColor: '#000607',
        height: 30,
        width: 300,
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Activity;