import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, AsyncStorage } from 'react-native'
import { urlbackoffice } from '../../utils';


class PromotionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: '',
            company_name: '',
            image: '',
            promotion_name: '',
            listPromotions: [] = []

        }

    }

    baseUrl = urlbackoffice;

    componentWillUnmount() {
        //this.focusListener();
    }


    componentDidMount() {

        var self = this;

        AsyncStorage.getItem("promotionId", (err, id) => {
            self.getAllPromotionsdetails(id);
        });



    }




    getAllPromotionsdetails = (promotionId) => {

        var self = this;

        fetch(self.baseUrl + 'promotion/getpromotionsdetails', {
            method: "GET"
        })
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (json) {
                        self.setState({ listPromotions: json })

                    })
                } else {
                    console.log('with response ' + response.status);
                }
            })

            .catch(error => { console.log("smting went wrong!" + error + response) })
    }


    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flexDirection: "row", height: "100%" }}>
                {this.state.listPromotions.length > 0 &&
                    this.state.listPromotions.map(promotion => {
                        return <TouchableOpacity style={styles.view2} onPress={() => navigation.navigate("ClaimOffer", { "idPromotion": promotion.promotion_id })}>
                            <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                                <View style={{ marginTop: "2%", marginLeft: "2%" }}>
                                    {promotion.logo}
                                </View>
                                <Text style={{ marginLeft: "5%", marginTop: "5%", fontSize: 20, fontWeight: "bold", }}>{promotion.company_name}</Text>
                            </View>

                            <View style={{ flexDirection: "column" }}>
                                {promotion.image}
                                <Text style={{ marginLeft: "5%", marginTop: "40%", fontSize: 20, fontWeight: "bold", }}>{promotion.promotion_name}</Text>
                            </View>

                        </TouchableOpacity>
                    })
                }
            </View>
        )
    }
}


export default PromotionPage

const styles = StyleSheet.create({

    view2: {
        width: "32%",
        height: "80%",
        borderRadius: 15,
        backgroundColor: "#fff",
        marginLeft: "5%",
        marginTop: "1%"
    },



});