import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native'

export default function App(){
    const larguraAnimada = useRef(new Animated.Value(150)).current;
    const alturaAnimada = useRef(new Animated.Value(150)).current;
    
    useEffect(() => {
   //Largura animada vai de 150 ate 300

    /*Animated.timing(larguraAnimada, {
        toValue: 300,
        duration: 2000,
        useNativeDriver: false
    }).start();
    */

    //Altura animada vai de 50 até 300
    Animated.timing(alturaAnimada, {
     toValue: 300,
     duration: 2000,
     useNativeDriver: false
    }).start();

}, [])


    return(
        <View style = {styles.container}>
         <Animated.View
         style={{
          width: larguraAnimada,
          height: alturaAnimada,
          backgroundColor: '#948ccc',
          justifyContent: 'center'
         }}
         >
            <Text style={{textAlign: 'center', fontSize: 20, color: '#ffffff'}}>
               OLIVIA RODRIGO
            </Text>
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