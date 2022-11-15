import { ScrollView, View } from 'react-native'
import React from 'react'
import Calc from './app/Calc'
import UIDemo from './Src/Container/UIDemo'
import GstClaculator from './app/GstClaculator'
import FunBaseTimer from './app/FunBaseTimer'
import ClassBaseTimer from './app/ClassBaseTimer'
import FlatList1 from './app/FlatList'
import Meesho from './app/Meesho'
import SearchSreen from './app/SearchSreen'
import FilterMainSreen from './app/FilterMainSreen'
import SignInPage from './app/SignInPage'
import ForgetPassSreen from './app/ForgetPassSreen'
import ProdectView from './app/ProdectView'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './assets/colors/colors'
import { TabNavigation } from './Route/TabNavigation'

export default function App() {

  return (
  //   <NavigationContainer>
  //   <TabNavigation/>
  // </NavigationContainer>

    <View>
         <FlatList1 /> 
        {/* <Calc /> */}
        {/* <UIDemo /> */}
        {/* <GstClaculator /> */}
        {/* <FunBaseTimer /> */}
        {/* <ClassBaseTimer /> */}
        {/* <Meesho /> */}
        {/* <SearchSreen /> */}
        {/* <FilterMainSreen /> */}
        {/* <SignInPage /> */}
        {/* <ForgetPassSreen /> */}
        {/* <ProdectView /> */}
        </View>
  )
}

