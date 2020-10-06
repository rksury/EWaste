import * as React from 'react';
import {Image, ScrollView, StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-paper';
import {View} from '../components/Themed';
// import


export default function Home() {

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content} >
                    <Card style={styles.Card1}>
                        <Card.Content style={styles.CardContent}>
                            <Card.Cover style={styles.cardImage} source={require('../assets/images/Truck.png')}/>
                        </Card.Content>
                    </Card>

                    <Card style={styles.Card2}>
                        <Card.Content>
                            <Text style={styles.heading}>Consignment No.</Text>
                            <Text style={styles.title}>Date</Text>
                            <Text style={styles.title}>Vehicle No</Text>
                            <Text style={styles.statusApproved}>Approved
                                <Image style={styles.statusImg} source={require('../assets/images/Approved.png')}/>
                            </Text>
                        </Card.Content>
                    </Card>
                </View>
                <View style={styles.content}>
                    <Card style={styles.Card1}>
                        <Card.Content>
                            <Card.Cover style={styles.cardImage} source={require('../assets/images/Truck.png')}/>
                        </Card.Content>
                    </Card>

                    <Card style={styles.Card2}>
                        <Card.Content>
                            <Text style={styles.heading}>Consignment No.</Text>
                            <Text style={styles.title}>Date</Text>
                            <Text style={styles.title}>Vehicle No</Text>
                            <Text style={styles.statusReject}>Rejected
                                <Image style={styles.statusImg} source={require('../assets/images/cross.png')}/>
                            </Text>

                        </Card.Content>
                    </Card>
                </View>
                <View style={styles.content}>
                    <Card style={styles.Card1}>
                        <Card.Content style={styles.CardContent}>
                            <Card.Cover style={styles.cardImage} source={require('../assets/images/Truck.png')}/>
                        </Card.Content>
                    </Card>

                    <Card style={styles.Card2}>
                        <Card.Content>
                            <Text style={styles.heading}>Consignment No.</Text>
                            <Text style={styles.title}>Date</Text>
                            <Text style={styles.title}>Vehicle No</Text>
                            <Text style={styles.statusApproved}>Approved
                                <Image style={styles.statusImg} source={require('../assets/images/Approved.png')}/>
                            </Text>
                        </Card.Content>
                    </Card>
                </View>
                <View style={styles.content}>
                    <Card style={styles.Card1}>
                        <Card.Content>
                            <Card.Cover style={styles.cardImage} source={require('../assets/images/Truck.png')}/>
                        </Card.Content>
                    </Card>

                    <Card style={styles.Card2}>
                        <Card.Content>
                            <Text style={styles.heading}>Consignment No.</Text>
                            <Text style={styles.title}>Date</Text>
                            <Text style={styles.title}>Vehicle No</Text>
                            <Text style={styles.statusReject}>Rejected
                                <Image style={styles.statusImg} source={require('../assets/images/cross.png')}/>
                            </Text>

                        </Card.Content>
                    </Card>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignContent: 'stretch',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    content: {
        width: '100%',
        flexDirection: 'row',
    },
    Card1: {
        width: 150,
        height: 135,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        shadowColor: "#979191",
        shadowOffset: {width: 0, height: 10,},
        shadowOpacity: 1.0,
        shadowRadius: 13.16,
        elevation: 24,
    },
    Card2: {
        width: 200,
        height: 135,
        marginTop: 10,
        marginLeft: -10,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: "#979191",
        shadowOffset: {width: 0, height: 10,},
        shadowOpacity: 0.36,
        shadowRadius: 13.16,
        elevation: 24,

    },
    CardContent: {
        margin: 0,
        padding: 0,
    },
    cardImage: {
        width: 100,
        height: 100,
        margin: 1,
        borderRadius: 20,
        backgroundColor: 'transparent',

    },
    heading: {
        fontSize: 20,
        color: '#878383'
    },
    title: {
        fontSize: 14,
        color: '#878383'
    },
    statusApproved: {
        fontSize: 22,
        color: '#2ce80e',
        justifyContent:'space-between',
    },
    statusReject: {
        fontSize: 22,
        color: '#e80e27',
        justifyContent:'space-between',
    },
    statusImg: {
        marginLeft:50,
        width: 20,
        height: 20
    },


});
