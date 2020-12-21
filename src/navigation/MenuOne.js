import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage, TouchableOpacity, FlatList } from 'react-native';
import { Dear } from "../components/TimeTokenIcons";



class LatestDeals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photo: '',
            firstname: '',
            lastname: '',
            promotion: '',
            company: '',
            promotionList: [],
            dataSource: []


        };
    }


    baseUrl = "https://apptimetoken.sagecity.io/";


    componentDidMount() {
        var self = this;
        fetch(self.baseUrl + 'promotion/getpromotionsdetails', {
            method: "GET"
        })
            .then(response => response.json())
            .then((responseData) => {
                //alert(JSON.stringify(responseData))
                this.setState({
                    dataSource: responseData
                })
                console.log(JSON.stringify(dataSource))
            })
            .catch(error => console.log(error)) //to catch the errors if any

        /*
        //const { navigation } = this.props;
        var self = this;
        //self.getPromotionsById()
        //self.getCompanyById()

        fetch(self.baseUrl + 'promotion/getpromotionsdetails', {
            method: "GET"
        })
            .then(function (response) {
                //alert(JSON.stringify(response))
                if (response.ok) {
                    response.json().then(function (json) {
                        //alert(JSON.stringify(json))
                        self.setState({ promotionList: json })
                    })

                } else {
                    console.log('with response ' + response.status);
                }
            })
            .catch(error => { console.log("something went wrong!" + error + response) })


        
        AsyncStorage.getItem("firstname", (err, firstname) => {
            AsyncStorage.getItem("lastname", (err, lastname) => {

                self.setState({
                    firstname,
                    lastname
                }, () => {
                    self.getPromotionsById()
                });
            });
        });


         const { navigation } = this.props;
        var self = this;

        this.focusListener = navigation.addListener('focus', () => {
            self.getInformationsById(884);

            AsyncStorage.getItem("userId", (err, id) => {
                AsyncStorage.getItem("photo", (err, photo) => {

                    //alert(id + "hiuhihihu")
                    // AsyncStorage.getItem("firstname", (err, firstname) => {
                    // AsyncStorage.getItem("lastname", (err, lastname) => {
                    //AsyncStorage.getItem("birthdate", (err, birth_date) => {
                    // AsyncStorage.getItem("Location", (err, Location) => {
                    // AsyncStorage.getItem("numberclaims", (err, numberclaims) => {
                    //    AsyncStorage.getItem("Alltimeearned", (err, Alltimeearned) => {
                    //alert(birth_date)
                    self.setState({
                        photo,
                        //  firstname,
                        //  lastname,
                        // birth_date,
                        // Location,
                        //  numberclaims,
                        //Alltimeearned
                    }, () => {


                        //});
                        // });
                        //});
                        //});
                        // });
                        //});
                    });
                });



            });


        }); */
    }

    componentWillUnmount() {
        // this.focusListener();
    }


    getCompanyById = () => {

        //alert(userId)
        var self = this;


        fetch(self.baseUrl + '/company/getCompanyById?id=5004', {
            method: "GET"
        })
            .then(function (response) {
                //alert(JSON.stringify(response))
                if (response.ok) {
                    response.json().then(function (json) {
                        //alert(JSON.stringify(json))
                        self.setState({ company: json.name })
                    })

                } else {
                    console.log('with response ' + response.status);
                }
            })
            .catch(error => { console.log("something went wrong!" + error + response) })


    }
    getAllpromotion = () => {

        fetch(self.baseUrl + 'promotion/getpromotionsdetails', {
            method: "GET"
        })

            .then(function (response) {

                if (response.ok) {
                    //alert("error from server is ok ! ");
                    response.json().then(function (json) {
                        //self.setState({ promotion: json.id })
                        self.setState({ promotionList: json })

                        /*AsyncStorage.setItem("promotion", promotion, (err) => {
                        });*/
                    }).catch(err => { alert(err) });
                } else {
                    //alert("response from server is not ok ");
                    if (response.status == 400) {
                        alert("email already exist ");


                    }
                }
            }).catch(err => { alert(err) });;
    }

    getPromotionsById = () => {

        //alert(userId)
        var self = this;


        fetch(self.baseUrl + 'promotion/getpromotionbyid?id=10255', {
            method: "GET"
        })
            .then(function (response) {
                //alert(JSON.stringify(response))
                if (response.ok) {
                    response.json().then(function (json) {
                        //alert(JSON.stringify(json))
                        self.setState({ promotion: json.name })
                    })

                } else {
                    console.log('with response ' + response.status);
                }
            })
            .catch(error => { console.log("something went wrong!" + error + response) })


    }
    renderItem = (data) =>
        <TouchableOpacity >
            <Text >{data.item.promotion_name}</Text>
            <Text >{data.item.company_name}</Text>
            {/* <Text style={styles.lightText}>Employee Age : {data.item.employee_age}</Text> */}</TouchableOpacity>



    render() {
        // var {photo} = this.state;
        const { navigation } = this.props;
        self = this
        return (

            <View style={styles.view}>

                <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                    <FlatList
                        data={this.state.dataSource}
                        //ItemSeparatorComponent={this.FlatListItemSeparator}
                        renderItem={item => this.renderItem(item)}
                    //keyExtractor={item => item.id.toString()}
                    />
                    <View style={{ marginTop: "2%", marginLeft: "2%" }}>
                        <Dear></Dear>
                    </View>
                    {/* {self.promotionList.map(promotion => {
                        return <TouchableOpacity onPress={() => navigation.navigate("ClaimOffer")}>
                            <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                                <View style={{ marginTop: "2%", marginLeft: "2%" }}>
                                    <Dear></Dear>
                                </View>
                                <Text style={{ marginLeft: "5%", marginTop: "5%", fontSize: 20, fontWeight: "bold", }}>{promotion.company_name}</Text>
                            </View>
                            <Text style={{ marginLeft: "5%", marginTop: "40%", fontSize: 20, fontWeight: "bold", }}>{promotion.promotion_name}</Text>
                        </TouchableOpacity>
                    })} */}

                </View>


            </View>

        )
    }

}




export default LatestDeals;

const styles = StyleSheet.create({

    view: {
        width: "38%",
        height: "97%",
        borderRadius: 15,
        backgroundColor: "#fff",
        marginLeft: "5%",
        marginTop: "1%"
    },

});
