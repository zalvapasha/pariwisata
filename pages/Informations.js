import React from 'react';
import TopBar from '../components/TopBar';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import BottomBar from '../components/BottomBar';

const Informations = () => {
  return (
    <>
      <TopBar title="Informasi dan Berita" />
      <ScrollView style={{height: '80%'}}>
        <View
          style={{
            paddingHorizontal: 20,
            backgroundColor: 'white',
          }}>
          <View style={{borderBottomWidth: 1.5, borderBottomColor: '#E0E0E0'}}>
            <View style={{marginVertical: 20, flexDirection: 'row'}}>
              <Image
                style={{borderRadius: 10, overflow: 'hidden'}}
                source={require('../img/News/kerjurkab.png')}
              />
              <View style={{marginLeft: 15, width: '80%'}}>
                <Text style={{fontSize: 18, color: '#1F2937'}}>
                  Adakan Kerjurkab Tinju 2022
                </Text>
                <Text style={{color: '#9096A0'}}>20 Oktober 2021</Text>
              </View>
            </View>
          </View>
          <View style={{borderBottomWidth: 1.5, borderBottomColor: '#E0E0E0'}}>
            <View style={{marginVertical: 20, flexDirection: 'row'}}>
              <Image
                style={{borderRadius: 10, overflow: 'hidden'}}
                source={require('../img/News/JobFair.png')}
              />
              <View style={{marginLeft: 15, width: '80%'}}>
                <Text style={{fontSize: 18, color: '#1F2937'}}>
                  Wakub Beltim Apresiasi Job Fair Beltim
                </Text>
                <Text style={{color: '#9096A0'}}>15 Oktober 2021</Text>
              </View>
            </View>
          </View>
          <View style={{borderBottomWidth: 1.5, borderBottomColor: '#E0E0E0'}}>
            <View style={{marginVertical: 20, flexDirection: 'row'}}>
              <Image
                style={{borderRadius: 10, overflow: 'hidden'}}
                source={require('../img/News/LKPM.png')}
              />
              <View style={{marginLeft: 15, width: '80%'}}>
                <Text style={{fontSize: 18, color: '#1F2937'}}>
                  LKPM Buat Proyek Pemerintah Jadi Lebih Terpantau
                </Text>
                <Text style={{color: '#9096A0'}}>8 Oktober 2021</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            backgroundColor: 'white',
          }}>
          <View style={{borderBottomWidth: 1.5, borderBottomColor: '#E0E0E0'}}>
            <View style={{marginVertical: 20, flexDirection: 'row'}}>
              <Image
                style={{borderRadius: 10, overflow: 'hidden'}}
                source={require('../img/News/kerjurkab.png')}
              />
              <View style={{marginLeft: 15, width: '80%'}}>
                <Text style={{fontSize: 18, color: '#1F2937'}}>
                  Adakan Kerjurkab Tinju 2022
                </Text>
                <Text style={{color: '#9096A0'}}>20 Oktober 2021</Text>
              </View>
            </View>
          </View>
          <View style={{borderBottomWidth: 1.5, borderBottomColor: '#E0E0E0'}}>
            <View style={{marginVertical: 20, flexDirection: 'row'}}>
              <Image
                style={{borderRadius: 10, overflow: 'hidden'}}
                source={require('../img/News/JobFair.png')}
              />
              <View style={{marginLeft: 15, width: '80%'}}>
                <Text style={{fontSize: 18, color: '#1F2937'}}>
                  Wakub Beltim Apresiasi Job Fair Beltim
                </Text>
                <Text style={{color: '#9096A0'}}>15 Oktober 2021</Text>
              </View>
            </View>
          </View>
          <View style={{borderBottomWidth: 1.5, borderBottomColor: '#E0E0E0'}}>
            <View style={{marginVertical: 20, flexDirection: 'row'}}>
              <Image
                style={{borderRadius: 10, overflow: 'hidden'}}
                source={require('../img/News/LKPM.png')}
              />
              <View style={{marginLeft: 15, width: '80%'}}>
                <Text style={{fontSize: 18, color: '#1F2937'}}>
                  LKPM Buat Proyek Pemerintah Jadi Lebih Terpantau
                </Text>
                <Text style={{color: '#9096A0'}}>8 Oktober 2021</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            backgroundColor: 'white',
          }}>
          <View style={{borderBottomWidth: 1.5, borderBottomColor: '#E0E0E0'}}>
            <View style={{marginVertical: 20, flexDirection: 'row'}}>
              <Image
                style={{borderRadius: 10, overflow: 'hidden'}}
                source={require('../img/News/kerjurkab.png')}
              />
              <View style={{marginLeft: 15, width: '80%'}}>
                <Text style={{fontSize: 18, color: '#1F2937'}}>
                  Adakan Kerjurkab Tinju 2022
                </Text>
                <Text style={{color: '#9096A0'}}>20 Oktober 2021</Text>
              </View>
            </View>
          </View>
          <View style={{borderBottomWidth: 1.5, borderBottomColor: '#E0E0E0'}}>
            <View style={{marginVertical: 20, flexDirection: 'row'}}>
              <Image
                style={{borderRadius: 10, overflow: 'hidden'}}
                source={require('../img/News/JobFair.png')}
              />
              <View style={{marginLeft: 15, width: '80%'}}>
                <Text style={{fontSize: 18, color: '#1F2937'}}>
                  Wakub Beltim Apresiasi Job Fair Beltim
                </Text>
                <Text style={{color: '#9096A0'}}>15 Oktober 2021</Text>
              </View>
            </View>
          </View>
          <View style={{borderBottomWidth: 1.5, borderBottomColor: '#E0E0E0'}}>
            <View style={{marginVertical: 20, flexDirection: 'row'}}>
              <Image
                style={{borderRadius: 10, overflow: 'hidden'}}
                source={require('../img/News/LKPM.png')}
              />
              <View style={{marginLeft: 15, width: '80%'}}>
                <Text style={{fontSize: 18, color: '#1F2937'}}>
                  LKPM Buat Proyek Pemerintah Jadi Lebih Terpantau
                </Text>
                <Text style={{color: '#9096A0'}}>8 Oktober 2021</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomBar
        iconHome={require('../img/icons/home.png')}
        iconDestinations={require('../img/icons/destinations.png')}
        iconInformations={require('../img/icons/information1.png')}
        iconOthers={require('../img/icons/other.png')}
      />
    </>
  );
};
export default Informations;
