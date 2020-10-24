
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import loginPage from './stuff/loginPage.jsx';

export default function App() {
  return (
   



    
    <View style={styles.container}>
      <Text>Login!</Text>
      <loginPage/>
    </View>


  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  

  
});
