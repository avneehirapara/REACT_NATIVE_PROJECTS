import { View, Text, SafeAreaView, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-vector-icons/icon';


export default function GstClaculator() {


    const [getresult, setresult] = useState(0);
    const [getdata, setdata] = useState(0);

    const GstClaculator = () => {
        var result = parseInt(getdata) * 10/100;
        setresult(result)
    }  

    return (
        <View>                                                                                                              
            <SafeAreaView style={styles.SafeAreaView}>
                {/* <Icon name='verified-user' fontSize={30}/> */}
                <Text style={styles.Text}>{getresult}</Text>
                <TextInput style={styles.TextInput}
                    placeholder='Please Enter Your Amount'
                    keyboardType='decimal-pad'
                    onChange={data => setdata(data)} />
                <TouchableOpacity    handle={GstClaculator} >
                    <Text style={styles.TextButoon}>Calcutate </Text>
                </TouchableOpacity> 
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
     SafeAreaView:{
       backgroundColor:'#708090',
       marginBottom:50
    },
    Text:{
        color:'white',
        backgroundColor:'black',
        margin:20,
        fontSize:40,
        padding:60, 
        fontFamily:'Roboto-Bold.ttf',
        textAlign:'center',
        borderRadius:20
        
    },
    TextInput:{
       fontSize:24,
       margin:40 ,
       color:'black',
       textAlign:'center'
    },
    TextButoon:{
        fontSize:30,
        backgroundColor:'black',
        color:"white",
        width:210,
        padding:10,
        borderRadius:20,
        textAlign:'center',
        alignSelf:'center',
        marginBottom:350
    }

})