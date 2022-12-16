import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';

const Destinations = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <TopBar
        title="Destinasi"
        searchIcon={require('../img/icons/search.png')}
        mapIcon={require('../img/icons/map.png')}
      />
      <ScrollView style={{paddingTop: 10, height: '80%'}}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingBottom: 25,
              width: '100%',
            }}>
            <View style={{}}>
              <Image
                style={{borderRadius: 10, overflow: 'hidden'}}
                source={require('../img/PantaiSerdang.png')}
              />
              <View
                style={{
                  padding: 5,
                  position: 'absolute',
                  bottom: 0,
                  backgroundColor: 'rgba(10, 40, 40, 0.5)',
                  width: '100%',
                  borderBottomEndRadius: 10,
                  borderBottomStartRadius: 10,
                }}>
                <Text style={{fontSize: 15, color: 'white'}}>
                  Pantai Serdang
                </Text>
              </View>
            </View>
            <View style={{}}>
              <Image
                style={{borderRadius: 10, overflow: 'hidden'}}
                source={require('../img/PatungDewiKwanIm.png')}
              />
              <View
                style={{
                  padding: 5,
                  position: 'absolute',
                  bottom: 0,
                  backgroundColor: 'rgba(10, 40, 40, 0.5)',
                  width: '100%',
                  borderBottomEndRadius: 10,
                  borderBottomStartRadius: 10,
                }}>
                <Text style={{fontSize: 15, color: 'white'}}>
                  Vihara Patung Dewi Kwan Im
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingBottom: 25,
            }}>
            <View>
              <Image
                style={{borderRadius: 10, overflow: 'hidden'}}
                source={require('../img/LaskarPelangi.png')}
              />
              <View
                style={{
                  padding: 5,
                  position: 'absolute',
                  bottom: 0,
                  backgroundColor: 'rgba(10, 40, 40, 0.5)',
                  width: '100%',
                  borderBottomEndRadius: 10,
                  borderBottomStartRadius: 10,
                }}>
                <Text style={{fontSize: 15, color: 'white'}}>
                  Replika SD Laskar Pelangi
                </Text>
              </View>
            </View>
            <View style={{}}>
              <Image
                style={{borderRadius: 10, overflow: 'hidden'}}
                source={require('../img/PantaiNyiurMelambai.png')}
              />
              <View
                style={{
                  padding: 5,
                  position: 'absolute',
                  bottom: 0,
                  backgroundColor: 'rgba(10, 40, 40, 0.5)',
                  width: '100%',
                  borderBottomEndRadius: 10,
                  borderBottomStartRadius: 10,
                }}>
                <Text style={{fontSize: 15, color: 'white'}}>
                  Pantai Nyiur Melambai
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingBottom: 25,
              width: '100%',
            }}>
            <View style={{}}>
              <Image
                style={{borderRadius: 10, overflow: 'hidden'}}
                source={require('../img/PantaiSerdang.png')}
              />
              <View
                style={{
                  padding: 5,
                  position: 'absolute',
                  bottom: 0,
                  backgroundColor: 'rgba(10, 40, 40, 0.5)',
                  width: '100%',
                  borderBottomEndRadius: 10,
                  borderBottomStartRadius: 10,
                }}>
                <Text style={{fontSize: 15, color: 'white'}}>
                  Pantai Serdang
                </Text>
              </View>
            </View>
            <View style={{}}>
              <Image
                style={{borderRadius: 10, overflow: 'hidden'}}
                source={require('../img/PatungDewiKwanIm.png')}
              />
              <View
                style={{
                  padding: 5,
                  position: 'absolute',
                  bottom: 0,
                  backgroundColor: 'rgba(10, 40, 40, 0.5)',
                  width: '100%',
                  borderBottomEndRadius: 10,
                  borderBottomStartRadius: 10,
                }}>
                <Text style={{fontSize: 15, color: 'white'}}>
                  Vihara Patung Dewi Kwan Im
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingBottom: 25,
            }}>
            <View>
              <Image
                style={{borderRadius: 10, overflow: 'hidden'}}
                source={require('../img/LaskarPelangi.png')}
              />
              <View
                style={{
                  padding: 5,
                  position: 'absolute',
                  bottom: 0,
                  backgroundColor: 'rgba(10, 40, 40, 0.5)',
                  width: '100%',
                  borderBottomEndRadius: 10,
                  borderBottomStartRadius: 10,
                }}>
                <Text style={{fontSize: 15, color: 'white'}}>
                  Replika SD Laskar Pelangi
                </Text>
              </View>
            </View>
            <View style={{}}>
              <Image
                style={{borderRadius: 10, overflow: 'hidden'}}
                source={require('../img/PantaiNyiurMelambai.png')}
              />
              <View
                style={{
                  padding: 5,
                  position: 'absolute',
                  bottom: 0,
                  backgroundColor: 'rgba(10, 40, 40, 0.5)',
                  width: '100%',
                  borderBottomEndRadius: 10,
                  borderBottomStartRadius: 10,
                }}>
                <Text style={{fontSize: 15, color: 'white'}}>
                  Pantai Nyiur Melambai
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomBar
        iconHome={require('../img/icons/home.png')}
        iconDestinations={require('../img/icons/destinations1.png')}
        iconInformations={require('../img/icons/information.png')}
        iconOthers={require('../img/icons/other.png')}
      />
    </View>
  );
};
export default Destinations;
