// // import { View, Text, TouchableOpacity,StatusBar ,Switch,StyleSheet} from 'react-native'
// // import React, { useState } from 'react'
// // import { Theme } from '../Src/Componet/contx/Theme';
// // import { Colors } from 'react-native/Libraries/NewAppScreen';
// // import { myColors } from '../Src/Componet/Style/Color';


// // export default function Clac() { 

// //     const[theme,setTheme] = useState('light')
// //     let [equation,setequation] = useState('');

// //     let handlePressDigit = (value) => {
// //         setequation(equation + value);
// //     }

// //     let handlePressEqual = () => {
// //         setequation(eval(equation).toString());
// //     }
// //     let restart = () => {
// //         setequation('');
// //     }
// //   return (
// //     <View style={theme === 'light' ? styles.container : [styles.container,{backgroundColor:'#000'}] }>
// //         <StatusBar backgroundColor='gray'/>
// //       <View >
// //       <Switch 
// //       value = {theme ==='light'}
// //        onValueChange = {() =>setTheme(theme === 'light' ? 'dark' :'light')}
// //        />
// //         <View>
// //             <Text>display</Text>
// //         </View>
// //         <View>
// //             <TouchableOpacity onPress={() => restart(0)}><Text>C</Text></TouchableOpacity>
// //         </View>

// //         <View>
// //         <TouchableOpacity onPress={() => handlePressDigit('7')}><Text>7</Text></TouchableOpacity>
// //         <TouchableOpacity onPress={() => handlePressDigit('8')}><Text>8</Text></TouchableOpacity>
// //         <TouchableOpacity onPress={() => handlePressDigit('9')}><Text>9</Text></TouchableOpacity>
// //         <TouchableOpacity onPress={() => handlePressDigit('*')}><Text>x</Text></TouchableOpacity>
// //         </View>

// //         <View>
// //         <TouchableOpacity onPress={() => handlePressDigit('4')}><Text>4</Text></TouchableOpacity>
// //         <TouchableOpacity onPress={() => handlePressDigit('5')}><Text>5</Text></TouchableOpacity>
// //         <TouchableOpacity onPress={() => handlePressDigit('6')}><Text>6</Text></TouchableOpacity>
// //         <TouchableOpacity onPress={() => handlePressDigit('+')}><Text>+</Text></TouchableOpacity>
// //         </View>

// //         <View>
// //         <TouchableOpacity onPress={() => handlePressDigit('1')}><Text>1</Text></TouchableOpacity>
// //         <TouchableOpacity onPress={() => handlePressDigit('2')}><Text>2</Text></TouchableOpacity>
// //         <TouchableOpacity onPress={() => handlePressDigit('3')}><Text>3</Text></TouchableOpacity>
// //         <TouchableOpacity onPress={() => handlePressDigit('-')}><Text>-</Text></TouchableOpacity>
// //         </View>

// //         <View>
// //         <TouchableOpacity onPress={() => handlePressDigit('0')}><Text>0</Text></TouchableOpacity>
// //         <TouchableOpacity onPress={() => handlePressDigit('.')}><Text>.</Text></TouchableOpacity>
// //         <TouchableOpacity onPress={() => handlePressEqual('=')}><Text>=</Text></TouchableOpacity>
// //         </View>

// //       </View>

// //     </View>





// //   )
// // }
// // const styles = StyleSheet.create({
// //   container:{
// //     flex :1,
// //     backgroundColor:myColors.gray,
// //     justifyContent:'center',
// //     alignItems:'center'
// //   }
// // })



// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'

// export default function Calc() {
//   const [darkMode, setDarkMoode] = useState(false);
//   const buttons = ['C', 'DEL', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '0', '.', '=']

//   const styles = StyleSheet.create({
//     results: {
//       backgroundColor: darkMode ? '#282f3b' : '#f5f5f5',
//       maxWidth: '100%',
//       maxHeight: '35%',
//       alignItems: 'flex-end',
//       justifyContent: 'flex-end',
//     },
//     resultText: {
//       maxHeight: 45,
//       color: '#FF6666',
//       margin: 15,
//       fontSize: 35,
//     },
//     historyText: {
//       color: darkMode ? '#7b8084' : '#eSeSeS',
//       alignItems: "center",
//       justifyContent: 'center',
//       width: 50,
//       height: 50,
//       borderRadius: 25,
//     },
//     buttons: {
//       height: "35%",
//       width: "35%",
//       flexDirection: 'row',
//       flexWrap: 'wrap',

