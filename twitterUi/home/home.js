import styles from "./styles"
import { View,Text,ScrollView,Image,SafeAreaView } from "react-native"

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.header}>
           <Image style={{ width:30, height:30}} source={require('../assets/ballhub.png')} />
           <Image style={{ width:30, height:30}} source={require('../assets/twitter.png')} />
            <Image style={{ width:30, height:30}} source={require('../assets/star.png')} />
            </View>
            <View style={styles.body}>
                <View style={styles.thread}>
                    <View style={{alignSelf:'center',width:'50%',flexDirection:'row',alignItems:'center'}}>
                    <Image style={{ width:15, height:15,marginRight:5}} source={require('../assets/heart.png')} />
                    <Text style={styles.tweetNotification}> matt----gerby stone liked </Text>
                    </View>

                    <View style={styles.lowerContainer}>

                    <View style={styles.threadColumn}>
                    <Image style={{ width:50, height:50,borderRadius:50}} source={require('../assets/p4.jpg')} />
                    <View style={{borderWidth:0.3,borderColor:'grey',height:'50%'}}></View>
                    <Image style={{ width:40, height:40,borderRadius:50}} source={require('../assets/p4.jpg')} />
                    </View>

                    <View style={styles.rightColumn}>
                    <Text style={{fontSize:13,fontWeight:'bold'}}>MARTHA CRAIG <Text style={{fontSize:13,color:'grey',fontWeight:'normal'}}>{`@craig_love. 12H`}</Text></Text>
                    <Text style={{fontSize:13,width:'90%',lineHeight: 20}}>UXR/UX: you can only bring one item a remote island to assit on your research on native 
                    use of tools and usability. what do you bring? </Text>
                    <View style={styles.icons}>
                        <View style={styles.iconContainer}><Image style={{ width:13, height:13,marginRight:10}} source={require('../assets/comment.png')} /><Text>28</Text></View>
                        <View style={styles.iconContainer}><Image style={{ width:13, height:13,marginRight:10}} source={require('../assets/retweet.png')} /><Text>5</Text></View>
                        <View style={styles.iconContainer}><Image style={{ width:13, height:13,marginRight:10}} source={require('../assets/love.png')} /><Text>21</Text></View>
                        <View style={styles.iconContainer}><Image style={{ width:13, height:13,marginRight:10}} source={require('../assets/upload.png')} /></View>
                    </View>
                    <Text style={{fontSize:15,color:'#1C7293'}}>Show this thread</Text>
                    </View>
                    
                    </View>

                    <View></View>
                    <View></View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home