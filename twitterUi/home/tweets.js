import { View,Text,Image } from "react-native"
import styles from "./styles"
const Tweets = ({data}) => {
  
    return (
        <View style={styles.tweet}>
                    <View style={{alignSelf:'center',width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',marginLeft:60}}>
                    <Image style={{ width:15, height:15,marginRight:5}} source={require('../assets/heart.png')} />
                    <Text style={styles.tweetNotification}> {data.tweetNotification} </Text>
                    </View>

                    <View style={styles.tweetlowerContainer}>
                    <Image style={{ width:50, height:50,borderRadius:50}} source={{uri:data.img}} />
                    <View style={styles.rightColumn}>
                    <Text style={{fontSize:13,fontWeight:'bold'}}>{data.name} <Text style={{fontSize:13,color:'grey',fontWeight:'normal'}}>{`@${data.username}. ${data.hoursAgo}H`}</Text></Text>
                     <Text style={{fontSize:13,width:'90%',lineHeight: 20}}>{data.tweetContent}</Text>
                    <View style={styles.icons}>
                    <View style={styles.iconContainer}><Image style={{ width:13, height:13,marginRight:10}} source={require('../assets/comment.png')} /><Text>{data.comments}</Text></View>
                    <View style={styles.iconContainer}><Image style={{ width:13, height:13,marginRight:10}} source={require('../assets/retweet.png')} /><Text>{data.retweets}</Text></View>
                    <View style={styles.iconContainer}><Image style={{ width:13, height:13,marginRight:10}} source={require('../assets/love.png')} /><Text>{data.likes}</Text></View>
                    <View style={styles.iconContainer}><Image style={{ width:13, height:13,marginRight:10}} source={require('../assets/upload.png')} /></View>
                    </View>
                    </View>                   
                    </View>
                    
                </View>
    )
}

export default Tweets