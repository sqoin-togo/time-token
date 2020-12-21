import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Profile from "../components/Profile";
import LogoutProfile from "../components/LogoutProfile";
import { Menu, LogoP, Home, Notification, Profil, Transaction, Setting, Help, BackIn } from "../components/TimeTokenIcons";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import PhotoProfil from '../components/PhotoProfil';
import GetBalance from '../components/GetBalance'


function menu({ navigation }) {

    return (


        <View style={styles.container}>

            <View style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginLeft: 10,
                marginRight: 10,
                marginTop: "2%",
                backgroundColor: "#00ACEE"

            }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menu} >
                    <Menu>
                    </Menu>
                </TouchableOpacity>

                <View style={styles.logo}>
                    <LogoP style={styles.logo}>
                    </LogoP>

                </View>

                <GetBalance></GetBalance>

            </View>

            <View style={{ alignItems: "center" }}>

                <PhotoProfil></PhotoProfil>


                <View style={styles.information}>


                    <Profile navigation={navigation}></Profile>


                </View>

                <View style={{
                    marginRight: "9%"
                }}>

                    <LogoutProfile navigation={navigation}> </LogoutProfile>

                </View>


            </View>


        </View>


    );
}



function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: '#3D4A55', color: 'white' }}>

            <PhotoProfil></PhotoProfil>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>

                <Home></Home>


                <DrawerItem
                    labelStyle={{ color: 'white', fontWeight: "bold" }}
                    label="Home"
                    onPress={() => props.navigation.navigate('InitialPage')}
                //style={{ backgroundColor: '#2699FB' }}
                />


            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>

                <Notification></Notification>

                <DrawerItem
                    labelStyle={{ color: 'white', fontWeight: "bold" }}
                    label="Notifications"
                //onPress={() => props.navigation.navigate('ProfilePage')}
                //style={{ backgroundColor: '#2699FB' }}
                />
            </View>


            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
                <Profil></Profil>
                <DrawerItem
                    labelStyle={{ color: 'white', fontWeight: "bold" }}
                    label="Your Profile"
                    onPress={() => props.navigation.navigate('ProfilePage')}
                //style={{ backgroundColor: '#2699FB' }}
                />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
                <Transaction></Transaction>
                <DrawerItem
                    labelStyle={{ color: 'white', fontWeight: "bold" }}
                    label="Your  Transactions"
                    onPress={() => props.navigation.navigate('DearsPage')}
                //style={{ backgroundColor: '#2699FB' }}
                />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
                <Setting></Setting>
                <DrawerItem
                    labelStyle={{ color: 'white', fontWeight: "bold" }}
                    label="Settings"
                //onPress={() => this.props.navigation.navigate('DearsPage')}
                //style={{ backgroundColor: '#2699FB' }}
                />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
                <Help></Help>
                <DrawerItem
                    labelStyle={{ color: 'white', fontWeight: "bold" }}
                    label="Get Help"
                //onPress={() => this.props.navigation.navigate('DearsPage')}
                //style={{ backgroundColor: '#2699FB' }}
                />
            </View>
        </DrawerContentScrollView>
    );
}



export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const { navigation } = this.props;
        var self = this;
    }

    render() {
        const Drawer = createDrawerNavigator();
        return (
            <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} >
                <Drawer.Screen name="Menu" component={menu} />

            </Drawer.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00ACEE",
        // alignItems: "center",

    },
    image: {
        width: 150,
        height: 150,
        backgroundColor: "#fff",
        borderRadius: 500,
        //justifyContent:"center"
    },
    information: {


    },

    menu: {
        marginTop: "5%"
    },
    logo: {
        marginLeft: '5%',
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    profile: {
        alignItems: "center",
        //height:"40%",
        borderBottomColor: "#eee",
        //borderBottomWidth: 1,
        //paddingBottom: "1%",
        flexDirection: "row"
    },
    textdata: {
        color: "white",
        fontSize: 14,
        //marginRight: "66%",
        padding: 10
    }



});





