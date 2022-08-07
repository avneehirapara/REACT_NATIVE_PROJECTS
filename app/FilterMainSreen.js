import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image, Span, Placeholder } from 'react-native'
import { iconss } from '../assets/icons';
import { colors } from '../assets/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react'

export default function FilterMainSreen() {
    const DATA = [
        {
            id: 1,
            product: 'new Winter jacket for Women',
            price: '100',
            orgPrice: '200',
            image: require('../assets/images/koreangirl.png'),
        },
        {
            id: 2,
            product: 'Sumer Confert Shirt for  Women',
            price: '72',
            image: require('../assets/images/bluetshirt.png'),
        },
    ]

    const ClothDAta = ({item}) => {
        console.log("item");
        return (
            <View style={styles.card}>
                <View>
                    <Image style={[styles.images1, { height: item.id === 2 ? 220 : 190 }]} source={item.image} />
                </View>
                <View style={[styles.heartBox, { top: item.id === 2 ? 5 : 20 }]}>
                    <TouchableOpacity>
                        <MaterialIcons name="favorite-border" style={styles.imageIcon} color="#000" size={20} />
                    </TouchableOpacity>
                    <View style={styles.lessPrice}>
                        <Text lessPriceText>-20%</Text>
                    </View>
                </View>

                <Text style={styles.cardText1}>{item.product}</Text>
                <Text style={styles.cardText2}><Text style={styles.dolar}>$</Text>{item.price}</Text>
                <TouchableOpacity style={styles.pluseBox}>
                    <AntDesign name='plussquare' style={styles.plusIcon}></AntDesign>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <TouchableOpacity >
                    <AntDesign name='arrowleft' style={styles.earoIcon}>
                    </AntDesign>
                </TouchableOpacity>
                <View>
                    <Text style={styles.jacket}>jacket</Text>
                </View>
                <View>
                    {/* icon========================= */}
                </View>
            </View>
            <View style={styles.card}>
                <View>
                    <Image style={[styles.images1, { height: item.id === 2 ? 220 : 190 }]} source={item.image} />
                </View>
                <View style={[styles.heartBox, { top: item.id === 2 ? 5 : 20 }]}>
                    <TouchableOpacity>
                        <MaterialIcons name="favorite-border" style={styles.imageIcon} color="#000" size={20} />
                    </TouchableOpacity>
                    <View style={styles.lessPrice}>
                        <Text lessPriceText>-20%</Text>
                    </View>
                </View>

                <Text style={styles.cardText1}>{item.product}</Text>
                <Text style={styles.cardText2}><Text style={styles.dolar}>$</Text>{item.price}</Text>
                <TouchableOpacity style={styles.pluseBox}>
                    <AntDesign name='plussquare' style={styles.plusIcon}>

                    </AntDesign>

                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    numColumns={2}
                    data={DATA}
                    renderItem={ClothDAta}
                    keyExtractor={item => item.id}
                />
            </View>

        </View>
    )
} const styles = StyleSheet.create({

    main: {
        marginTop: 13,
        flexDirection: 'row'
    },
    earoIcon: {
        fontSize: 25,
        marginLeft: 15,
        marginTop: 11,
        marginBottom: 33,

    },
    jacket: {
        marginLeft: 17,
        marginTop: 11,
        marginBottom: 31,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        lineHeight: 18,
        marginRight: 220,

    },
    card: {
        height: 280,
        marginVertical: 10,
        width: 150,
        backgroundColor: '#F3F3F3',
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginTop: 20,
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
    },

    cardText1: {
        color: 'black',
        fontSize: 13,
        lineHeight: 22,
        fontFamily: 'Montserrat-Medium',
        marginHorizontal: 10,
    },
    cardText2: {
        color: 'black',
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'Montserrat-Bold',
        marginHorizontal: 10,
    },
    textBox: {
        backgroundColor: 'red'
    },
    heartBox: {
        height: 25,
        width: 25,
        backgroundColor: colors.white,
        borderRadius: 50,
        position: 'absolute',
        top: 20,
        left: 10
    },
  

    imageIcon: {
        color: colors.primary,
        alignSelf: 'center',
        padding: 2.5,
    },
    pluseBox:{
        position: 'absolute',
        height:24,
        width:24,
        left: 130,
        top:245,
    },
    plusIcon:{
        fontSize:25,
        color:colors.primary,
    },
     lessPrice:{
        height:24,
        width:50,
        backgroundColor:'black,'
    },
    lessPriceText:{
        fontSize:90,
        color:colors.white
    },

})