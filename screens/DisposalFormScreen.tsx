import * as React from 'react';
import {ScrollView, StyleSheet, TextInput} from 'react-native';
// import { Ionicons, } from '@expo/vector-icons';
import { Button, } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View} from '../components/Themed';

export default function DisposalAgencyForm() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Consignment Detail</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>

                    <TextInput
                        keyboardType='default'
                        style={styles.input}
                        placeholder='Vehicle No'
                    />

                    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}
                        style={styles.cameradiv}>Scan Number Plat</Button>
                    <Text style={styles.text}>Scan Vehicle Number Plat </Text>

                    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}
                        style={styles.cameradiv}>Capture photo</Button>
                    <Text style={styles.text}>Photo of the vehicle with the waste, without tarpaulin</Text>


                    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}
                        style={styles.cameradiv}>Capture photo</Button>
                    <Text style={styles.text}>Upload Weighment Slip </Text>

                </View>

                <View style={styles.buttonContainer}>
                    <Button  mode="contained" onPress={() => console.log('Submit')}
                        style={styles.updateButton}>Submit</Button>
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
        fontSize: 25,
        fontWeight: 'bold',
        color:'#777977'
    },

    content: {
        paddingTop: 20,
        paddingLeft:60,
        paddingRight:60,
        alignItems: 'center',
        width:360,
    },

    input: {
        borderColor: '#cdcec5',
        color: '#878383',
         borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        width: '100%',
        marginBottom:10,
    },

    cameradiv:{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#cdcec5',
        padding: 5,
        margin: 5,
        width: '100%',
        color: '#fff',
        backgroundColor:'#62bf4e'
    },
    text: {
        position: 'relative',
        fontSize: 13,
        backgroundColor: '#fff',
        textAlign: 'left',
        padding: 3,
        color: '#878383',
        width:'100%',
        marginBottom:5,
        marginTop:-5,
    },

    buttonContainer: {
        marginTop: 30,
        marginBottom: 30,
        width: '100%',
        alignItems: 'center',
    },

    updateButton: {
        backgroundColor: '#62bf4e',
        borderRadius: 5,
        padding: 8,
        width: '80%',
        color: '#fff',
        textAlign: 'center',
        alignContent: 'center',
        fontWeight: "bold",
        borderWidth: 1,
        borderColor:'#cdcec5'

    },
});
