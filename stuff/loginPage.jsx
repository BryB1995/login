import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { TextInput, Button } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 50,
        width: 250,
    },
    rowContainer: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',

    },
    buttons: {
        marginLeft: 25,
        marginRight: 25,
    },
});


const login = () =>{
<View style={styles.container}>
        <TextInput style={styles.input} label="Email" mode="outlined" placeholder="email" />
        <TextInput style={styles.input} label="Password" mode="outlined" placeholder="password" />

        <View style={styles.rowContainer}>
            <Button
                style={styles.buttons}
                mode="contained"
                onPress={() => {
                }}
            >
                Login

      </Button>

            <Button
                style={styles.buttons}
                mode="outlined"
                onPress={() => {
                }}
            >
                Sign Up
      </Button>
        </View>
    </View>
}