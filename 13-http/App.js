import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import api from './src/services/api';

export default function App() {

  const [cep, setCep] = useState('');
  const [cepUser, setCepUser] = useState({});

  async function buscar() {
    if(cep == ''){
      alert('Digite um cep válido');
      return;
    }

    try {
       const response = await api.get(`/${cep}/json`)
       setCepUser(response.data);
       Keyboard.dismiss();
    } catch(error){
      console.log('ERROR: ' + error)
    }
  }

  function limpar(){
    setCep('');
    setCepUser({});
  }
  
   return(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Digite o CEP desejado:</Text>
        <TextInput style={styles.input}
        placeholder='Exemplo 04700000'
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        keyboardType='numeric'
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, {backgroundColor: '#123967'}]} onPress={buscar}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, {backgroundColor: '#bf9903'}]} onPress={limpar}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
        <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
        <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
        <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
        <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
      </View>

    </SafeAreaView>
    </TouchableWithoutFeedback>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18
  },
  areaBtn:{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  botao: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5
  },
  botaoText: {
    fontSize: 22,
    color: '#fff'
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 20
  }
});