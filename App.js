import React from 'react';
import { StyleSheet, View } from 'react-native';
import TopSection from './src/components/TopSection/index'
import Gameboard from './src/components/Gameboard/index'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopSection />
        <View style={{ flex: 3 }}>
          <Gameboard />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
