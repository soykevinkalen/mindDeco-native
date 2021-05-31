import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import {NavigationContainer} from '@react-navigation/native';
import Drawer from './navigation/Drawer';

import mainReducer from './redux/reducer/mainReducer';

const myStore = createStore(mainReducer, applyMiddleware(thunk))

function App() {

  return (
    <> 

      <Provider store={myStore}>
         <SafeAreaView style={styles.container} barStyle={"dark-content"}>
          <StatusBar
            backgroundColor="#000115"
            barStyle={"dark-content"}
          />
          <NavigationContainer>
              <Drawer />
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7f3ff',
    color: 'white'
  }
})


export default App