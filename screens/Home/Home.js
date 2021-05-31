import React from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import Header from '../Header'
import HeroCarrousel from './Carrousel'
import GrillaCategorias from './GrillaCategorias';

const Home = (props) => {
    return (
        <>
        <Header props={props} />
        <ScrollView style={styles.bgBodyColor}>
            <HeroCarrousel />
            <GrillaCategorias />
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    bgBodyColor: {
        backgroundColor: "#fff"
      }
})

export default Home