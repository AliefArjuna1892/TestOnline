/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DummyUser, IconPhoto, IconPhoto1, IconPhoto2} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function ProfileRec({onPress,desc}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
        <Image source={IconPhoto2} style={styles.avatar} />
      </TouchableOpacity>
      <View>
          <Text style={styles.profession}>Tambahkan foto grup</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    height: 45,
  },
  borderProfile: {
    width: 100,
    height: 100,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
  },
  profession: {
    fontSize: 14  ,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    paddingTop: 15,
    textAlign: 'center',
  },
  removePhoto: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
});
