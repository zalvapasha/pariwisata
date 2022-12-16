import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import BottomBar from '../components/BottomBar';

const Home = () => {
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          height: '10%',
          borderBottomWidth: 2,
          borderBottomColor: 'rgba(158, 150, 150, 0.3)',
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 5,
            alignItems: 'center',
          }}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image source={require('../img/SmallLogoInspiring.png')} />
          </View>
          <View style={{flex: 3}}>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#9096A0',
                borderRadius: 30,
                paddingHorizontal: 10,
                height: '70%',
                color: 'black',
              }}
              placeholder={'Cari Wisata'}
              placeholderTextColor="#9096A0"
            />
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity>
              <Image source={require('../img/icons/love.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View>
          <Image
            style={{width: '100%'}}
            source={require('../img/Banner.png')}
          />
          <View style={{padding: 15, position: 'absolute', bottom: 0}}>
            <Text style={{color: 'white', fontWeight: '400', fontSize: 20}}>
              Wisata Air
            </Text>
            <Text style={{fontSize: 35, color: 'white'}}>
              Pulau Bukulimau Underwater
            </Text>
          </View>
        </View>
        <View>
          <View style={{padding: 30}}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                color: '#4B5563',
                fontWeight: '500',
              }}>
              Destinasi Wisata
            </Text>
            <Text style={{fontSize: 13, textAlign: 'center', color: '#9096A0'}}>
              Pilihan Terbaik
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingBottom: 25,
              width: '100%',
            }}>
            <View>
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
            <View>
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
            <View>
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

          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              color: '#0085CC',
              margin: 20,
            }}>
            Lihat lainnya
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              borderTopWidth: 2,
              width: '90%',
              borderTopColor: '#E0E0E0',
              marginVertical: 30,
            }}>
            <View style={{padding: 30}}>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  color: '#4B5563',
                  fontWeight: '500',
                }}>
                Jelajahi Sekarang
              </Text>
              <Text
                style={{fontSize: 13, textAlign: 'center', color: '#9096A0'}}>
                Pilih kategori yang dinikmati
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
              }}>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={require('../img/icons/nature.png')}
                />
                <Text style={styles.iconTitle}>Wisata Alam</Text>
              </View>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={require('../img/icons/water.png')}
                />
                <Text style={styles.iconTitle}>Wisata Air</Text>
              </View>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={require('../img/icons/culinary.png')}
                />
                <Text style={styles.iconTitle}>Wisata Kuliner</Text>
              </View>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={require('../img/icons/history.png')}
                />
                <Text style={styles.iconTitle}>Wisata Sejarah</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
              }}>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={require('../img/icons/hotel.png')}
                />
                <Text style={styles.iconTitle}>Hotel</Text>
              </View>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={require('../img/icons/ATM.png')}
                />
                <Text style={styles.iconTitle}>Layanan Publik</Text>
              </View>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={require('../img/icons/transport.png')}
                />
                <Text style={styles.iconTitle}>Transportasi</Text>
              </View>

              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={require('../img/icons/souvenir.png')}
                />
                <Text style={styles.iconTitle}>Belanja Oleh-oleh</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center', marginVertical: 20}}>
          <Image source={require('../img/Covid.png')} />
        </View>
        <View
          style={{width: '100%', alignItems: 'center', alignContent: 'center'}}>
          <View style={{width: '90%'}}>
            <View style={{padding: 20, marginBottom: 15}}>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  color: '#4B5563',
                  fontWeight: '500',
                }}>
                Informasi dan Berita
              </Text>
              <Text
                style={{fontSize: 13, textAlign: 'center', color: '#9096A0'}}>
                Seputar Belitung Timur
              </Text>
            </View>
            <View
              style={{borderBottomWidth: 1.5, borderBottomColor: '#E0E0E0'}}>
              <View style={{borderTopWidth: 1.5, borderTopColor: '#E0E0E0'}}>
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
              <View style={{borderTopWidth: 1.5, borderTopColor: '#E0E0E0'}}>
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
              <View style={{borderTopWidth: 1.5, borderTopColor: '#E0E0E0'}}>
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

            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                color: '#0085CC',
                marginTop: 30,
                marginBottom: 50,
              }}
              onPress={() => navigation.navigate('Informations')}>
              Informasi Lainnya
            </Text>
          </View>
        </View>
      </ScrollView>
      <BottomBar
        iconHome={require('../img/icons/home1.png')}
        iconDestinations={require('../img/icons/destinations.png')}
        iconInformations={require('../img/icons/information.png')}
        iconOthers={require('../img/icons/other.png')}
      />
    </>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'column',
    width: 60,
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconTitle: {
    textAlign: 'center',
    color: '#4B5563',
  },
});

export default Home;
