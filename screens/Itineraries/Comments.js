import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'

import itinerariesActions from '../../redux/actions/itinerariesActions'
import Comment from './Comment'
import { Ionicons } from '@expo/vector-icons';


const Comments = (props) => {
    const {userComments, renderUserLikesComments} = props
    const [message, setMessage] = useState({
        message: ''
    })

    const [comments, setComments] = useState(props.comments)

    const handleMessage = (text) => {
        setMessage({
            message: text
        })
    }
    
    const sendCommentObj = async () => {
        let commentObj;
        let response;

        if(props.userLogged) {
            if(message.message.length > 0) {
                commentObj = {
                    message: message.message,
                    itinerary_id: props.id,
                    token: props.userLogged.token
                }
                response = await props.handleComments(commentObj)
                setComments(response.data.response.comments)
                renderUserLikesComments()
                setMessage({message: ''})
            } else {
                alert('The message is empty')
            }
        } else {
            alert('You must be logged in to comment')
        }
    }
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Reviews & Experiences</Text>

            {/* comments */}
                <View style={styles.commentContainer}>
                    <ScrollView contentContainerStyle={{flexGrow: 1}}>
                            {
                                comments.length > 0 && comments.map(comment => {
                                    return <Comment key={comment._id} setComments={setComments} userComments={userComments} setMessage={setMessage} comment={comment} />
                                })
                            }
                    </ScrollView>
                </View>

            <View style={styles.inputChatContainer}>
                {
                props.userLogged
                ? <View style={styles.inputContainer}>
                    <TextInput placeholder='Share your experience here..' onSubmitEditing={ sendCommentObj } value={message.message} onChangeText={ handleMessage }></TextInput>    
                </View>
                : <View style={styles.inputContainerNoLogged}>
                    <Text>You must be logged in to comment</Text>    
                </View>
                }
                <View style={styles.sendIconContainer}>
                    <Ionicons name="paper-plane" size={24} color={props.userLogged ? "white" : 'gray'} onPress={ sendCommentObj } />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    commentContainer: {
        width: '100%',
    },
    inputContainerNoLogged:{
        flex: 8,
        backgroundColor: '#cccccc99',
        padding: 7,
        borderRadius: 2
    },
    sendIconContainer: {
        flex: 1,
        alignItems: 'center'
    },
    inputContainer:{
        flex: 8,
        backgroundColor: '#cccccc',
        padding: 6,
        borderRadius: 2
    },
    inputChatContainer: {
        alignItems: 'center',
        alignContent: 'center',
        width: '89%',
        height: 50,
        flexDirection: 'row'
    },
    chatContainer: {
        height: 200,
        width: '100%',
        backgroundColor: 'red',
        borderRadius: 1
    },
    mainContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    text: {
        color: '#cecece',
        marginHorizontal: 6
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 20,
        marginBottom: 8
    },
})


const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    handleComments: itinerariesActions.handleComments,
    getCityItineraries: itinerariesActions.getCityItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);