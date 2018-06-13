import React from 'react';
import {Text, TouchableOpacity } from 'react-native';

const Button = ( { onPress, children } ) => {
  const {buttonStyle, textStyle} =  styles;
  return (
    <TouchableOpacity onPress={ onPress } style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#cbd4c2',
    borderBottomWidth: 4,
    borderColor: '#50514f',
    marginLeft: 5,
    marginRight: 5
  },

  textStyle: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 16,
    fontWeight: '800',
    paddingTop: 10,
    paddingBottom: 10
  }

};


export {Button};