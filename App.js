import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import LatestNews from './components/LatestNews';


export default function App() {
  return (
    <View style={styles.container}>
      <LatestNews/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight
  },
});
