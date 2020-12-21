import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Menu, LogoP, LogoN } from './TimeTokenIcons';


class Header extends Component {



    constructor(props) {
        super(props);

    }

    Menu = () => {
        this.props.navigation.navigate("MenuPage");
    }
    render() {
        return (
            <View style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginLeft: 10,
                marginRight: 10,
                marginTop: "2%",
                backgroundColor: "#00ACEE"

            }}>


                <TouchableOpacity onPress={this.Menu} style={styles.menu}>

                    <Menu>

                    </Menu>




                </TouchableOpacity>


                <View style={styles.logo}>
                    <LogoP style={styles.logo}>
                    </LogoP>

                </View>




                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginTop: "5%" }}> ₮ 1200 </Text>



            </View>
        )
    }
}

Header.defaultProps = {
    Menu: true,

};
export default Header

const styles = StyleSheet.create({
    menu: {
        marginTop: "5%"
    },
    logo: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    }



});
/*

import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Recherche, New } from "../components/TimeTokenIcons";
import { ScrollView } from 'react-native-gesture-handler';


class LatestDeals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            promotion: '',
            promotionList: [] = [],
            search: '',
            List: []

        };
    }


    baseUrl = "https://apptimetoken.sagecity.io/";


    componentDidMount() {
        //alert("am in initia page")
        //const { navigation } = this.props;
        var self = this;

        self.getAllPromotion()
        //self.getCompanyById()

        fetch('http://localhost:3002/promotion/getallpromotions', {
            method: "GET"
        })
            .then(function (response) {
                //alert(JSON.stringify(response))
                if (response.ok) {
                    response.json().then(function (json) {
                        //alert(JSON.stringify(json))
                        self.setState({ List: json })
                        //alert(JSON.stringify(promotionList))
                    })

                } else {
                    console.log('with response ' + response.status);
                }
            })
            .catch(error => { console.log("something went wrong!" + error + response) })



    }

    getAllPromotion() {
        var self = this;
        fetch(self.baseUrl + 'promotion/getpromotionsdetails', {
            method: "GET"
        })
            .then(function (response) {
                //alert(JSON.stringify(response))
                if (response.ok) {
                    response.json().then(function (json) {
                        //alert(JSON.stringify(json))
                        self.setState({ promotionList: json })
                        //alert(JSON.stringify(promotionList))
                    })

                } else {
                    console.log('with response ' + response.status);
                }
            })
            .catch(error => { console.log("something went wrong!" + error + response) })
    }

    componentWillUnmount() {
        // this.focusListener();
    }
    filterList(promotionList) {
        return promotionList.filter(
            (promotionList) =>
                promotionList.promotion_name
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase()),
        );
    }

    value() {
        this.setState({ search })
    }

    render() {

        //const { navigation } = this.props;
        //self = this
        return (
            <>
                <View style={styles.inputStyle}>
                    <View style={{ marginTop: "5%" }}>
                        <Recherche></Recherche>
                    </View>

                    <TextInput
                        placeholder='Search'
                        autoCapitalize='none'
                        //onChangeText={this.handleMessageChange}
                        //onChange={(text) => { console.log(String(text)) }}
                        //onChangeText={(text) => this.setState({ search: text })}
                        onChangeText={(search) => this.value}
                    ></TextInput>

                </View>
                <View >

                    <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginLeft: "9%" }}>News</Text>
                    <View style={{ alignItems: "center" }}>
                        <New></New>
                    </View>
                </View>
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

                                    <View style={{ flexDirection: "row", height: "65%" }} >
                                        {this.state.promotionList.length > 0 &&
                                            this.filterList(this.state.promotionList).map(promotion => {
                                                return <TouchableOpacity style={styles.view} onPress={() => this.props.navigation.navigate("ClaimOffer", { "idPromotion": promotion.promotion_id })}>
                                                    <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                                                        <View style={{ marginTop: "1%", marginLeft: "2%" }}>
                                                            <Image
                                                                source={{ uri: promotion.logo }} style={{ width: 30, borderRadius: 30, height: 30 }}
                                                            />
                                                        </View>
                                                        <Text style={{ marginLeft: "5%", marginTop: "3%", fontSize: 20, fontWeight: "bold", }}>{promotion.company_name}</Text>
                                                    </View>
                                                    <Image
                                                        source={{ uri: promotion.image }} style={{ width: 150, marginTop: "2%", height: 80 }}
                                                    />
                                                    <Text style={{ marginLeft: "5%", marginTop: "0%", fontSize: 20, fontWeight: "bold", }}>{promotion.promotion_name}</Text>
                                                </TouchableOpacity>
                                            })
                                        }
                                    </View>

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

                                    <View style={{ flexDirection: "row", height: "65%" }} >
                                        {this.state.promotionList.length > 0 &&
                                            this.state.promotionList.map(promotion => {
                                                return <TouchableOpacity style={styles.view} onPress={() => this.props.navigation.navigate("ClaimOffer", { "idPromotion": promotion.promotion_id })}>
                                                    <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                                                        <View style={{ marginTop: "1%", marginLeft: "2%" }}>
                                                            <Image
                                                                source={{ uri: promotion.logo }} style={{ width: 30, borderRadius: 30, height: 30 }}
                                                            />
                                                        </View>
                                                        <Text style={{ marginLeft: "5%", marginTop: "3%", fontSize: 20, fontWeight: "bold", }}>{promotion.company_name}</Text>
                                                    </View>
                                                    <Image
                                                        source={{ uri: promotion.image }} style={{ width: 150, marginTop: "2%", height: 80 }}
                                                    />
                                                    <Text style={{ marginLeft: "5%", marginTop: "0%", fontSize: 20, fontWeight: "bold", }}>{promotion.promotion_name}</Text>
                                                </TouchableOpacity>
                                            })
                                        }
                                    </View>

                                </View>


                            </ScrollView>

                        </View>

                    </View>
                </ScrollView>

            </>

        )
    }

}




export default LatestDeals;

const styles = StyleSheet.create({

    view: {
        width: "15%",
        height: "22%",
        borderRadius: 15,
        backgroundColor: "#fff",
        marginLeft: "1%",
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

    vied00: {
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
    logo: {
        marginLeft: '5%',
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },

    contentContainer: {
        height: 1000,
        width: 1000,
    },

});




*/