//     },
//     button: {
//       backgroundColor: darkMode ? ' #3f465b' : "#eSeSeS",
//       alignItems: 'center',
//       justifyContent: 'center',
//       maxWidth: '24%',
//       maxHeight: '54%',
//       flex: 2,
//     },
//     textbutton: {
//       color: darkMode ? '#b5b7bb' : '#7c7c7c',
//       fontSize: 24,
//     }
//   })

//   const Handelinput = (btnpressed) => {

//   }

//   return (

//     <View>
//       <View style={styles.results}>
//         <TouchableOpacity
//           style = {styles.themebtn}>


//         </TouchableOpacity>
//         <Text></Text>
//         <Text></Text>
//         <Text></Text>
//       </View>
//       <View style={styles.buttons}>
//         {
//         buttons.map((btn, i) => {
//           return (
//             // <Text>{btn}</Text>
//             btn === '=' || btn === '/' || btn === '*' || btn === '-' || btn === btn === '+' ?
//               <TouchableOpacity key={i} style={[styles.button, { backgroundColor: '#FF6666' }]} onPress={() => Handelinput(btn)}>
//                 <Text style={[styles.textbutton, { color: 'white', fontSize: 28 }]}>{btn}</Text>
//               </TouchableOpacity>
//             : btn === '0' ?
//               <TouchableOpacity key={i} style={[styles.button, {
//                 backgroundColor: typeof (btn) === 'number' ?
//                   darkMode ? '303946' : '#fff' : darkMode === true ? '#414853' : '#ededed', minWidth: '36%'
//               }]} onPress={() => Handelinput(btn)}>
//                 <Text>style={styles.textbutton}{btn}</Text>
//               </TouchableOpacity>
//               : btn === '.' || btn === 'DEL' ?
//                 <TouchableOpacity key={i} style={[styles.button, { backgroundColor: btn === '.' ? darkMode ? '#303946' :'#fff': darkMode === true ? '#414853' : '#ededed' , minWidth: '36%' }]}
//                   onPress={() => Handelinput(btn)}>
//                   <Text style={styles.textbutton}>{btn}</Text>
//                 </TouchableOpacity>
//                 : btn === 'C' ?
//                   <TouchableOpacity key={i} style={[styles.button, { backgroundColor: typeof (btn) === 'number' ? darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed', minWidth: '36%' }]}
//                     onPress={() => Handelinput(btn)} >
//                     <Text style={styles.textbutton}>{btn}</Text>
//                   </TouchableOpacity>
//                   :
//                   <TouchableOpacity key={i} style={[styles.button, { backgroundColor: typeof (btn) === 'number' ? darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed', minWidth: '36%' }]}
//                     onPress={() => Handelinput(btn)}>
//                     <Text style={styles.textbutton}>{btn}</Text>
//                   </TouchableOpacity>


//           )
//         })
//       }



//       </View>
//     </View>
//   )
// }

//https://reactnativeexample.com/calculator-with-light-and-dark-theme-made-with-react-native/

// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { useState } from 'react';

// export default function Calc() {
//   const [equation, setEquation] = useState('');

//    const buttons = ['C', 'DEL', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '0', '.', '=']


//   const Equal = () => {
//     let result = eval(equation).toString();
//     setEquation(result)
//   }

//   const handledigit = (buttonPressed) => {
//     console.log(buttonPressed);
//     setEquation(equation + buttonPressed);
//   }

//   const restart = () => {
//     setEquation('')
//   }

//   const Delete = () => {
//     setEquation(equation.substring(0, (equation.length - 1)))
//   }

//   const styles = StyleSheet.create({
//     main: {
//       flex: 1,
//       fontSize:20,
//     },
//     results: {
//      flex: 1,
//       backgroundColor: 'black ',
//       justifyContent: 'flex-end',
//       alignItems: 'flex-end',


//     },
//     resultText: {
//       fontSize: 50,
//       color: 'white',
//       margin:20,
//     },
//     buttons: {
//       flex: 3,
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//     },
//     button: {
//       width: '25%',
//       height: '20.1%',
//       alignItems: 'center',
//       justifyContent: 'center',

//     },
//     color: {
//       backgroundColor:'gray '
//     },
//     Number:{
//       fontSize:25,
//       color:"white"
//     }

//   })



