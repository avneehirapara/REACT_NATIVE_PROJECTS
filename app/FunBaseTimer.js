import { View, Text, StyleSheet, } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function FunBaseTimer() {
    const [time, setTime] = useState(new Date()); //1

    const tick = () => {
        setTime(new Date());
    }

    // Componenet lifecycle method implement in function based component
    useEffect(() => {
        //3, 4
        const t = setInterval(() => {
            tick();
        }, 1000);

        //5
        return () => {
            clearInterval(t)
        }
    }, []);

    //2
    return (
        <View style={styles.body}>
            <Text style={styles.Text}>= function base Timer</Text>
            <View style={styles.main}>
                <Text style={styles.time}>{time.toLocaleTimeString()}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    time: {
        fontSize: 50,
        alignSelf: 'center',
        marginBottom: 40,
        marginTop: 40,
        backgroundColor: '#fff',
        padding:40,
        borderRadius: 10,
        color:'black'
    },
    main: {
        backgroundColor: 'gray',
        borderRadius: 20,
        alignItems:'center',
    
        

    },
    body:{
        backgroundColor:'black',
        height:450
    },
    Text:{
        fontSize:35,
       marginTop:20,
       color:'white',
       marginBottom:30

    }
})