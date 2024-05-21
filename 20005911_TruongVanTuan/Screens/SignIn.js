import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from '@rneui/themed';
import { useState } from 'react';
import axios from 'axios';

export default function SignIn({ navigation, route }) {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const Login = () => {
        axios.get('https://66271886b625bf088c0757c1.mockapi.io/account', {
        }).then((response) => {
            
            let data = response.data;
            for (let i = 0; i < data.length; i++) {
                if (data[i].username === Username && data[i].password === Password) {
                    navigation.navigate('MyTab');
                    break;
                }
            }

        });
    };
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, fontWeight: 'bold' }} >Hello.</Text>
            <Text style={{ fontSize: 20, color: 'gray' }} >Welcome</Text>
            <Text style={{ fontSize: 20, color: 'gray' }} >back</Text>
            <View style={{ flexDirection: 'row', marginTop: 50, backgroundColor: '#cfcfcfcf', borderBottomColor: 'gray', width: '80%', borderRadius: 10, alignItems: 'center', paddingHorizontal:10 }}>
                <Entypo name="mail" size={24} color="black" />
                <TextInput
                    mode="outlined"
                    placeholder="Username"
                    placeholderTextColor={'GRAY'}
                    onChangeText={text => setUsername(text)}
                    style={{ width: '100%', height: 40, borderRadius: 20 }}

                />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: '#cfcfcfcf', borderBottomColor: 'gray', width: '80%', borderRadius: 10, alignItems: 'center', paddingHorizontal:10 }}>

                <Entypo name="lock" size={24} color="black" />
                <TextInput
                    mode="outlined"
                    placeholder="Password"
                    placeholderTextColor={'GRAY'}
                    style={{width: '100%', height: 40, borderRadius: 10 }}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />
            </View>
            <Text style={{ color: 'blue', marginTop: 10, marginLeft:200 }}>Forgot Password?</Text>

            <Button 
                onPress ={() => Login()}
            style={{ width: 300, marginTop: 20, borderRadius: 30 }} size="md">Sign In</Button>


            <Text style={{ color: 'gray', marginTop: 20 }}>OR CONTINUE WITH</Text>
            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent:'space-around', width:'50%'   }}>                
                <FontAwesome5 name="google" size={24} color="red" />
                <FontAwesome5 name="facebook" size={24} color="blue" />
                <FontAwesome5 name="apple" size={24} color="black" />
            </View>

            <Text style={{ color: 'gray', marginTop: 20 }}>Don't have an account?</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
