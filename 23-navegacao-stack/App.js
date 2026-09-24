import React from "react";
 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import Home from './src/pages/home';
import Sobre from './src/pages/sobre'
import Contato from './src/pages/contato';
 
const Stack = createNativeStackNavigator();
 
 
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} 
        options={{
            title: 'Tela inicial do App',
            headerStyle:{
                backgroundColor: '#121212'
            },
            headerTintColor: '#a7e121'
        }}
        
        />
        <Stack.Screen name="sobre" component={Sobre} 
        options={{
            title: 'Sobre a empresa'
        }}
        />
 
        <Stack.Screen name="contato" component={Contato} />
       </Stack.Navigator>
    </NavigationContainer>
  )
}
 