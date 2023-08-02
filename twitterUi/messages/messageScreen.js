import {View,Text,TouchableOpacity,Image,StyleSheet,SafeAreaView,TextInput, ScrollView} from 'react-native'
import messages from '../mockData/messages'
import MessageBody from './messageComponents'
import styles from './styles'

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

export default MessageScreen