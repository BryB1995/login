
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import loginPage from './stuff';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
   



    
    <View style={styles.container}>
      <Text>Login!</Text>
      <loginPage />
    </View>


  );S
}

const stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  

  
});
