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
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import {RR, RF, Colors, RW, RH} from '../../../helper/constants';
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TextInputBox} from '../../../helper/element';
import Card from '../../../component/card';

export const Inventory = props => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [imagePicker, setImagePicker] = useState(false);
  const [image, setImage] = useState('');
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [imageInfo, setImageInfo] = useState('');
  const [imageUri, setImageUri] = useState('');
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Cartier ring',
      purchasePrice: 5780,
      type: 'JEWELRY',
      description: 'Gift from my grandfather',
      photo: 'https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg',
    },
    {
      id: 2,
      name: 'Guitar',
      purchasePrice: 850,
      type: 'MUSIC_INSTRUMENT',
      photo: 'https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg',
    },
  ]);

  const submit = async () => {
    try {
      if (item != '' || category != '' || value != '') {
        const payLoad = {
          id: data.length + 1,
          name: item,
          purchasePrice: Number(value),
          type: category,
          description: description,
          photo: imageUri,
        };
        console.warn('payLoad', payLoad);
        const sum = data.reduce(
          (partialSum, a) => partialSum + a.purchasePrice,
          0,
        );

        console.warn('check mod sum', sum);
        const sum2 = Number(sum) + Number(value);
        console.warn('summmmm222', sum2);
        if (sum2 < 40000 || sum2 == 40000) {
          data.push(payLoad);
          setModal(false);
        } else {
          alert('Total amount must not be greater than  40,000 euros');
        }

        console.warn('new added already', data);

        setImageUri('');
      } else {
        alert('all fields are required');
      }
    } catch (e) {
      console.warn('error', e);
    }
  };

  const PickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,

      compressImageQuality: 1,
      showCropGuidelines: true,
      enableRotationGesture: true,
      freeStyleCropEnabled: true,
      cropperCircleOverlay: true,
      cropperStatusBarColor: '#FFFFFF',
      cropperToolbarColor: '#FFFFFF',
    })
      .then(image => {
        console.warn('jjjjjj', image.path);
        const uri = response.path;
        const type = response.mime;
        const name = response.modificationDate
          ? response.modificationDate
          : response.mime;

        const source = {
          uri,
          type,
          name,
        };

        // console.warn('sourceeeee', source);
        uploadAvatar(source);
        setImage(`${image.path}`);
        setImageInfo(image);
        console.warn('Photo selected');
      })
      .catch(e => {
        console.warn('cancel');
        console.warn(e);
      });
  };
  const TakeImage = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,

      compressImageQuality: 1,
      showCropGuidelines: true,
      enableRotationGesture: true,
      freeStyleCropEnabled: true,
      cropperCircleOverlay: true,
      cropperStatusBarColor: '#FFFFFF',
      cropperToolbarColor: '#FFFFFF',
    })
      .then(image => {
        console.warn('jjjjjj', image.path);
        const uri = response.path;
        const type = response.mime;
        const name = response.modificationDate
          ? response.modificationDate
          : response.mime;

        const source = {
          uri,
          type,
          name,
        };

        // console.warn('sourceeeee', source);
        uploadAvatar(source);
        setImage(`${image.path}`);
        setImageInfo(image);
        console.warn('Photo selected');
      })
      .catch(e => {
        console.warn('cancel');
        console.warn(e);
      });
  };

  const uploadAvatar = async photo => {
    setLoading(true);

    console.warn('<<<PHOTO>>>', photo);
    const data = new FormData();

    data.append('file', photo);
    data.append('upload_preset', 'rleqlg89');
    data.append('cloud_name', 'cydene-express');
    var url = 'https://api.cloudinary.com/v1_1/cydene-express/upload';
    const con = {
      headers: {'X-Requested-With': 'XMLHttpRequest'},
    };

    console.warn({data});

    fetch('https://api.cloudinary.com/v1_1/cydene-express/upload', {
      method: 'post',
      body: data,
    })
      .then(res => res.json())
      .then(dat => {
        setLoading(false);
        setImageUri(dat.secure_url);
        // updateLocalStorage(dat.secure_url);
        console.warn('<<<<<<<<response done>>>>>>>', dat.secure_url);
      })
      .catch(err => {
        setLoading(false);
        console.warn('An Error Occured While Uploading', err);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        paddingTop: RR(15),

        backgroundColor: '#E5E5E5',
      }}>
      <View style={{flexDirection: 'row', marginTop: 20, marginLeft: '5%'}}>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',

              width: 310,
            }}>
            Inventory
          </Text>
        </View>
        <TouchableOpacity onPress={() => setModal(true)}>
          <Ionicons name="add-circle" size={32} color="blue" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: 10,
          alignItems: 'center',
          width: RW(90),
          marginLeft: '5%',

          justifyContent: 'space-between',
          height: RH(75),
        }}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: index % 2 == 0 ? 0 : RW(10),
                marginTop: RH(2),
                // width: RW(80),
              }}>
              <Card
                amount={item.purchasePrice}
                name={item.name}
                uri={item.photo}
              />
            </View>
          )}
          numColumns={2}
        />
        {/* </View> */}
      </View>

      <Modal animationType="slide" transparent={true} visible={modal}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000aa',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: '95%',
              width: '100%',
              alignItems: 'center',
              backgroundColor: '#F7F7F7',
              paddingHorizontal: '5%',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}>
            <View
              style={{
                width: '100%',

                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 10,
              }}>
              <TouchableOpacity onPress={() => setModal(false)}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color: 'blue'}}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => submit()}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color: 'gray'}}>
                  Add
                </Text>
              </TouchableOpacity>
              {/* <TextInputBox /> */}
            </View>
            <View
              style={{
                marginTop: '5%',
                width: '100%',
                height: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity onPress={() => setImagePicker(true)}>
                <View
                  style={{
                    borderRadius: 130,
                    width: 130,
                    height: 130,
                    borderWidth: 0.5,
                    borderColor: 'gray',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Entypo name="camera" size={RF(40)} color={'blue'} />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: 'gray',
                      marginTop: 5,
                    }}>
                    Add Photo
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: '5%',
                width: '100%',
                height: '65%',
              }}>
              <ScrollView>
                <KeyboardAvoidingView>
                  <View>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: 'gray',
                        marginTop: 5,
                      }}>
                      Add Photo
                    </Text>

                    <TextInput
                      style={{
                        height: 40,
                        width: '100%',
                        marginTop: 4,
                        padding: 5,
                        backgroundColor: 'white',
                        borderRadius: 5,
                      }}
                      placeholder="Item name"
                      onChangeText={value => setItem(value)}
                    />
                  </View>

                  <View style={{marginTop: 12}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: 'gray',
                        marginTop: 5,
                      }}>
                      Category
                    </Text>

                    <TextInput
                      style={{
                        height: 40,
                        width: '100%',
                        padding: 5,
                        backgroundColor: 'white',
                        borderRadius: 5,
                        marginTop: 4,
                      }}
                      placeholder="Category"
                      onChangeText={value => setCategory(value)}
                    />
                  </View>
                  <View style={{marginTop: 12}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: 'gray',
                        marginTop: 5,
                      }}>
                      Value
                    </Text>

                    <TextInput
                      style={{
                        height: 40,
                        width: '100%',
                        padding: 5,
                        backgroundColor: 'white',
                        borderRadius: 5,
                        marginTop: 4,
                      }}
                      placeholder="Value"
                      keyboardType="numeric"
                      onChangeText={value => setValue(value)}
                    />
                  </View>
                  <View style={{marginTop: 12}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: 'gray',
                        marginTop: 5,
                      }}>
                      Description
                    </Text>

                    <TextInput
                      style={{
                        height: 120,
                        width: '100%',
                        padding: 5,
                        backgroundColor: 'white',
                        borderRadius: 5,
                        marginTop: 4,
                      }}
                      multiline={true}
                      placeholder="Description"
                      onChangeText={value => setDescription(value)}
                    />
                  </View>
                </KeyboardAvoidingView>
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={imagePicker}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000aa',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: '25%',
              width: '100%',
              alignItems: 'center',
              backgroundColor: '#F7F7F7',

              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}>
            <View
              style={{
                height: '25%',
                width: '100%',
                borderBottomWidth: 0.5,
                paddingLeft: '92%',
              }}>
              <TouchableOpacity onPress={() => setImagePicker(false)}>
                <MaterialIcons name="cancel" size={32} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                width: '100%',
                height: '25%',
                borderBottomWidth: 0.5,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => PickImage()}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: 'gray',
                  marginTop: 5,
                }}>
                Choose Photo From Library
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: '25%',
                borderBottomWidth: 0.5,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => TakeImage()}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: 'gray',
                  marginTop: 5,
                }}>
                Take Photo From Camera
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Inventory;
