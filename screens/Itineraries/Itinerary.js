import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


import activitiesActions from '../../redux/actions/activitiesActions';
import itinerariesActions from '../../redux/actions/itinerariesActions';

import Activities from './Activities';
import Comments from './Comments';

const Itinerary = (props) => {

    let token;
    if(props.userLogged) {
        token = props.userLogged.token;
    }

    const {_id, authorName, authorPic, duration, hashtags, likes, price, title, comments, placeDescription, placeImg} = props.city;

    const [collapse, setCollapse] = useState(true)
    const [liked, setLiked] = useState(false)
    const [processingLike, setProcessingLike] = useState(false)
    const [counterLikes, setCounterLikes] = useState(likes)
    const [userComments, setUserComments] = useState([])

    useEffect(() => {
        props.userLogged && renderUserLikesComments()
    }, [])

    const renderUserLikesComments = async () => {
        const response = await props.getUserLikesComments(_id, props.userLogged.token);
        setLiked(response.data.likedResponse);
        setUserComments(response.data.commentResponse);
    }

    const handleLike = async () => {
        if(props.userLogged) {
            if(!processingLike) {
                setProcessingLike(true)
                setLiked(!liked)
                const response =  await props.updateLikes(_id, token)
                setCounterLikes(response.data.response.likes)
                setProcessingLike(false)
            }
        } else {
            alert('You must be logged in to like an itinerary')
        }
    }
 
    const handleActivities = () => {
        setCollapse(!collapse)
    }

    const getCountIcons = (variable) => {
        let aux = [];
        for(let i=0; i < variable; i++) {
            aux.push(i)
        }
        return aux;
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.likesContainer}>
                    <Ionicons name={liked ? "heart" : "heart-outline"} size={24} color={liked ? "red" : "white"} onPress={handleLike} />
                    <Text style={styles.text} >{counterLikes}</Text>
                </View>
            </View>
            <View style={styles.userContainer}>
                <Image style={styles.userImg} source={{ uri: authorPic }}/>
                <Text style={styles.text}>From {authorName}</Text>
            </View>
            <View style={styles.priceDurationContainer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.text}>Avg cost: </Text>
                    {
                        getCountIcons(price).map((element, index) => {
                            return <MaterialCommunityIcons style={styles.usdIcon} key={index} name="currency-usd-circle-outline" size={24} />
                        })
                    }
                </View>
                <View>
                    <Text style={styles.text}>Duration: {duration} hs.</Text> 
                </View>
            </View>
            <View>
                <Text style={styles.title}>About</Text>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>{placeDescription}</Text>
                </View>
                <Text style={styles.hashtags}>{hashtags}</Text>

            </View>

            {   
                !collapse
                && <>
                    <Activities id={props.city._id}/>
                    <Comments comments={comments} userComments={userComments} renderUserLikesComments={renderUserLikesComments} setUserComments={setUserComments} id={props.city._id}/>
                </>
            }

            <View style={styles.btnContainer}>
                <TouchableHighlight onPress={() => handleActivities()}><Text style={styles.btnViewMore}>{collapse ? 'View more' : 'View less'}</Text></TouchableHighlight>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        alignItems: 'center'
    },
    btnViewMore: {
        backgroundColor: 'white',
        color: 'black',
        width: 100,
        overflow: 'hidden',
        textAlign: 'center',
        borderRadius: 4,
        marginTop: 20,
        padding: 6,
        fontWeight: 'bold'
    },
    hashtags: {
        color: '#73BAE3',
        paddingLeft: 20
    },
    descriptionContainer: {
        alignItems: 'center',
        marginBottom: 12
    },
    description:{
        color: '#cecece',
        width: '90%'
    },
    usdIcon: {
        color: '#0BEC07'
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4
    },
    priceDurationContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        padding: 16
    },
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8
    },
    text: {
        color: '#cecece',
        marginHorizontal: 6
    },
    userImg: {
        width: 30,
        height: 30,
        borderRadius: 25
    },
    userContainer: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 20,
        fontSize: 20
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 20
    },
    mainContainer: {
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
        marginTop: 30,
        marginBottom: 30
    }
})


const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    getItineraryActivities: activitiesActions.getItineraryActivities,
    updateLoadingState: activitiesActions.updateLoadingState,
    updateLikes: itinerariesActions.updateLikes,
    getUserLikesComments: itinerariesActions.getUserLikesComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);