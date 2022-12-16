import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BottomBar = props => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopColor: '#E7E7E7',
        height: '10%',
        width: '100%',
        borderTopWidth: 1,
        backgroundColor: 'white',
      }}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <View style={styles.icon}>
            <Image source={props.iconHome} />
            <Text style={styles.iconTitle}>Beranda</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Destinations');
          }}>
          <View style={styles.icon}>
            <Image source={props.iconDestinations} style={{marginTop: '3%'}} />
            <Text style={styles.iconTitle}>Destinasi</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Informations');
          }}>
          <View style={styles.icon}>
            <Image source={props.iconInformations} />
            <Text style={styles.iconTitle}>Informasi</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Others');
          }}>
          <View style={styles.icon}>
            <Image source={props.iconOthers} />
            <Text style={styles.iconTitle}>Lainnya</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  iconTitle: {
    fontSize: 11,
    color: '#9096A0',
    fontWeight: '500',
  },
  icon: {
    height: '72%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default BottomBar;
