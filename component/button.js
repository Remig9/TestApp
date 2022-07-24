import React, {useState, useEffect} from 'react';

import {Colors, RF, RR} from '../helper/constants';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
export const Button = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.bg || Colors.appPrimary,
        height: props.height || RF(63),
        width: props.width,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginTop: props.marginTop,
        marginLeft: props.marginLeft,
        borderWidth: props.borderWidth,
      }}
      onPress={props.onPress}>
      {props.loading ? (
        <ActivityIndicator size="large" color="#FFFFFF" />
      ) : (
        <Text
          style={{color: props.color || Colors.appWhite, fontFamily: 'bold'}}>
          {props.text}
        </Text>
      )}
    </TouchableOpacity>
  );
};
