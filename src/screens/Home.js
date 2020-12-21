import React from 'react';

import { View, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: "#fff",
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    item: {
        width: '10%' // is 50% of container width
    }
});
function Home(props) {
    return (
        <View style={styles.container}>
            <Button style={styles.item} title="TimeToken" onPress={() => props.navigation.navigate('TimeToken')}></Button>
            <Button style={styles.item} title="RegisterPage" onPress={() => props.navigation.navigate('RegisterPage')}></Button>

            <Button style={styles.item} title="SubmitPage" onPress={() => props.navigation.navigate('SubmitPage')}></Button>
            <Button style={styles.item} title="CheckPage" onPress={() => props.navigation.navigate('CheckPage')}></Button>


            <Button style={styles.item} title="TakeaPhoto" onPress={() => props.navigation.navigate('TakeaPhoto')}></Button>

            <Button style={styles.item} title="InitialPage" onPress={() => props.navigation.navigate('InitialPage')}></Button>

            <Button style={styles.item} title="EmailConfirmed" onPress={() => props.navigation.navigate('EmailConfirmed')}></Button>
            <Button style={styles.item} title="StepPage" onPress={() => props.navigation.navigate('StepPage')}></Button>

            <Button style={styles.item} title="LoginPage" onPress={() => props.navigation.navigate('LoginPage')}></Button>
            <Button style={styles.item} title="ClaimOffer" onPress={() => props.navigation.navigate('ClaimOffer')}></Button>
            <Button style={styles.item} title="SelectScreenshot" onPress={() => props.navigation.navigate('SelectScreenshot')}></Button>
            <Button style={styles.item} title="OrderConfirmed" onPress={() => props.navigation.navigate('OrderConfirmed')}></Button>
            <Button style={styles.item} title="ClaimSubmitted" onPress={() => props.navigation.navigate('ClaimSubmitted')}></Button>
            <Button style={styles.item} title="DearsPage" onPress={() => props.navigation.navigate('DearsPage')}></Button>

            <Button style={styles.item} title="QRcodePage" onPress={() => props.navigation.navigate('QRcodePage')}></Button>
            <Button style={styles.item} title="ProfilePage" onPress={() => props.navigation.navigate('ProfilePage')}></Button>
            <Button style={styles.item} title="TastyOffers" onPress={() => props.navigation.navigate('TastyOffers')}></Button>
            <Button style={styles.item} title="TastyOffersScroll" onPress={() => props.navigation.navigate('TastyOffersScroll')}></Button>
            <Button style={styles.item} title="ScanQR" onPress={() => props.navigation.navigate('ScanQR')}></Button>

        </View>
    );
}
export default Home;