import * as React from 'react';

import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../constants/Colors';

import useColorScheme from '../hooks/useColorScheme';
import Home from "../screens/TabOneScreen";
import Login from "../screens/login";
import CollectionAgencyForm from "../screens/TabFormScreen";
import Profile from "../screens/TabTwoScreen";

import {BottomTabParamList, TabFormParamList, TabOneParamList, TabTwoParamList} from '../types';
import {Button} from "react-native";
import Registration from "../screens/registration";
import DisposalAgencyForm from "../screens/DisposalFormScreen";
import ConsignmentDetail from "../screens/ConsignmentDetail";


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            tabBarOptions={{activeTintColor: Colors[colorScheme].tint}}>
            <BottomTab.Screen
                // @ts-ignore
                name="Home"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-home" color={color}/>,
                }}
            />
            <BottomTab.Screen
                // @ts-ignore
                name="Add"
                component={CollectionAgencyForm}
                options={{
                    tabBarIcon: ({color}) => <AddBarIcon name="ios-add-circle" color={color}/>,
                }}
            />
            <BottomTab.Screen
                // @ts-ignore
                name="Profile"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-person" color={color}/>,
                }}
            />
            <BottomTab.Screen
                // @ts-ignore
                name="Demo"
                component={ConsignmentDetail}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-log-in" color={color}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -5}} {...props} />;
}

function AddBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{
        marginBottom: -5,
        // marginTop: -35,
        // backgroundColor:'#62bf4e',
        // color:'#62bf4e',
        // padding:5,
        zIndex: 999,
        // borderRadius:50,
        // borderColor:'#62bf4e',
        // borderWidth:2,
    }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={Home}
                options={{
                    headerTitle: 'Home',
                    headerStyle: {backgroundColor: '#62bf4e'},
                    headerTitleStyle: {color: '#fff', fontWeight: 'bold', textAlign:'center'},
                }}
            />
        </TabOneStack.Navigator>
    );
}

const TabFormStack = createStackNavigator<TabFormParamList>();

// function TabFormNavigator() {
//     return (
//         <TabFormStack.Navigator>
//             <TabTwoStack.Screen
//                 name="TabTwoScreen"
//                 component={Form}
//                 options={{
//                     headerTitle: 'Form',
//                     headerStyle: {backgroundColor: '#62bf4e'},
//                     headerTitleStyle: {color: '#fff', fontWeight: 'bold'},
//                 }}
//             />
//         </TabFormStack.Navigator>
//     );
// }

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={Profile}
                options={{
                    headerTitle: 'Profile',
                    headerStyle: {backgroundColor: '#62bf4e'},
                    headerTitleStyle: {color: '#fff', fontWeight: 'bold'},
                    headerRight: () => (
                        <Button
                            onPress={() => alert('You want log out ?')}
                            title="logout"
                            color="#62bf4e"
                        />
                    ),
                }}
            />
        </TabTwoStack.Navigator>

    );
}

