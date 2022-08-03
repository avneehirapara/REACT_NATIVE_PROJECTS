import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react'


export default function FlatList1() {

    const DATA = [
        {
            id: 101,
            name: 'Abacavir',
            quantity: 25,
            price: 150,
            expiry: 2022,
            status: true
        },
        {
            id: 102,
            name: 'Eltrombopag',
            quantity: 90,
            price: 550,
            expiry: 2021,
            status: true
        },
        {
            id: 103,
            name: 'Meloxicam',
            quantity: 85,
            price: 450,
            expiry: 2025,
            status: false
        },
        {
            id: 104,
            name: 'Allopurinol',
            quantity: 50,
            price: 600,
            expiry: 2023,
            status: true
        },
        {
            id: 105,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021,
            status: false
        }
    ];
    const madicalData = ({ item }) => {
        console.log(item);
        return (

            <View style={styles.card}>
                <Text style={styles.cardText}>  {item.id}       </Text>
                <Text style={styles.cardText}>  {item.name}     </Text>
                <Text style={styles.cardText}>  {item.quantity} </Text>
                <Text style={styles.cardText}>  {item.price}    </Text>
                <Text style={styles.cardText}>  {item.expiry}   </Text>
                <Text style={styles.cardText}>  {item.status}   </Text>
            </View>
        )

    }
    return (
        <ScrollView>
            <View style={styles.cards}>
            <Text style={styles.Text}>MADICAL DATAS</Text>
                <FlatList
                    numColumns={2}
                    // horizontal
                    data={DATA}
                    renderItem={madicalData}
                    keyEtractor={item => (item.id)} />
            </View>
                <LinearGradient colors={['#EB5757', '#000000']} style={styles.cards}>
                    {/* <Icon name='notes-medical' size={30} fontSize={30} /> */}
                    <Text style={styles.Text}>MADICAL DATAS</Text>
                    <FlatList
                        // numColumns={2}
                        horizontal
                        data={DATA}
                        renderItem={madicalData}
                        keyEtractor={item => (item.id)} />
                </LinearGradient>
          
        </ScrollView>
    )
}
const styles = StyleSheet.create({
 
    Text: {
        fontFamily: 'Roboto-Bold',
        fontSize: 30,
        color: 'white',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    cards: {
        backgroundColor: '#888',
        color: '#fff',
        padding: 10,
    },
    card: {
        marginVertical:15,
        width:150,
        borderRadius:15,
        backgroundColor:'black',
        color: 'white',
        marginHorizontal: 20,
        padding: 8
    },
    cardText: {
        color: 'white',
        fontSize:20
    }

})