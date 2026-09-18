import { View, TouchableOpacity, useWindowDimensions } from 'react-native';
import Feather from "@react-native-vector-icons/feather";
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

export default function App() {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Feather
                name="cloud"
                size={45}
                color="#B7d5e5"
            />

            <FontAwesome6
             iconStyle='solid'
             name="droplet"
             size={45}
             color= "#f3f3f3e0"
            />

            <TouchableOpacity
            style={{
                backgroundColor: "#5c3604ff", width: 100, borderRadius: 5, alignItems: 'center'
            }}>
            <Feather 
           name="feather"
           size={60}
           color="#30580eff"
            />
            </TouchableOpacity>
        </View>
    )
}