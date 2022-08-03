import { ScrollView, View } from 'react-native'
import React from 'react'
import Calc from './app/Calc'
import UIDemo from './Src/Container/UIDemo'
import GstClaculator from './app/GstClaculator'
import FunBaseTimer from './app/FunBaseTimer'
import ClassBaseTimer from './app/ClassBaseTimer'
import FlatList1 from './app/FlatList'
import Meesho from './app/meesho'



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
        <Meesho />
      </ScrollView>
    </>
  )
}

