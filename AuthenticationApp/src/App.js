import React, {Component} from 'react'
import {View, Text} from 'react-native'
import firebase from 'firebase';
import {Header} from "./components/common";
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA34I5yriS1KmDmYC782tMUnZrfRlsqJ-0',
      authDomain: 'rn-authentication-85bd5.firebaseapp.com',
      databaseURL: 'https://rn-authentication-85bd5.firebaseio.com',
      projectId: 'rn-authentication-85bd5',
      storageBucket: 'rn-authentication-85bd5.appspot.com',
      messagingSenderId: '1097375859428'
    })
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"></Header>
        <LoginForm />
      </View>
    );
  }
}

export default App;