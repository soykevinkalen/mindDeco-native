import React, { useState } from 'react'
import { StyleSheet, ScrollView, Alert, Text, KeyboardAvoidingView, Platform, SafeAreaView, TouchableWithoutFeedback, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/core'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextField, FilledTextField, OutlinedTextField,  } from 'rn-material-ui-textfield'

// import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import {CreditCardInput,} from 'react-native-credit-card-input';
import Back from '../utilities/Back';

const CreditCard = () => {
    const navigation = useNavigation()
  
    const _onChange = (e) => {
        /*
          {"status": {"cvc": "incomplete", "expiry": "incomplete", "number": "invalid"}, "valid": false, "values": {"cvc": "", "expiry": "", "number": "8", "type": undefined}}
         */
        console.log(e.values.number);
        // console.log(e.valid);
        console.log(e.values.cvc);
        console.log(e.values.expiry);
      };
      return (
        <View>
            <Back navigateTo='metodoDePago' color='white' title='Datos de tu tarjeta' />
            <View style={styles.contenedorTarjeta}>
                <CreditCardInput labelStyle={{color: 'black'}} inputStyle={{borderBottomColor: 'green'}} validColor="black" invalidColor="red" onChange={_onChange} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('confirmarCompra')}>
              <View style={styles.contenedorBotonContinuar}>
                      <Text style={styles.botonContinuar}>Continuar</Text>
              </View>
            </TouchableOpacity>
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    avoider: {
      flex: 1,
      padding: 36,
    },
    button: {
      margin: 36,
      marginTop: 0,
    },
    contenedorTarjeta: {
        paddingTop: 30
    },
    contenedorBotonContinuar: {
        height: 70,
        alignItems: 'center',
        marginTop: 50,
    },
    botonContinuar: {
        borderRadius: 5,
        overflow: 'hidden',
        color: 'white',
        width: '80%',
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white'
    }
  })
  

export default CreditCard