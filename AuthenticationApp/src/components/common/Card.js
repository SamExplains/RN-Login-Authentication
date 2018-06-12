import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle} >
      {/*Passes the WHOLE <Text>{props.album.detail}</Text> as a child object. No need to render again just passes
       completely like that and render it inside the card through props.children*/}
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export {Card};