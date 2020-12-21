
import React, { Component } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MainHome from '../screens/Home';
import TimeToken from '../screens/TimeToken';
import RegisterPage from '../screens/RegisterPage';
import SubmitPage from '../screens/SubmitPage';
import CheckPage from '../screens/CheckPage';
import MenuPage from '../screens/MenuPage';
import ProfilePage from '../screens/ProfilePage';
import InitialPage from '../screens/InitialPage';
import InitialPage2 from '../screens/InitialPage2';
import EmailConfirmed from '../screens/EmailConfirmed';
import StepPage from '../screens/StepPage';
import StepPage1 from '../screens/StepPage1';
import StepPage2 from '../screens/StepPage2';
import StepPage3 from '../screens/StepPage3';
import SelectScreenshot from '../screens/SelectScreenshot';
import SelectScreenshot2 from '../screens/SelectScreenshot2';
import OrderConfirmed from '../screens/OrderConfirmed';
import ClaimSubmitted from '../screens/ClaimSubmitted';
import DearsPage from '../screens/DearsPage';
import DearsPage2 from '../screens/DearsPage2';
import QRcodePage from '../screens/QRcodePage';
import ScanQR from '../screens/ScanQR';
import ClaimOffer from '../screens/ClaimOffer';
import LoginPage from '../screens/loginPage';
import TastyOffers from '../screens/TastyOffers';
import TastyOffersScroll from '../screens/TastyOffersScroll';

const Stack = createStackNavigator();


const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TimeToken" screenOptions={{
                headerShown: false
            }} >
                <Stack.Screen name="Home" component={MainHome} options={{ headerTransparent: true, title: '' }} />
                <Stack.Screen name="TimeToken" component={TimeToken} />
                <Stack.Screen name="RegisterPage" component={RegisterPage} />
                <Stack.Screen name="SubmitPage" component={SubmitPage} />
                <Stack.Screen name="CheckPage" component={CheckPage} />
                <Stack.Screen name="MenuPage" component={MenuPage} />
                <Stack.Screen name="ProfilePage" component={ProfilePage} />
                <Stack.Screen name="InitialPage" component={InitialPage} />
                <Stack.Screen name="InitialPage2" component={InitialPage2} />
                <Stack.Screen name="EmailConfirmed" component={EmailConfirmed} />
                <Stack.Screen name="StepPage" component={StepPage} />
                <Stack.Screen name="StepPage1" component={StepPage1} />
                <Stack.Screen name="StepPage2" component={StepPage2} />
                <Stack.Screen name="StepPage3" component={StepPage3} />
                <Stack.Screen name="SelectScreenshot" component={SelectScreenshot} />
                <Stack.Screen name="SelectScreenshot2" component={SelectScreenshot2} />
                <Stack.Screen name="OrderConfirmed" component={OrderConfirmed} />
                <Stack.Screen name="ClaimSubmitted" component={ClaimSubmitted} />
                <Stack.Screen name="TastyOffers" component={TastyOffers} />
                <Stack.Screen name="TastyOffersScroll" component={TastyOffersScroll} />
                <Stack.Screen name="DearsPage" component={DearsPage} />
                <Stack.Screen name="DearsPage2" component={DearsPage2} />
                <Stack.Screen name="QRcodePage" component={QRcodePage} />
                <Stack.Screen name="ScanQR" component={ScanQR} />
                <Stack.Screen name="ClaimOffer" component={ClaimOffer} />
                <Stack.Screen name="LoginPage" component={LoginPage} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default MainStackNavigator;
