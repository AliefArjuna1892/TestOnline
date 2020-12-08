/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';

const ListHospital = ({pic, type, name, address}) => {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.picture} />
      <View style={styles.a}>
        <Text style={styles.title}>{type}</Text>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  picture: {
    width: 80,
    height: 60,
    borderRadius: 11,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
  },
});
