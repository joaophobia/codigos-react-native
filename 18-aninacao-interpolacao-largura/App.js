import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native'

export default function App(){
    const larguraAnimada = useRef(new Animated.Value(0)).current;
    const alturaAnimada = useRef(new Animated.Value(50)).current;
    //const opacidadeAnimada = useRef(new Animated.Value(1)).current;
    
    useEffect(() => {
   
        Animated.timing(larguraAnimada, {
            toValue: 100,
            duration: 4000,
            useNativeDriver: false

        }).start()

}, [])

let porcentagemLargura = larguraAnimada.interpolate({
  inputRange: [0, 100], //Entrada

  //Vai sair de 0% até 100%
  outputRange: ['0%', '100%']
})

    return(
        <View style = {styles.container}>
         <Animated.View
         style={{
          width: porcentagemLargura,
          height: alturaAnimada,
          backgroundColor: '#948ccc',
          justifyContent: 'center',
          //opacity: opacidadeAnimada,
          //borderRadius: 30
         }}
         >
            {/*
            </Text style={{textAlign: 'center', fontSize: 20, color: '#ffffff'}}>
               OLIVIA RODRIGO
            </Text>
            */}
       


</Animated.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}) 