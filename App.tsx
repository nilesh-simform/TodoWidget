import React, {useState} from 'react';
import {
  StyleSheet,
  NativeModules,
  SafeAreaView,
} from 'react-native';
import SharedGroupPreferences from 'react-native-shared-group-preferences';
import HomeScreen from './app/modules/home/HomeScreen';

const group = 'group.usertodos';

const SharedStorage = NativeModules.SharedStorage;

const App = () => {
  const [text, setText] = useState('');

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
