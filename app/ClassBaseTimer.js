import { Text, View, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class ClassBaseTimer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount = () => {
        this.time = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.time !== this.state.time) {

        }
    }

    componentWillUnmount = () => {
        clearInterval(this.time)
    }

    render() {
        // console.log(this.state.time);
        return (
            <ScrollView>
            <View  style={StyleSheet.body}>
                
                <View>
                <Text style={styles.Text}>= Class Base Timer</Text>
                <Text style={styles.time}>{this.state.time.toLocaleTimeString()}</Text>
            </View>
            </View>
            </ScrollView>
        )
    }
}

let styles = StyleSheet.create({
    time: {
        fontSize: 50,
        alignSelf: 'center',
        marginBottom: 50,
        marginTop: 50,
        backgroundColor: 'black',
        padding: 30,
        borderRadius: 10,
        color:'white'
    },
    body:{
        // backgroundColor:'black',
        height:400,
       
    },
    Text:{
        fontSize:40,
       marginTop:20,
       color:'black'
    }

})







