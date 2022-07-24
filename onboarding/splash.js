import React, {useState, useEffect, useCallback} from 'react';

import {Image, Text, TouchableOpacity, View, TextInput} from 'react-native';
import {AppIcons} from '../helper/images';
import {RouteContext} from '../helper/route_context';

export const Splash = props => {
  const {setCurrentState} = React.useContext(RouteContext);
  const getUserDetails = async () => {
    setCurrentState('login');
  };

  useEffect(() => {
    setTimeout(() => getUserDetails(), 500);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: '50%',
          width: '80%',

          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{height: '50%', width: '80%'}}
          source={AppIcons.appLogo}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
};

export default Splash;
