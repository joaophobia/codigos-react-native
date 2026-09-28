import React0 from "react";

import { Image, Text, View } from "react-native"; 

import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

export default function customDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View
            style={{
                width: '100%',
                height: 85,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30
            }}
            >

          <Image 
          source={require('../assets/profile.png')}
          style={{width: 65, height: 65}}
         
           />

           <Text style={{color: '#FFF', fontSize: 17, marginTop: 17, marginBottom: 35}}>
           Boas vindas ao nosso App!
           </Text>

            </View>

            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}