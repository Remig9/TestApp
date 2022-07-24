import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import {RW} from '../helper/constants';

export default function Card(props) {
  return (
    <TouchableOpacity
      style={{backgroundColor: 'white', borderRadius: 16, width: RW(40)}}>
      <Image
        style={{
          width: RW(40),
          height: 130,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
        source={{
          uri:
            props.uri ||
            'https://cdn.gatsbyjewellery.co.uk/wp-content/uploads/2021/06/IMG_0366.jpg',
        }}
      />

      <View style={{marginTop: 10, padding: 18, width: RW(40)}}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>{props.name}</Text>

        <Text style={{color: 'gray', fontSize: 18, marginTop: 25}}>
          E{props.amount}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
