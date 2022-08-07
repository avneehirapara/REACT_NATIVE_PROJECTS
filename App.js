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



export default function App() {

  return (
    <>
      <ScrollView>
        {/* <FlatList1 /> */}
        {/* <Calc /> */}
        {/* <UIDemo /> */}
        {/* <GstClaculator /> */}
        {/* <FunBaseTimer /> */}
        {/* <ClassBaseTimer /> */}
        {/* <Meesho /> */}
        {/* <SearchSreen /> */}
        {/* <FilterMainSreen /> */}
        {/* <SignInPage /> */}
         <ForgetPassSreen />
      </ScrollView>
    </>
  )
}

