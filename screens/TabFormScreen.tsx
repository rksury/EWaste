import * as React from 'react';
import {ScrollView, StyleSheet, TextInput} from 'react-native';
// import { Ionicons, } from '@expo/vector-icons';
import { Button, } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View} from '../components/Themed';

export default function Form() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add New Consignment </Text>
            <ScrollView>
                <View style={styles.content}>

                    <TextInput
                        keyboardType='default'
                        // secureTextEntry={true}
                        style={styles.input}
                        placeholder='Order Number'
                    />
                    <TextInput
                        keyboardType='numeric'
                        // secureTextEntry={true}
                        style={styles.input}
                        placeholder='Net Weight in Kg'
                    />
                    <TextInput
                        keyboardType='default'
                        secureTextEntry={true}
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
                    <Text style={styles.text}>Photo of loaded vehicle with number plate, with tarpaulin </Text>

                    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}
                        style={styles.cameradiv}>Capture photo</Button>
                    <Text style={styles.text}>Upload License Registration Copy</Text>

                    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}
                        style={styles.cameradiv}>Capture photo</Button>
                    <Text style={styles.text}>Upload E Way Bill Copy </Text>

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
    },

    heading: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color:'#777977'
    },

    content: {
        padding: 10,
        alignItems: 'center',
    },

    input: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#cdcec5',
        padding: 10,
        margin: 5,
        width: '80%',
        color: '#878383',
    },

    cameradiv:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#cdcec5',
        padding: 5,
        margin: 5,
        width: '80%',
        color: '#fff',
        backgroundColor:'#62bf4e'
    },
    cameraicon:{
        fontSize:25,
        color:'#62bf4e',
        backgroundColor:'#fff',
        textAlign:'left'
    },

    text: {
        position: 'relative',
        fontSize: 13,
        backgroundColor: '#fff',
        textAlign: 'left',
        padding: 3,
        color: '#878383',
        width:'80%',
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
        width: '90%',
        color: '#fff',
        textAlign: 'center',
        alignContent: 'center',
        fontWeight: "bold",
        borderWidth: 1,
        borderColor:'#cdcec5'

    },
});
