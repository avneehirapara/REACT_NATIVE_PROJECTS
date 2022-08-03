import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function FlatListDemo() {
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

    const renderMedicinesData = ({ item }) => {  
            return(
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                </View>
            )
        
    }
    return (
        <View>
            <Text>FlatListDemo</Text>

            <FlatList
                data={DATA}
                renderItem={renderMedicinesData}
                keyExtractor={item => item.id}
            />
        </View>
    )
}