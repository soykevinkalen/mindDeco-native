import React, { useEffect, useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';

import itinerariesActions from '../../redux/actions/itinerariesActions'

const Comment = (props) => {

    const {userComments} = props
    let token;
    if(props.userLogged) {
        token = props.userLogged.token;
    }
    const {_id, user, userImg, message} = props.comment
    const [updateMessage, setUpdateMessage] = useState(false)
    const [newMessage, setNewMessage] = useState(message)
    const [isOwner, setIsOwner] = useState(false)
    const [showOptions, setShowOptions] = useState(false)

    useEffect( () => {
        userComments.length > 0 && setIsOwner(userComments)
    }, [])

    let validateOwnerComment = userComments.some(id => id === _id)

    const handleNewMessage = (text) => {
        setNewMessage(text)
    }

    const handleClose = () => {
        setShowOptions(!showOptions)
        setUpdateMessage(!updateMessage)
    }

    const sendNewMessage = async () => {
        if(props.userLogged) {
            if(message.length > 0) {
                const response = await props.updateComment(_id, token, newMessage)
                if(response.data.success) {
                    props.setComments(response.data.response)
                } else {
                    alert(response.data.error)
                }
                setShowOptions(!showOptions)
                setUpdateMessage(!updateMessage)
            } else {
                alert('The message is empty')
            }
        } else {
            alert('You must be logged in to update a message')
        }
    }

    const showDeleteComment = () => {
        Alert.alert(
            "¿Confirm delete?",
            "This action cannot be reverted",
            [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "Confirm delete",
                onPress: () => removeComment(),
                style: "delete",
              },
            ],
            {
              cancelable: true
            }
          );
    }
    
    const removeComment = async () => {
        if(props.userLogged) {
            const response = await props.removeComment(_id, token)
            if(response.data.success) {
                props.setComments(response.data.response)
            } else {
                alert(response.data.error)
            }
        } else {
            alert('You must be logged in to remove a message')
        }
    }

    return (
        <View style={styles.commentContainer}>
            <View style={styles.upperContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.userImage} source={{
                        uri: userImg
                    }} />
                </View>
                <View style={styles.userContainer}>
                    <Text style={styles.userText}>{user}</Text>
                </View>

                { validateOwnerComment && <View style={styles.optionsContainer}>
                    <Ionicons name="ellipsis-horizontal" size={24} color="white" onPress={() => setShowOptions(!showOptions)} />
                        {   showOptions && <>
                                { !updateMessage
                                    ? <View style={styles.innerOptionsContainer}>
                                        <TouchableWithoutFeedback onPress={() => setUpdateMessage(!updateMessage)}>
                                            <Ionicons name="create-outline" size={28} color="white"/>
                                        </TouchableWithoutFeedback>
                                        <TouchableWithoutFeedback onPress={showDeleteComment}>
                                            <Ionicons name="trash-outline" size={28} color="white"/>
                                        </TouchableWithoutFeedback>
                                    </View>
                                    : <View style={styles.innerOptionsContainer}>
                                        <TouchableWithoutFeedback onPress={sendNewMessage}>
                                            <Ionicons name="checkmark-sharp" size={28} color="white"/>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback onPress={handleClose}>
                                            <Ionicons name="close-sharp" size={28} color="white"/>
                                        </TouchableWithoutFeedback>
                                    </View>
                                }
                            </>
                        }
                    </View>
                }

            </View>
            <View style={styles.midContainer}>
                {
                    !updateMessage
                    ? <View style={styles.messageContainer}>
                        <Text style={styles.textMessage}>{message}</Text>
                    </View>
                    : <View style={styles.messageContainer}>
                        <TextInput onChangeText={handleNewMessage} value={newMessage} style={[styles.textEditing]}></TextInput>
                    </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    innerOptionsContainer: {
        position: 'absolute',
        margin: 5,
        width: 80,
        top: 14,
        left: -40,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textMessage: {
        color: '#eeeeee',
        width: '90%',
        marginTop: 4
    },
    textEditing: {
        color: '#76CAF5',
        width: '90%',
        fontWeight: 'bold'
    },
    messageContainer:{
        padding: 10,
        minHeight: 60,
        paddingLeft: 20
    },
    imageContainer: {
        flex: 1
    },
    userContainer: {
        flex: 8,
        marginLeft: 14,
        marginTop: 4
    },
    optionsContainer: {
        flex: 1,
        position: 'relative'
    },
    userText: {
        fontWeight: 'bold',
        color: '#eeeeee'
    },
    commentContainer: {
        width: '95%',
        margin: 10,
        marginVertical: 6,
        backgroundColor: '#003651',
        borderRadius: 4
    },
    upperContainer: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#4692B7'
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 30
    },
    midContainer: {
        width: '100%'
    }
    
})

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    removeComment: itinerariesActions.removeComment,
    updateComment: itinerariesActions.updateComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);