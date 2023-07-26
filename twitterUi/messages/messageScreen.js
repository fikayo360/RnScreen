import {View,Text,TouchableOpacity,Image,StyleSheet,SafeAreaView,TextInput, ScrollView} from 'react-native'
import messages from '../mockData/messages'
import MessageBody from './messageComponents'
const MessageScreen = () => {
    return (
    <SafeAreaView style={styles.container}>
    <View style={{position:'absolute',bottom:30,right:12,width:75,height:73,borderRadius:50,backgroundColor:'#00A7E1',justifyContent:'center',zIndex:1}}>
        <Image style={{ width:30, height:30,alignSelf:'center'}} source={require('../assets/email.png')} />
    </View>
    <View style={styles.header}>
        <View style={styles.headerFirstRow}>
             <Image style={{ width:23, height:23}} source={require('../assets/ballhub.png')} />
            <Text style={styles.headerTxt}>Messages</Text>
            <Image style={{ width:23, height:23}} source={require('../assets/settings.png')} />
        </View>
        <View style={styles.inputContainer}>
        <Image style={{ width:20, height:20,marginRight:5}} source={require('../assets/search.png')} />
        <TextInput placeholder='Search for extra-terrestial life' />
        </View>
    </View>
    <ScrollView style={styles.body}>
       <MessageBody messages={messages}/>
    </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    position: 'relative',
    backgroundColor:'#FFFFFF',
},
header:{
    width:'100%',
    height:'17%',
    borderWidth:0.3,
    borderColor:'grey',
    paddingTop:35
},
headerFirstRow:{
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:17,
    flexDirection:'row',
    marginBottom:20
},
headerTxt:{
    fontSize:18,
    fontWeight:'bold'
},
inputContainer:{
    fontSize:20,
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    height:39,
    paddingHorizontal:7,
    width:'95%',
    borderWidth:0.4,
    borderColor:'grey',
    borderRadius:30,
    backgroundColor:'#E8E9F3'
},

body:{
    height:'83%',
    position:'relative'
}
})
export default MessageScreen