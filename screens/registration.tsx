import * as React from 'react';
import {ScrollView, StyleSheet, TextInput} from 'react-native';
// import { Ionicons, } from '@expo/vector-icons';
import {Button,} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View} from '../components/Themed';

export default function Registration() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Register New User </Text>
            <ScrollView>
                <View style={styles.content}>
                    <TextInput style={styles.input}/>
                        <Text style={styles.text}>Email</Text>

                    <TextInput style={styles.input} keyboardType={"numeric"}/>
                        <Text style={styles.text}>Number</Text>

                    <TextInput  style={styles.input} secureTextEntry={true}/>
                    <Text style={styles.text}>Password</Text>

                </View>

                <View style={styles.buttonContainer}>
                    <Button mode="contained" onPress={() => console.log('Submit')}
                            style={styles.SignButton }>Sign Up</Button>
                </View>
                <View>
                    <Text style={styles.accounttext}>If you already have an account </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button mode="contained" onPress={() => console.log('Submit')}
                            style={styles.LoginButton}>Log In</Button>
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width:360,

    },

    heading: {
        marginTop: 50,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#777977',
        width:'100%',
        textAlign:'center'
    },

    content: {
        paddingTop: 20,
        paddingLeft:60,
        paddingRight:60,
        alignItems: 'center',
        width:360,
    },

    input: {
        borderWidth: 2,
        borderRadius: 50,
        borderColor: '#62bf4e',
        padding: 10,
        width: '100%',
        color: '#878383',
    },


    text: {
        // position: 'relative',
        fontSize: 13,
        backgroundColor: '#fff',
        color: '#878383',
        top: -60,
        paddingLeft:2,
        paddingRight:2,
        left:-50,
        textAlign:'left'
    },

    buttonContainer: {
        marginTop: 10,
        marginBottom: 30,
        width: '100%',
        alignItems: 'center',
    },

    SignButton: {
        backgroundColor: '#62bf4e',
        borderColor: '#c5c7c5',
        borderRadius: 50,
        borderWidth: 2,
        padding: 6,
        width: '70%',
        color: '#fff',
        fontWeight: 'bold',
    },
    LoginButton: {
        backgroundColor: '#62bf4e',
        borderColor: '#c5c7c5',
        borderWidth: 2,
        borderRadius: 10,
        padding: 6,
        width: '70%',
        color: '#fff',
        textAlign: 'center',
        alignContent: 'center',
        fontWeight: "bold",
    },

    accounttext: {
        color: '#878383',
        textAlign: 'center',
    }
});
