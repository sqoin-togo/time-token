import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Search, Icon, Menu, LogoP, Home, Notification, Profil, Transaction, Setting, Help } from "../components/TimeTokenIcons";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import LatestDeals from '../components/LatestDeals';
import { ScrollView } from 'react-native-gesture-handler';
import PhotoProfil from '../components/PhotoProfil';
import GetBalance from '../components/GetBalance';

function menu({ navigation }) {
    return (

        <View style={styles.container}>

            <View style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginLeft: 10,
                marginRight: 10,
                //marginTop: "2%",
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



            <View style={{ height: "100%", width: "100%" }}>

                <LatestDeals navigation={navigation}></LatestDeals>

            </View>



            <View style={styles.view3}>
                <View style={{ marginLeft: "8%", marginTop: "3%" }} ><Search></Search></View>
                <TouchableOpacity style={{ marginLeft: "20%", marginTop: "5%" }} onPress={() => navigation.navigate("SelectScreenshot")}><Text style={{ color: "#74ADFF", fontSize: 25, }}>CLAIM</Text></TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: "20%", marginTop: "3%" }} onPress={() => navigation.navigate("DearsPage")}><Icon></Icon></TouchableOpacity>
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
                    labelStyle={{ color: 'white', fontWeight: 'bold' }}
                    label="Home"
                    onPress={() => props.navigation.navigate('InitialPage')}
                //style={{ backgroundColor: '#2699FB' }}
                />


            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>

                <Notification></Notification>

                <DrawerItem
                    labelStyle={{ color: 'white', fontWeight: 'bold' }}
                    label="Notifications"
                // onPress={() => props.navigation.navigate('ProfilePage')}
                //style={{ backgroundColor: '#2699FB' }}
                />
            </View>


            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
                <Profil></Profil>
                <DrawerItem
                    labelStyle={{ color: 'white', fontWeight: 'bold' }}
                    label="Your Profile"
                    onPress={() => props.navigation.navigate('ProfilePage')}
                //style={{ backgroundColor: '#2699FB' }}
                />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
                <Profil></Profil>
                <DrawerItem
                    labelStyle={{ color: 'white', fontWeight: 'bold' }}
                    label="Your Wallet"
                    onPress={() => props.navigation.navigate('QRcodePage')}
                //style={{ backgroundColor: '#2699FB' }}
                />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
                <Transaction></Transaction>
                <DrawerItem
                    labelStyle={{ color: 'white', fontWeight: 'bold' }}
                    label="Your  Transactions"
                    onPress={() => props.navigation.navigate('DearsPage')}
                //style={{ backgroundColor: '#2699FB' }}
                />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
                <Setting></Setting>
                <DrawerItem
                    labelStyle={{ color: 'white', fontWeight: 'bold' }}
                    label="Settings"
                // onPress={() => this.props.navigation.navigate('DearsPage')}
                //style={{ backgroundColor: '#2699FB' }}
                />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
                <Help></Help>
                <DrawerItem
                    labelStyle={{ color: 'white', fontWeight: 'bold' }}
                    label="Get Help"
                //    onPress={() => this.props.navigation.navigate('DearsPage')}
                //style={{ backgroundColor: '#2699FB' }}
                />
            </View>
            <View style={{ width: "20%", height: "20%", marginTop: "20%", alignItems: "center", justifyContent: "flex-start", marginLeft: "38%" }}>
                <LogoP></LogoP>
            </View>
        </DrawerContentScrollView>
    );
}



export default class extends Component {
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
    body: {
        width: "100%",
        height: "100%"

    },
    container: {
        flex: 1,
        backgroundColor: "#00ACEE"
    },
    view: {
        width: "40%",
        //height:"350%",
        borderRadius: 15,
        backgroundColor: "#fff",
        marginLeft: "5%",
        marginTop: "1%"
    },
    inputStyle: {
        borderRadius: 15,
        //height: "60%",
        paddingLeft: "5%",
        backgroundColor: "#fff",
        fontSize: 16,
        // paddingLeft: 30,
        width: "95%",
        marginLeft: "2%",
        marginTop: "3%",
        flexDirection: "row"
    },
    view1: {
        width: "80%",
        height: "47%",
        borderRadius: 15,
        backgroundColor: "#fff",
        marginLeft: "10%",
        marginTop: "5%"
    },
    view3: {
        backgroundColor: "#fff",
        width: "100%",
        height: "10%",
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        //marginTop:"145%",
        bottom: 0,
        flexDirection: "row",
        position: "absolute",
        //justifyContent: 'flex-end',
        borderWidth: 0.5,


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
    container0: {
        //flex: 1,
        backgroundColor: "red"
    },
    contentContainer: {
        height: 1000,
        width: 1000,
    },
});


/*
<ScrollView>
                <View style={{ height: "100%", width: "100%", flexDirection: "column" }}>

                    <View style={{ height: "28%", width: "100%" }}>

                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginLeft: "7%" }}>Latest Deals</Text>

                        <ScrollView
                            horizontal={true}
                            bounces={true}
                            bouncesZoom={true}
                            maximumZoomScale={5.0}
                            minimumZoomScale={0.5}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.contentContainer}
                        //style={styles.container0}
                        >
                            <View style={{ height: "100%", width: "100%" }}>

                                <LatestDeals navigation={navigation}></LatestDeals>

                            </View>


                        </ScrollView>
                    </View>
                    <View style={{ height: "50%", width: "100%" }}>
                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginLeft: "7%" }}> Tasty Offers</Text>

                        <ScrollView
                            horizontal={true}
                            bounces={true}
                            bouncesZoom={true}
                            maximumZoomScale={5.0}
                            minimumZoomScale={0.5}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.contentContainer}
                        //style={styles.container0}
                        >
                            <View style={{ height: "100%", width: "100%" }}>

                                <LatestDeals navigation={navigation}></LatestDeals>

                            </View>


                        </ScrollView>

                    </View>
                </View>
            </ScrollView>
*/