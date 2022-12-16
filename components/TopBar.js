import React from 'react';
import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TopBar = props => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        height: '10%',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: '500', color: '#4B5563'}}>
          {props.title}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '18%',
          alignItems: 'center',
        }}>
        <Image style={{width: 22, height: 22}} source={props.searchIcon} />
        <TouchableOpacity onPress={props.mapIconOnPress}>
          <Image style={{width: 22, height: 22}} source={props.mapIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
