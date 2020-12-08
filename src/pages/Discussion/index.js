/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View, Picker} from 'react-native';
import {Button, Gap, Header, Input} from '../../component';
import ProfileRec from '../../component/molekules/ProfileRec';
import {colors} from '../../utils';

export default function Discussion({desc, navigation}) {
  const [selectedValue, setSelectedValue] = useState(0);
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Header type="dark-profile" style={styles.header} onPress={() => navigation.navigate('Doctor')}/>
        <Gap height={40} />
        <ProfileRec />
        <Text>{desc}</Text>
        <View style={styles.content}>
          <Input style={styles.input} placeholder="Nama Grup" />
          <Gap height={16} />
          <View style={styles.pick}>
            <Picker
              style={styles.contet}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="Choose a category" value="" />
              <Picker.Item label="Doctor" value="1" />
              <Picker.Item label="Patient" value="2" />
            </Picker>
          </View>
          <Gap height={90} />
          <Button title="Buat Grup" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
  input: {
    color: colors.text.secondary,
  },
  pick: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    width: 150,
  },
  contet: {
    color: colors.text.secondary,
    fontSize: 5,
  },
});