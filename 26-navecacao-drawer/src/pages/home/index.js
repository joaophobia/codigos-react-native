import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";
 
export default function Home(){

       const navigation = useNavigation();

       function navegarSobre(){
        navigation.navigate('sobre', { nome: 'João', email: 'joao@gmail.com'})
       }

       function navegarDetalhes(){
        navigation.navigate('Detalhes')
       }

    return(
        <View style={styles.container}>
            <Text>Tela HOME</Text>
            <Button title="Vá para sobre" onPress={navegarSobre} />
            <Button title="Vá para page Detalhes" onPress={navegarDetalhes} />
            <Button 
            color='#202020'
            title="Botão abre Drawer"
            onPress={() => navigation.openDrawer()}
            />
        </View>
    )
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
 
})