import React from 'react';
import {View, Image, Text} from 'react-native';
import BottomBar from '../components/BottomBar';
import {StyleSheet} from 'react-native';

const Others = () => {
  return (
    <View>
      <View style={{height: '90%', backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            justifyContent: 'space-between',
            borderBottomColor: 'rgba(158, 150, 150, 0.3)',
            borderBottomWidth: 1.5,
          }}>
          <View>
            <Image source={require('../img/Title.png')} />
          </View>
          <View>
            <Image
              style={{height: 56, width: 48}}
              source={require('../img/LogoInspiring.png')}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Tentang</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Favorit Destinasi</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Kritik dan Saran</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Nilai Aplikasi</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Text style={{color: '#4B5563', marginVertical: 20}}>
            Tugas Pemograman Mobile
          </Text>
          <Text style={{color: '#9096A0'}}>Hak Cipta © 2021</Text>
          <Text style={{color: '#4B5563', fontWeight: '500'}}>
            Dinas Kebudayaan Dan Pariwisata Belitung Timur
          </Text>
          <Text style={{color: '#0085CC', marginVertical: 20}}>
            www.dispudpar.beltim.go.id
          </Text>
        </View>
      </View>
      <BottomBar
        iconHome={require('../img/icons/home.png')}
        iconDestinations={require('../img/icons/destinations.png')}
        iconInformations={require('../img/icons/information.png')}
        iconOthers={require('../img/icons/other1.png')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textContainer: {
    borderBottomColor: 'rgba(158, 150, 150, 0.3)',
    borderBottomWidth: 1.5,
  },
  text: {
    color: '#1F2937',
    fontSize: 15,
    fontWeight: '500',
    padding: 20,
  },
});

export default Others;
