import { ScrollView, View } from 'react-native'
import React from 'react'
import Calc from './app/Calc'
import UIDemo from './Src/Container/UIDemo'
import GstClaculator from './app/GstClaculator'
import FunBaseTimer from './app/FunBaseTimer'
import ClassBaseTimer from './app/ClassBaseTimer'


export default function App() {
 
  return (
     <>   
   <ScrollView>
      <Calc />
     {/* <UIDemo /> */}
     <GstClaculator />
     <FunBaseTimer />
     <ClassBaseTimer />
   </ScrollView>
     </>
  )
}

