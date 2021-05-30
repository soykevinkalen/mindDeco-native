import React, { useEffect, useState } from 'react'
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import activitiesActions from '../../redux/actions/activitiesActions'
import Activity from './Activity';

const Activities = (props) => {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        getActivities()
    }, [])

    const getActivities = async () => {
        const response = await props.getItineraryActivities(props.id)
        setActivities(response)
    }
    return (
        <View style={styles.container}>
            {/* each image */}
            <ScrollView horizontal={true} style={styles.imagesContainer}>
                {
                    activities.map((activity, index) => {
                        return <Activity key={index} activity={activity} />
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10
    },
    imagesContainer: {
        width: '90%',
        height: 200
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white'
    },
    text: {
        color: '#EEEEEE'
    }
})


const mapDispatchToProps = {
    getItineraryActivities: activitiesActions.getItineraryActivities
}

export default connect(null, mapDispatchToProps)(Activities);