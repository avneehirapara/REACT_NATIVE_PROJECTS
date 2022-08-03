import { View, Text, FileList, ScrollView } from 'react-native'
import React from 'react'

export default function Meesho() {

    const DATA = [
        {
            id: 1,
            product: 'new Winter jacket for Women',
            price: '$ 100'
        },
        {
            id: 2,
            product: 'new Winter jacket for Women',
            price: '$ 100'
        },
        {
            id: 3,
            product: 'new Winter jacket for Women',
            price: '$ 100'
        },
        {
            id: 4,
            product: 'new Winter jacket for Women',
            price: '$ 100'
        }
    ]
    const ClothDAta = ({ item }) => {
        console.log(item);
        return (
            <View>
                <Text>{item.product}</Text>
                <Text>{item.price}</Text>
            </View>
        )
    }
    return (
        <ScrollView>
            <View>
                <FileList
                    data={DATA}
                    renderItem={ClothDAta}
                    keyEtractor={item => (item.id)} />
            </View>
        </ScrollView>
    )
}