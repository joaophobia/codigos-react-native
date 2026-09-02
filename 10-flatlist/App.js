import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Pessoa from'./src/Pessoas/index';
 
class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
    feed: [
      {id: "1", nome: "Charli xcx", idade: 34, email: 'brat@senac.com'},
      {id: "2", nome: "Audrey Hobert", idade: 27, email: 'sueme@gmail.com'},
      {id: "3", nome: "Addison Rae", idade: 25, email: 'addison@senac.com'},
      {id: "4", nome: "Lorde", idade: 29, email: 'pureheroine@senac.com'},
      {id: "5", nome: "Lana Del Rey", idade: 41, email: 'borntodie@senac.com'},
      {id: "6", nome: "Olivia Rodrigo", idade: 23, email: 'sour@senac.com'},
    ]
  }
  }
 
  render(){
    return(
      <View style={styles.container}>
        <FlatList
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Pessoa data={item} />}
        />
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  areaPessoa: {
    backgroundColor: "lightcyan",
    height: 250,
    marginBottom: 20
  },
  textoPessoa: {
    color: "black",
    fontSize: 25
  }
})

 
export default App;