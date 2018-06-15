import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input} from "./common";
import {Spinner} from "./common/Spinner";

class LoginForm extends  Component{
  state = { email: '', password: '', error: '', loading: false };
  onButtonPress(){
    const {email, password} = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        /*Attempt to Create user account if not user is found*/
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch( () => {
            this.setState({error: 'Authentication Failed.'});
          });
      });
  };

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small"/>;
    }
    return (
      <Button
        onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({email})} />
        </CardSection>

        <CardSection>
          <Input
            placeholder="password"
            secureTextEntry
            label="Password"
            value = {this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={style.errorTextStyle}>
          {/*Only displays when errors occur*/}
          {this.state.error}
          </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const style = {
  errorTextStyle:{
  fontSize: 20,
  alignSelf: 'center',
  color: 'red'
  }
};

export default LoginForm;