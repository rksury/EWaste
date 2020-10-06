import *as React from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native';

class ConsignmentDetail extends React.Component {
    render() {

        return (

            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.content}>
                        <Text style={styles.header}>Consignment Detail</Text>
                    </View>
                </ScrollView>
            </View>

        )
    }

}

export default ConsignmentDetail;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'stretch',

    },
    content: {
        backgroundColor: '#62bf4e',
        width: '100%',
        height: 80,
    },
    header:{
        textAlign: 'center',
        fontSize: 20,
        color: '#ffffff',
        marginTop:40,
        fontWeight:'bold'

    }
})
