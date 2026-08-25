import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
      <View style={styles.box5}></View>
      </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1: {
  backgroundColor: 'aqua',
  height: 250,
  width: 250
  },
  box2: {
  backgroundColor: 'darkmagenta',
  height: 250,
  width: 250
  },
  box3: {
  backgroundColor: 'yellowgreen',
  height: 250,
  width: 250
  },
  box4: {
  backgroundColor: 'mediumvioletred',
  height: 250,
  width: 250
  },
  box5: {
  backgroundColor: 'indigo',
  height: 250,
  width: 250
  },
})
export default App;