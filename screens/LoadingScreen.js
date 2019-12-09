import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  AsyncStorage,
  StyleSheet
} from 'react-native';

const LoadingScreen = () => {
  const loadApp = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log(userToken);
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
