import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, placeholder,TextInput } from 'react-native'
import React from 'react'
import { iconss } from '../assets/icons';
import { colors } from '../assets/colors/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';





export default function SearchSreen() {

    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 42 }}>
                <TouchableOpacity style={styles.menuIcon}>
                    <Image source={iconss.menu} />
                </TouchableOpacity>
                <View style={styles.SearchBox}>
                        <AntDesign  name='search1' style={styles.searchIcon}/>
                        <TextInput
                           placeholder='Fine your prodect'
                         />
                    </View>
                <TouchableOpacity style={styles.notificationIconBox}>
                    <Image style={styles.notificationIcon} source={iconss.notification} />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.searchFor}>Search For ??</Text>
            </View>
            <View style={styles.list}>
                <TouchableOpacity style={{ height: 40, width: 144, backgroundColor: "#FF5035", borderRadius: 5, marginRight: 13, marginTop: 10, marginBottom: 30 }}><Text style={{ alignSelf: 'center', textAlignVertical: 'center', marginVertical: 10, fontFamily: 'Montserrat-Medium', color: 'balck' }}>Winter Collection</Text></TouchableOpacity>
                <TouchableOpacity style={{ width: 144, height: 40, backgroundColor: '#F3F3F3', borderRadius: 5, marginRight: 13, marginTop: 10, marginBottom: 30 }}><Text style={{ alignSelf: 'center', textAlignVertical: 'center', marginVertical: 10, fontFamily: 'Montserrat-Medium', color: 'balck' }}>Summer Collection</Text></TouchableOpacity>
            </View>
            <View>
                <Text style={styles.searchFor}>Search History </Text>
            </View>
            <View style={styles.list}>
                <TouchableOpacity style={styles.listBox}><Text style={styles.listBoxText}>jacket</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.listBox, { width: 100, }]}><Text style={styles.listBoxText}>heels</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.listBox, { width: 82 }]}><Text style={styles.listBoxText}>cap</Text></TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    menuIcon: {
        color: colors.primary,
        marginRight: 14,
        marginLeft: 15,
        marginBottom: 12,
        marginVertical: 5,
        height: 20,
        width: 20
    },
    SearchBox: {
        flexDirection:'row',
        backgroundColor: colors.secondary,
        height: 40,
        width: 200,
        marginLeft: 15,
        marginRight: 14,
        borderRadius: 5,
    },

    searchIcon: {
        height: 18,
        width: 18,
        marginRight: 9,
        marginLeft: 20,
        marginTop: 11,
        marginBottom: 11,
        fontSize:14
    },
    notificationIconBox: {
        height: 40,
        width: 40,
        marginLeft: 15,
        marginLeft: 16,
        borderRadius: 5,
        backgroundColor: '#F3F3F3'
    },
    notificationIcon: {
        height: 18,
        width: 18,
        marginBottom: 11,
        marginLeft: 11,
        marginRight: 11,
        marginTop: 11,
    },

    list: {
        width: 335,
        height: 40,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    searchFor: {
        marginBottom: 10,
        marginTop: 22,
        marginLeft: 35,
        fontSize: 16,
        color: 'black',
        fontFamily: 'Montserrat-SemiBold',
    },
    listBox: {
        height: 40,
        width: 114,
        backgroundColor: '#F3F3F3',
        borderRadius: 5,

    },
    listBoxText: {
        alignSelf: 'center',
        textAlignVertical: 'center',
        marginVertical: 10,
        fontFamily: 'Montserrat-Regular',
        color: 'black',
    }
})