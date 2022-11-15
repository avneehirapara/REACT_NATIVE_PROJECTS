import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Meesho from '../app/Meesho'
import ProdectView from '../app/ProdectView'
import SearchSreen from '../app/SearchSreen';

const Stack = createNativeStackNavigator();


    const ProductStack = () => {
        return (
            <Stack.Navigator>
            <Stack.Screen name="meesho" component={Meesho} />
            <Stack.Screen name="productView" component={ProdectView} />
        </Stack.Navigator>
        )

    }

const SearchSreenStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='SearchSreen' component={SearchSreen} />
        </Stack.Navigator>
    )
}
export {ProductStack, SearchSreenStack}