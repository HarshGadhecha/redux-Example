import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import configureStore from './store';
import { Provider } from 'react-redux';
import Home from './Home';
import foodForm from './foodForm';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const store=configureStore();
const ReduxData=()=>{
  return(
  <Provider store={store}>
   <AppContainer/>
  </Provider>)
}


export default function App() {
  return (
    <ReduxData/>
  );
}


const AppSwitchNav = createSwitchNavigator({
  Home: { screen: Home },
  foodForm: { screen: foodForm },
});

const AppContainer = createAppContainer(AppSwitchNav);




