import { Text,View,TextInput,Dimensions,ScrollView,Image,TouchableHighlight,TouchableOpacity } from "react-native"
import styles from "./tabstyle"
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useState } from "react";


const Tab4 = () => {
    const windowWidth = Dimensions.get('window').width
    const [inputText,setInputText] = useState('')
    const clearText = () => setInputText('')

    return(
    <ScrollView style={[styles.container,{paddingTop:windowWidth*0.02}]}>
         <View style={[styles.header,{paddingHorizontal:windowWidth*0.03,height:windowWidth*0.17,marginBottom:windowWidth*0.03}]}>
            <View style={[styles.headerInputContainer,{height:windowWidth*0.10,padding:windowWidth*0.02,borderRadius:windowWidth*0.007}]}>
            <Ionicons name="search" size={windowWidth*0.05} color="gray" />
            <TextInput style={{fontSize:windowWidth*0.04,marginLeft:windowWidth*0.02,width:'80%',color:'white'}}
             value={inputText} onChangeText={text => setInputText(text)} placeholder="search playlist..." placeholderTextColor={'gray'}/>
            <AntDesign name="closecircleo" size={windowWidth*0.05} color="gray" onPress={clearText}/>
            </View> 
            <TouchableHighlight
            onPressIn={()=>{}}
            underlayColor={'#A5A5B6'}
            activeOpacity={0.7}
            style={[styles.iconWrapper,{width:windowWidth*0.1,height:windowWidth*0.1,borderRadius:windowWidth*0.5}]}
            >
            <MaterialCommunityIcons name="shuffle-variant" size={windowWidth*0.06} color="white"  />
            </TouchableHighlight>
         </View>
         <TouchableOpacity
            style={[{alignSelf:'center',width:'80%',height:windowWidth*0.15,borderRadius:windowWidth*0.007,borderWidth:2,borderColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'center'}]}
            >
            <AntDesign name="plus" size={windowWidth*0.06} color="white" style={{marginRight:windowWidth*0.02}} />
            <Text style={{fontSize:windowWidth*0.035, fontWeight:'bold',color:'white'}}>Create New Playlists</Text>
        </TouchableOpacity>
        </ScrollView>)
}


export default Tab4;