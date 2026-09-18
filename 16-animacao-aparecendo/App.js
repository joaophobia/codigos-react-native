import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native'

export default function App(){
    const larguraAnimada = useRef(new Animated.Value(150)).current;
    const alturaAnimada = useRef(new Animated.Value(150)).current;
    const opacidadeAnimada = useRef(new Animated.Value(150)).current;
    
    useEffect(() => {
        Animated.sequence([
            Animated.timing(opacidadeAnimada, {
            toValue: 1,
            duration: 1000
            }),
            Animated.parallel([
            Animated.timing(larguraAnimada, {
            toValue: 300,
            duration: 2000,
            useNativeDriver: false
             }),
            Animated.timing(alturaAnimada, {
            toValue: 300,
            duration: 2000,
            useNativeDriver: false
            })
            ])
        ]).start()
}, [])


    return(
        <View style = {styles.container}>
         <Animated.View
         style={{
          width: larguraAnimada,
          height: alturaAnimada,
          backgroundColor: '#948ccc',
          justifyContent: 'center',
          opacity: opacidadeAnimada
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