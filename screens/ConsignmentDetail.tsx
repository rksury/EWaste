import *as React from 'react'
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Card} from "react-native-paper";

class ConsignmentDetail extends React.Component {
    render() {

        return (

            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.headerContent}>
                        <Text style={styles.header}>Order Detail</Text>
                    </View>
                    <View style={styles.detailContent}>
                        <Card style={styles.Card}>
                            <Card.Content>
                                <Text style={styles.heading}>Order No.</Text>
                                <Text style={styles.title}>Date</Text>
                                <Text style={styles.title}>Vehicle No</Text>
                                <Text style={styles.title}>Final Weight</Text>
                                <Text style={styles.status}>Documents</Text>
                                <View style={styles.ImageContent}>
                                    <Image style={styles.cardImage}
                                           source={require('../assets/images/Truck.png')}/>
                                    <Image style={styles.cardImage}
                                           source={require('../assets/images/Truck.png')}/>
                                    <Image style={styles.cardImage}
                                           source={require('../assets/images/Truck.png')}/>
                                </View>
                                <View style={styles.ImageContent}>
                                    <Image style={styles.cardImage}
                                           source={require('../assets/images/Truck.png')}/>
                                    <Image style={styles.cardImage}
                                           source={require('../assets/images/Truck.png')}/>

                                </View>
                            </Card.Content>
                        </Card>
                    </View>
                </ScrollView>
            </View>
        )
    }

}

export default ConsignmentDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',

    },
    headerContent: {
        backgroundColor: '#62bf4e',
        width: '100%',
        height: 80,
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
        color: '#ffffff',
        marginTop: 40,
        fontWeight: 'bold'
    },
    detailContent: {
        alignItems: 'center',
    },
    Card: {
        width: '90%',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 20,
        shadowColor: "#979191",
        shadowOffset: {width: 0, height: 10,},
        shadowOpacity: 1.0,
        shadowRadius: 13.16,
        elevation: 10,
        margin: 0,
        padding: 0
    },

    heading: {
        fontSize: 20,
        color: '#878383'
    },
    title: {
        fontSize: 14,
        color: '#878383'
    },
    status: {
        fontSize: 22,
        color: '#878383',
    },
    ImageContent: {
        flexDirection: 'row',
        padding: 0,
        width: '100%',
        justifyContent: "center"
    },
    cardImage: {
        width: 90,
        height: 90,
        margin: 8,
        borderRadius: 20,
        backgroundColor: '#efefef',

    },
})


