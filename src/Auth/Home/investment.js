import React, {useState, useEffect} from 'react';
import {Container} from '../../helper';
import {
  StatusBar,
  View,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {RH, RR, RW} from '../../../helper/constants';
import LottieView from 'lottie-react-native';

export const Investment = props => {
  const [visible, setVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: RR(15),
        paddingHorizontal: '5%',
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          color: 'gray',
          marginBottom: 10,
        }}>
        INVESTMENT
      </Text>
      <LottieView
        source={require('../../../comingSoon.json')}
        autoPlay
        loop
        style={{width: RW(50), height: RH(50)}}
      />
    </View>
  );
};

export default Investment;
