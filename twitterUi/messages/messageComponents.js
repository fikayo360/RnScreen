import {View,Text,Image,StyleSheet,SafeAreaView} from 'react-native'

const MessageBody = ({messages}) => {
    
    return (
        <>
        {messages.length > 0 && messages.map(message => (
             <View style={styles.message}>
             <View style={{width:60,height:60}}>
                 <Image  source={{uri:message.img}} style={styles.messageImg} borderRadius={70}/>
             </View>
             <View style={{marginBottom:20,width:'60%',marginLeft:20}}>
                 <Text style={{fontSize:13}}>{`${message.name}`} <Text style={{fontSize:13,color:'grey'}}>{`@${message.username}`}</Text></Text>
                 <Text style={{fontSize:13,color:'grey'}}>{`You: ${message.messageBody}`}</Text>
             </View>
             <View style={{width:'20%',marginBottom:40}}>
                 <Text style={{fontSize:12,color:'grey'}}>{message.createdAt}</Text>
             </View>
         </View>
        ) )}
    </>
    )
}

const styles = StyleSheet.create({
    message:{
        width:'100%',
        height:80,
        flexDirection:'row',
        borderWidth:0.3,
        borderBottomColor:'white',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15
    },
    messageImg:{
        width:'100%',
        height:'100%',
    }
    })

export default MessageBody