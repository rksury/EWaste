import * as React from 'react';
import {Image, ScrollView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import {Text, View} from '../components/Themed';
import {Button} from "react-native-paper";

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.avatarBody}>
                <Image style={styles.avatarImage} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ63g7rwZfd__LpTonMrIgDp04P-_FW5rAVng&usqp=CAU'}}/>
            </View>
            <View style={styles.card}>
                <View style={styles.bodyContent}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.Fullname}>Profile Name</Text>
                    <Text style={styles.Usertype}>Collection Agency</Text>
                    <Text style={styles.info}>+91 90 39 363137</Text>

                    <TextInput style={styles.input} placeholder='Fullname'/>
                    <TextInput style={styles.input} placeholder='email'/>

                    <View style={styles.buttonContainer}>
                        <Button mode="contained" onPress={() => {
                            console.log('Save');
                        }} style={styles.buttonText }>Save </Button>
                    </View>
                        </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#7eea63'
    },

    avatarBody: {
        width: 120,
        height: 120,
        borderRadius: 65,
        alignSelf: 'center',
        position: 'relative',
        marginTop: 100,
         backgroundColor: '#fff',
         zIndex:1
    },
    avatarImage: {
        width: 100,
        height: 100,
        borderRadius: 65,
        borderColor: '#fff',
        alignSelf: 'center',
        position: 'relative',
        marginTop:8,
    },
    card: {
        borderRadius: 20,
        marginTop: -70,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
        borderRadius: 20
    },
    Fullname: {
        fontSize: 20,
        color: "#306325",
        fontWeight: '500',
        marginTop:40,
        textAlign:'center',
    },
    Usertype: {
        fontSize: 22,
        textAlign:'center',
        color: "#306325",
        fontWeight: '700',
    },
    info: {
        fontSize: 16,
        color: "#62bf4e",
        marginTop: 5,
        marginBottom: 5,
        textAlign:'center'
    },
    input: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#62bf4e',
        padding: 10,
        width: '100%',
        color: '#878383',
        marginBottom:8
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: "#62bf4e",
    },
    buttonText: {
        backgroundColor: '#62bf4e',
        borderColor: '#c5c7c5',
        borderRadius: 10,
        padding: 10,
        color: '#fff',
        width: 260,
        textAlign: 'center',
        alignContent: 'center',
        fontWeight: "bold",
    },
});
