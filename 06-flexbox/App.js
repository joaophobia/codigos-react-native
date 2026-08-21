import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  render(){
    return(
      // JustifyContent aceita por exemplo: center, flex-end, space-between, space-around...
      //FlexDirection aceita por exemplo: row, column....
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ width: 100, height: 100, backgroundColor: '#ff8000'}}></View>
      <View style={{ width: 100, height: 100, backgroundColor: '#00e054'}}></View>
      <View style={{ width: 100, height: 100, backgroundColor: '#40bcf4'}}></View>
      </View>
    );
  }

}

export default App;