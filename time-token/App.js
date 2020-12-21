
import React, { Component } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MainHome from './src/screens/Home';
import TimeToken from './src/screens/TimeToken';
import RegisterPage from './src/screens/RegisterPage';
import SubmitPage from './src/screens/SubmitPage';
import CheckPage from './src/screens/CheckPage';
import ProfilePage from './src/screens/ProfilePage';
import InitialPage from './src/screens/InitialPage';
import EmailConfirmed from './src/screens/EmailConfirmed';
import StepPage from './src/screens/StepPage';
import SelectScreenshot from './src/screens/SelectScreenshot';
import OrderConfirmed from './src/screens/OrderConfirmed';
import DearsPage from './src/screens/DearsPage';
import QRcodePage from './src/screens/QRcodePage';
import ScanQR from './src/screens/ScanQR';
import ClaimOffer from './src/screens/ClaimOffer';
import ClaimSubmitted from './src/screens/ClaimSubmitted';
import LoginPage from './src/screens/loginPage';
import TastyOffers from './src/screens/TastyOffers';
import TastyOffersScroll from './src/screens/TastyOffersScroll';
import EditUser from './src/screens/EditUser';
import TakeaPhoto from './src/screens/TakeaPhoto'


class App extends Component {
  render() {
    const Stack = createStackNavigator();

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
          <Stack.Screen name="TakeaPhoto" component={TakeaPhoto} />
          <Stack.Screen name="ProfilePage" component={ProfilePage} />
          <Stack.Screen name="InitialPage" component={InitialPage} />
          <Stack.Screen name="EmailConfirmed" component={EmailConfirmed} />
          <Stack.Screen name="StepPage" component={StepPage} />
          <Stack.Screen name="SelectScreenshot" component={SelectScreenshot} />
          <Stack.Screen name="OrderConfirmed" component={OrderConfirmed} />
          <Stack.Screen name="DearsPage" component={DearsPage} />
          <Stack.Screen name="QRcodePage" component={QRcodePage} />
          <Stack.Screen name="ScanQR" component={ScanQR} />
          <Stack.Screen name="ClaimOffer" component={ClaimOffer} />
          <Stack.Screen name="ClaimSubmitted" component={ClaimSubmitted} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="TastyOffers" component={TastyOffers} />
          <Stack.Screen name="TastyOffersScroll" component={TastyOffersScroll} />
          <Stack.Screen name="EditUser" component={EditUser} />




        </Stack.Navigator>
      </NavigationContainer >
    )
  }
}
export default App;

/* import RootNavigator from './src/navigation/root'

class App extends Component {

  render() {
    //const Stack = createStackNavigator();

    return (
      <RootNavigator />
    )
  }
} */