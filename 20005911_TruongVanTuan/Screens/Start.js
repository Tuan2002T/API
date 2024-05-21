import { Button } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function StartScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                style={{ width: 100, height: 100, marginTop: 300}}
                source={require('../assets/Image 130.jpg')}
            />
            <Text style={{ color: 'gray' }} >Find Your Dream job Today</Text>
            <View style={{ width: '100%', flexDirection: 'column', alignContent:'center' }}>
                <Button onPress={() => navigation.navigate('SignIn')} style={{ width: '80%', marginLeft:40, marginTop:100, marginBottom:20 }} size="md">Sign In</Button>
                <Button style={{ width: '80%', marginLeft:40 }} type="outline" size="md">Sign Up</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});
