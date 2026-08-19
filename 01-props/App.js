import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {

    let nome ='Snufkin'

    return (
      <View>
        <Text style={{color: '#0F4D0F',}}>Olá mundo!</Text>
        <Text style={{color: '#0F4D0F', fontSize: 25, margin: 15 }}>Olá Novamente</Text>


      <Text style={{ color: '#0F4D0F', fontSize: 40}}>{nome}</Text>

      <Nuuskamuikkunen largura={500} altura={200} nomeando="Nuuskamuikkunen"/>
      </View>
    );
  }
} 

class Nuuskamuikkunen extends Component{
  render(){
  let image = 'https://i.pinimg.com/1200x/f9/86/61/f9866168053c7170fefad97954f5bd1a.jpg'
  

return(
  <View>
          <Image 
        source={{ uri: image }}
        style={{ width: this.props.largura, height: this.props.altura }}
        />
        <Text>{this.props.nomeando}</Text>
        </View>
);
}
}
export default App;