import {View,Text,Image} from 'react-native'
import styles from './styles'
const Threads = ({data}) => {
    
    return (
        <View style={styles.thread}>
        <View style={{alignSelf:'center',width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',marginLeft:60}}>
        <Image style={{ width:15, height:15,marginRight:5}} source={require('../assets/heart.png')} />
        <Text style={styles.tweetNotification}> {data.tweetNotification} </Text>
        </View>

        <View style={styles.lowerContainer}>
        <View style={styles.threadColumn}>
        <Image style={{ width:40, height:40,borderRadius:50}} source={{uri:data.img}} />
        <View style={{borderWidth:0.3,borderColor:'grey',height:'50%'}}></View>
        <Image style={{ width:30, height:30,borderRadius:50}} source={{uri:data.img}} />
        </View>
        <View style={styles.rightColumn}>
        <Text style={{fontSize:13,fontWeight:'bold'}}>{data.name} <Text style={{fontSize:13,color:'grey',fontWeight:'normal'}}>{`@${data.username}. ${data.hoursAgo}H`}</Text></Text>
        <Text style={{fontSize:13,width:'90%',lineHeight: 20}}>{data.tweetContent}</Text>
        <View style={styles.icons}>
            <View style={styles.iconContainer}><Image style={{ width:13, height:13,marginRight:10}} source={require('../assets/comment.png')} /><Text>{data.comments}</Text></View>
            <View style={styles.iconContainer}><Image style={{ width:13, height:13,marginRight:10}} source={require('../assets/retweet.png')} /><Text>{data.retweets}</Text></View>
            <View style={styles.iconContainer}><Image style={{ width:13, height:13,marginRight:10}} source={require('../assets/love.png')} /><Text>{data.likes}</Text></View>
            <View style={styles.iconContainer}><Image style={{ width:13, height:13,marginRight:10}} source={require('../assets/upload.png')} /></View>
        </View>
        <Text style={{fontSize:13,color:'#1C7293',marginTop:16}}>Show this thread</Text>
        </View>                   
        </View>
        </View>
    )
}

export default Threads