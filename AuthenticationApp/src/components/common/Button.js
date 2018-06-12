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
    backgroundColor: '#A55FC8',
    borderBottomWidth: 2,
    borderColor: '#000',
    marginLeft: 5,
    marginRight: 5
  },

  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }

};


export {Button};