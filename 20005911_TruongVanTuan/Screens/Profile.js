import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@rneui/themed';


export default function Profile({ navigation, route }) {
    // console.log(route.params.data);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    useEffect(() => {
        axios.get('https://662846af54afcabd07354a2e.mockapi.io/A1', {
        }).then((response) => {
            let data = response.data;
            setData1(data);
        });
        axios.get('https://662846af54afcabd07354a2e.mockapi.io/A2', {
        }).then((response) => {
            let data = response.data;
            setData2(data);
        });
    }, []);
    return (
        <ScrollView style={styles.container}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: 'white', borderBottomColor: 'gray', width: '100%', borderRadius: 10, alignItems: 'center', paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ width: 50, height: 50, borderRadius: 50, marginHorizontal: 15 }}
                        source={require('../assets/Avatar 23.jpg')}
                    />
                    <Text style={{ fontSize: 20, color: 'black' }} >Trương Văn Tuấn</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 50, marginRight: 10 }}>
                    <Ionicons name="search" size={24} color="gray" />
                    <Entypo style={{ marginHorizontal: 10 }} name="chat" size={24} color="gray" />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, backgroundColor: 'white', borderBottomColor: 'gray', width: '100%', borderRadius: 10, alignItems: 'center', paddingHorizontal: 10, paddingVertical: 20 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black', marginLeft: 10 }} >Today's event highlights </Text>
                    <Text style={{ fontSize: 17, color: 'black', marginLeft: 10 }} >Birthdays, Word Anniversaries</Text>
                </View>
                <Text style={{ fontSize: 15, color: 'blue', marginLeft: 10 }} >See detail</Text>
            </View>

            <View style={{ marginTop: 20, backgroundColor: 'white', borderBottomColor: 'gray', width: '100%', borderRadius: 10, alignItems: 'center', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black', marginLeft: 10 }} >Popular profile</Text>
                    <Text style={{ fontSize: 17, color: 'black', marginLeft: 10 }} >See more</Text>
                </View>
                <View style={{ width: '100%', paddingHorizontal: 20 }}>
                    <Image style={{ width: '100%', height: 50, marginTop: 10 }} source={require('../assets/Image 141.jpg')} />
                </View>
            </View>
            <View style={{ width: '100%', backgroundColor: 'white', marginTop: 10 }} >
                <View style={{ marginTop: 20, backgroundColor: 'white', borderBottomColor: 'gray', width: '100%', borderRadius: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black', marginLeft: 10 }} >People you may know</Text>
                        <Text style={{ fontSize: 17, color: 'black', marginLeft: 10 }} >See more</Text>
                    </View>
                    <Text style={{ marginLeft: 40 }} >From your university</Text>
                </View>
                <FlatList
                    style={{ width: '100%' }}
                    data={data1}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={{ justifyContent: 'center', backgroundColor: 'white', borderBottomColor: 'gray', width: '45%', borderRadius: 10, alignItems: 'center', margin: 10, paddingVertical: 10 }}>
                            <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                                <Image style={{ width: '100%', height: 50, marginTop: 10, resizeMode: 'cover', position: 'absolute' }} source={require('../assets/Image 141.jpg')} />
                                <Image
                                    style={{ width: 50, height: 50, borderRadius: 50, marginHorizontal: 15, marginTop: 30 }}
                                    source={{ uri: item.image }}
                                />
                                <Ionicons style={{ position: 'absolute', right: 0, marginTop: 10 }} name="close-circle" size={24} color="black" />
                            </View>
                            <Text style={{ fontSize: 17, color: 'black' }} >{item.name}</Text>
                            <Text style={{ fontSize: 17, color: 'black' }} >{item.job}</Text>
                            <Button style={{ width: 100 }} title="Connected" type="outline" />
                        </View>
                    )}
                />F
            </View>

            <View style={{ width: '100%', backgroundColor: 'white', marginTop: 10 }} >
                <View style={{ marginTop: 20, backgroundColor: 'white', borderBottomColor: 'gray', width: '100%', borderRadius: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black', marginLeft: 10 }} >Recommended groups for you</Text>
                        <Text style={{ fontSize: 17, color: 'black', marginLeft: 10 }} >See more</Text>
                    </View>
                    {/* <Text style={{ marginLeft: 40 }} >From your university</Text> */}
                </View>
                <FlatList
                    style={{ width: '100%' }}
                    data={data2}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={{ justifyContent: 'center', backgroundColor: 'white', borderBottomColor: 'gray', width: '45%', borderRadius: 10, alignItems: 'center', margin: 10, paddingVertical: 10 }}>
                            <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                                <Image style={{ width: '100%', height: 50, marginTop: 10, resizeMode: 'cover', position: 'absolute' }} source={require('../assets/Image 141.jpg')} />
                                <Image
                                    style={{ width: 50, height: 50, borderRadius: 50, marginHorizontal: 15, marginTop: 30 }}
                                    source={{ uri: item.image }}
                                />
                                <Ionicons style={{ position: 'absolute', right: 0, marginTop: 10 }} name="close-circle" size={24} color="black" />
                            </View>
                            <Text style={{ fontSize: 17, color: 'black' }} >{item.name}</Text>
                            <Text style={{ fontSize: 17, color: 'black' }} >{item.member}</Text>
                            <Button style={{ width: 100 }} title="Join" type="outline" />
                        </View>
                    )}
                />F
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#gray',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
