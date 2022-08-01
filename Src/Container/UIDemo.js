import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../assets/colors/colors';

export default function UIDemo() {
  // state ../../assets/images/1.png

  //change image
  // set state  useState(IMAGE_PATH +
  // '1.png')
  return (
    <View>
      <Text style={styles.fontDemo}>UIDemo</Text>
      <Icon name="verified-user" size={30} color="#4F8EF7" />
      <Image source={imageS} />

    </View>
  )
}

export const styles = StyleSheet.create({
  fontDemo: {
    fontSize: 50,
    fontFamily: 'Roboto-Bold',
    color: colors.secondary
  }
})