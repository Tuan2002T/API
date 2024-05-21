import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, ImageBackground } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const simulateAsyncTask = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigation.replace('Home');
    };

    simulateAsyncTask();
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assets/1.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Đang tải...</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Độ trong suốt của background
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
});

export default SplashScreen;
