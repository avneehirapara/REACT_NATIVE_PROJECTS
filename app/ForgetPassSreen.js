import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function ForgetPassSreen() {
  return (
    <View style={styles.container}>
      <View>
        {/* ----------------------CORSS ICON --------------------- */}
        <TouchableOpacity>
          <Entypo name='cross' style={styles.crossIcon} ></Entypo>
        </TouchableOpacity>
      </View>
      {/* ----------------------MEESHO BANNER --------------------- */}
      <View style={styles.meeshoImg}>
        <Image source={require('../assets/images/meesho.png')} />
      </View>
      {/* ----------------------MOBILE INPUT --------------------- */}
      <View style={styles.MobileBox}>
        <MaterialIcons name='phone' style={styles.InputIcon} />
        <TextInput style={styles.TextInput}
          placeholder='Mobile number'
        />
      </View>
      {/* ----------------------ENTER CAPTCHA --------------------- */}

      <View style={styles.captchabox}>

        <TextInput style={[styles.TextInput , {marginLeft:20}]}
          placeholder='Enter captcha'
        />
        {/* <Image source={require('../assets/images/captcga.png')} /> */}
        {/* =======================================images */}
        <FontAwesome name='undo' style={styles.undo} />
      </View>
      {/* ----------------------RESET BUTTON --------------------- */}
      <TouchableOpacity>
        <View style={styles.SignInButton}>

          <Text style={styles.SignInText}>Reset Password</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginLeft:15,
    // marginRight:15   
  },
  crossIcon: {
    color: 'black',
    marginTop: 11,         //===========crose horizontal end //
    marginLeft: 341,
    // marginRight: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    fontSize: 30
  },
  meeshoImg: {
    alignSelf: 'center',
    marginTop: 63,
  },

  MobileBox: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    height: 50,
    width: 350,
    borderRadius: 10,
    marginTop: 97,
    alignSelf: 'center'

  },

  InputIcon: {
    marginRight: 9,
    marginLeft: 20,
    marginTop: 16,
    marginBottom: 11,
    fontSize: 20,
  },
  TextInput: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 17,
    alignSelf: 'center',
    width: 300,
  
  },

  captchabox: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    height: 50,
    width: 350,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center'
  },
  undo: {
    marginTop: 15,
    marginBottom: 11,
    fontSize: 20,
    justifyContent: 'flex-end'
  },
  
  SignInButton: {
    height: 50,
    width: 325,
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 40,
  },
  SignInText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'center',
    marginTop: 15,
  },
})