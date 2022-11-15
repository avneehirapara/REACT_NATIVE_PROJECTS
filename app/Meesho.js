import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image, Span, Placeholder, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { iconss } from '../assets/icons';
import { colors } from '../assets/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';



export default function Meesho({ navigation }) {


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
        {
            id: 3,
            product: 'new Winter jacket for Women',
            price: '100',
            image: require('../assets/images/bluetshirt.png'),
        },
        {
            id: 4,
            product: 'Sumer Confert Shirt for  Women',
            price: '72',
            image: require('../assets/images/koreangirl.png'),
        }
    ]

    const ClothDAta = ({ item }) => {
        console.log("item");
        return (
            
            <TouchableOpacity
                onPress={() => navigation.navigate('productView')}
            >
                <View style={styles.card}>
                    <View>
                        <Image style={[styles.images1, { height: item.id === 2 ? 240 : 220 }]} source={item.image} />
                    </View>
                    <View style={styles.heartBox}>
                        <TouchableOpacity>
                            <MaterialIcons name="favorite-border" style={styles.imageIcon} color="#000" size={20} />
                        </TouchableOpacity>
                        <View style={styles.lessPrice}>
                            <Text lessPriceText >-20%</Text>
                        </View>
                    </View>

                    <Text style={styles.cardText1}>{item.product}</Text>
                    <Text style={styles.cardText2}><Text style={styles.dolar}>$</Text>{item.price}</Text>
                    <Text style={{ textDecorationLine: 'line-through' }}>$200</Text>
                    <TouchableOpacity style={styles.pluseBox}>
                        <AntDesign name='plussquare' style={styles.plusIcon}></AntDesign>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>


        )
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 42 }}>
                    <TouchableOpacity style={styles.menuIcon}>
                        <Image source={iconss.menu} />
                    </TouchableOpacity>

                    <View style={styles.SearchBox}>
                        <AntDesign name='search1' style={styles.searchIcon} />
                        <TextInput
                            placeholder='Find your produect'
                        />
                    </View>
                    <TouchableOpacity style={styles.notificationIconBox}>
                        <Image style={styles.notificationIcon} source={iconss.notification} />
                    </TouchableOpacity>
                </View>
                <View>



                    <TouchableOpacity style={styles.mainBox}>
                        <View style={styles.subBox}>
                            <Text style={styles.text1}>New Arrivals</Text>
                            <Text style={styles.text2}>SUMMER SALE</Text>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.button}>Shop Now</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Image source={require('../assets/images/slider.png')} />
                        </View>


                    </TouchableOpacity>



                    <View style={styles.list}>

                        <TouchableOpacity style={[styles.listing, styles.change]} ><Text style={[styles.listText, styles.changeText]}>ALL</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.listing, styles.change1]}><Text style={styles.listText}>Categoires</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.listing, styles.change2]} ><Text style={styles.listText}>New</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.listing, styles.change3]}><Text style={styles.listText}>Disount</Text></TouchableOpacity>
                    </View>
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    // Flex: {
    //     display: 'flex',
    // },
   
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
        flexDirection: 'row',
        backgroundColor:colors.secondary,
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
        fontSize: 14
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


    mainBox: {
        height: 134,
        width: 345,
        margin: 20,
        flexDirection: "row",
        alignSelf: 'center',
    },
    subBox: {
        height: 70,
        width: 140,
        marginLeft: 19,
        marginBottom: 30,
        marginTop: 34,
        padding: 5,
    },

    text1: {
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold',
        color: 'black'
    },
    text2: {
        fontSize: 16,
        color: "#FF5035",
        marginTop: 5
    },
    button: {
        height: 26,
        width: 90,
        backgroundColor: "#FF5035",
        marginTop: 5,
        borderRadius: 5,
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
    },
    images1: {
        borderRadius: 5,
        alignSelf:'center'
    },
    dolar: {
        fontSize: 9
    },
    list: {
        width: 335,
        height: 40,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 25,
    },
    listText: {
        alignSelf: 'center',
        textAlignVertical: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        fontFamily: 'Montserrat-Medium',
        color: 'black'
    },
    listing: {
        width: 102,
        height: 40,
        backgroundColor: '#F3F3F3',
        borderRadius: 5
    },
    change: {
        backgroundColor: "#FF5035",
        width: 48,
        height: 40,
    },
    changeText: {
        color: '#ffff'
    },
    change1: {
        width: 102,
        height: 40,
    },
    change2: {
        width: 59,
        height: 40,
    },
    change3: {
        width: 96,
        height: 40,
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
        // position: 'relative',
        // flex: 1,
        justifyContent: 'center',
        alignContent:'center'
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
    pluseBox: {
        position: 'absolute',
        height: 24,
        width: 24,
        left: 130,
        top: 245,
    },
    plusIcon: {
        fontSize: 25,
        color: colors.primary,
    },
    lessPrice: {
        height: 24,
        width: 50,
        backgroundColor: 'black,'
    },
    lessPriceText: {
        fontSize: 90,
        color: colors.white
    },

})
