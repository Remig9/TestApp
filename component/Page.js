import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  Linking,
  Alert,
  PermissionsAndroid,
  TouchableOpacity,
  Modal,
} from 'react-native';

import {useStoreActions, useStoreState} from 'easy-peasy';

import Home from '../src/Auth/Home/home';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {AppIcons} from '../helper/images';
import {Colors, RF} from '../helper/constants';
import Investment from '../src/Auth/Home/investment';
import Inventory from '../src/Auth/Home/inventory';
import Verify from '../src/Auth/Home/verify';
import Menu from '../src/Auth/Home/menu';

// import {Success} from '../Home/success';

const Page = props => {
  const {realActive} = useStoreState(state => ({
    realActive: state.activePage.active,
  }));

  // const {requestCount} = useStoreState(state => ({
  //   requestCount: state.requestCount.count,
  // }));
  const updaterequestCount = useStoreActions(
    actions => actions.requestCount.updateRequestCount,
  );

  const {requestCount} = useStoreState(state => ({
    requestCount: state.requestCount.count,
  }));
  const [countR, setCountR] = useState(0);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState('Home2');
  const all = () => {};
  const updateActive = useStoreActions(
    actions => actions.activePage.updateActive,
  );

  useEffect(() => {
    // console.warn('yy');
  }, [realActive]);

  return (
    <View style={{flex: 1}}>
      <View style={{height: '90%'}}>
        {realActive == 'Home' ? <Home props={props} /> : null}
        {realActive == 'Investment' ? <Investment props={props} /> : null}
        {realActive == 'Inventory' ? <Inventory props={props} /> : null}
        {realActive == 'Verify' ? <Verify props={props} /> : null}
        {realActive == 'Menu' ? <Menu props={props} /> : null}
      </View>
      <View
        style={{
          height: '10%',

          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            height: '100%',

            width: '15%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => updateActive('Home')}>
            <View style={{marginTop: '-10%'}}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo
                  name="home"
                  size={RF(20)}
                  color={realActive == 'Home' ? Colors.appPrimary : 'black'}
                />
              </View>
              <View>
                <Text
                  style={{
                    color: realActive == 'Home' ? Colors.appPrimary : 'black',
                  }}>
                  Home
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* <View
          style={{
            height: '100%',

            width: '15%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => updateActive('Investment')}>
            <View style={{marginTop: '-10%'}}>
              <MaterialCommunityIcons
                name="umbrella"
                size={RF(20)}
                color={realActive == 'Investment' ? Colors.appPrimary : 'black'}
              />
              <View>
                <Text
                  style={{
                    color:
                      realActive == 'Investment' ? Colors.appPrimary : 'black',
                  }}>
                  Investment
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View> */}

        <View
          style={{
            height: '100%',

            width: '15%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => updateActive('Investment')}>
            <View style={{marginTop: '-10%'}}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialCommunityIcons
                  name="umbrella"
                  size={RF(20)}
                  color={
                    realActive == 'Investment' ? Colors.appPrimary : 'black'
                  }
                />
              </View>
              <View>
                <Text
                  style={{
                    color:
                      realActive == 'Investment' ? Colors.appPrimary : 'black',
                  }}>
                  Invest
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: '100%',

            width: '15%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => updateActive('Inventory')}>
            <View style={{marginTop: '-10%'}}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo
                  name="folder"
                  size={RF(20)}
                  color={
                    realActive == 'Inventory' ? Colors.appPrimary : 'black'
                  }
                />
              </View>
              <View>
                <Text
                  style={{
                    color:
                      realActive == 'Inventory' ? Colors.appPrimary : 'black',
                  }}>
                  Inventory
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: '100%',

            width: '15%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => updateActive('Verify')}>
            <View style={{marginTop: '-10%'}}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons
                  name="search"
                  size={RF(20)}
                  color={realActive == 'Verify' ? Colors.appPrimary : 'black'}
                />
              </View>

              <View>
                <Text
                  style={{
                    color: realActive == 'Verify' ? Colors.appPrimary : 'black',
                  }}>
                  Search
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: '100%',

            width: '15%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => updateActive('Menu')}>
            <View style={{marginTop: '-10%'}}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo
                  name="menu"
                  size={RF(20)}
                  color={realActive == 'Menu' ? Colors.appPrimary : 'black'}
                />
              </View>
              <View>
                <Text
                  style={{
                    color: realActive == 'Menu' ? Colors.appPrimary : 'black',
                  }}>
                  Menu
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

export default Page;
