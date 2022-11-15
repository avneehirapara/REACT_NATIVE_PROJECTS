import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductStack, SearchSreenStack } from './StackNavigation';


const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen name="meeshoTab" component={ProductStack} />
            <Tab.Screen name="meeshoTab" component={SearchSreenStack} />
        </Tab.Navigator>  

         
    )
}             