//   return (
//     <View style={styles.main}>
//       <View style={styles.results}>
//         <Text style={styles.resultText}>{equation}</Text>
//       </View>
//       <View style={styles.buttons}>
//         {
//           buttons.map((button, i) => {
//             return (
//               button === '/' || button === '*' || button === '-' || button === '+' || button === '%' ?
//                 <TouchableOpacity key={i} style={[styles.button, styles.color]} onPress={() => handledigit(button)}><Text style = {styles.Number}>{button}</Text></TouchableOpacity>
//                 :
//                 button === 'C' ?
//                   <TouchableOpacity key={i} style={[styles.button, styles.color]} onPress={() => restart()}><Text style = {styles.Number}>{button}</Text></TouchableOpacity> 
//                 : 
//                 button === 'DEL' ?
//                   <TouchableOpacity key={i} style={[styles.button, styles.color]} onPress={() => Delete()}><Text style = {styles.Number}>{button}</Text></TouchableOpacity> 
//                 :
//                 button === '=' ?
//                   <TouchableOpacity key={i} style={[styles.button, styles.color]} onPress={() => Equal()}><Text style = {styles.Number}>{button}</Text></TouchableOpacity> 
//                 :
//                   <TouchableOpacity key={i} style={[styles.button, styles.green]} onPress={() => handledigit(button)}><Text style = {styles.Number}>{button}</Text></TouchableOpacity>
//             )
//           })
//         }
//       </View>
//     </View>

//   );
// }

import { View, Text,  TouchableOpacity ,StyleSheet} from 'react-native'
import React, { useState } from 'react'

export default function Calc() {
    
  const [equation, setEquation] = useState('');

  const data = ['C', 'back','/', '*','7', '8', '9',  '-', '4', '5', '6', '+','1', '2', '3',  '%','0', '.', '00', '=']

  const Digit = (value) => {
    setEquation(equation + value);
  }
  const Restart = () => {
    setEquation('');
  }

  const Equal = () => {
    setEquation(eval(equation).toString())
  }
  const backSpace = () => {
   setEquation(equation.substring(0, (equation.length - 1)))
  }
  const styles = StyleSheet.create({
    container: {
       flex:1,
       fontSize:20,
       backgroundColor:'black',
       marginBottom:50
    },
    result: {
      flex:1,
       backgroundColor:'black',
       justifyContent:'flex-end',
       alignItems:'flex-end'
    },
    resultTexr: {
      color:'white',
      fontSize:50,
      margin:20,
     
    },
    data:{
      flex: 3,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      width:85,
      height:110,  
      justifyContent:'center',
      alignItems:'center',
      margin:2,
     

    },
    
    Bcolor:{
    backgroundColor:'#AEB6BF',
    borderRadius:10,
   
    },
    color:{
      backgroundColor:'black'
    },
    TButton:{
      fontSize:20,
      color:"white",
      borderRadius:10,
   
   
     
    },
    TextColor:{
      color:'black'
    }
    
  })
  return (

    <View style={styles.container}>

      <View style={styles.result}>

        <Text style={styles.resultTexr}>{equation}</Text>

      </View>

      <View style={styles.data}>

        {
          data.map((button, i) => {

            return (
                   button === '/' || button === '*' || button === '-' || button === '+' || button === '%' ?
                  <TouchableOpacity key={i} style={[styles.button,styles.Bcolor]} onPress={() => Digit(button)}><Text style={[styles.TButton ,styles.TextColor]}>{button}</Text></TouchableOpacity>
                  
                 :

                   button === 'C' ?
                  <TouchableOpacity key={i} style={[styles.button,styles.Bcolor]} onPress={() => Restart(button)}><Text style={[styles.TButton ,styles.TextColor]}>{button}</Text></TouchableOpacity>
                    
                  :

                  button === 'back' ?
                  <TouchableOpacity key={i} style={[styles.button,styles.Bcolor]} onPress={() => backSpace(button)}><Text style={[styles.TButton ,styles.TextColor]}>{button}</Text></TouchableOpacity>
                    
                  :

                    button === '=' ?
                    <TouchableOpacity key={i}style={[styles.button,styles.Bcolor]} onPress={() => Equal(button)}><Text style={[styles.TButton ,styles.TextColor]}>{button}</Text></TouchableOpacity>
                   
                  :
                  <TouchableOpacity key={i} style={[styles.button,styles.color]}onPress={()=>Digit(button)}><Text style={styles.TButton} > {button}</Text></TouchableOpacity>

              )
          })

        }
      </View>

    </View>
  )
}