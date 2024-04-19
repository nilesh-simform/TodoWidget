import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import HomeScreen from './app/modules/home/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
