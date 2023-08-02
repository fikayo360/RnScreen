import styles from "./styles"
import { View,Text,ScrollView,Image,SafeAreaView,TouchableOpacity } from "react-native"
import Threads from "./threads"
import Tweets from "./tweets"
import tweets from "../mockData/tweets"

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
             <TouchableOpacity style={{position:'absolute',bottom:30,right:12,width:75,height:73,borderRadius:50,backgroundColor:'#004E98',justifyContent:'center',zIndex:1}}>
                <Image style={{ width:30, height:30,alignSelf:'center'}} source={require('../assets/add.png')} />
            </TouchableOpacity>
           <View style={styles.header}>
           <Image style={{ width:30, height:30}} source={require('../assets/ballhub.png')} />
           <Image style={{ width:30, height:30}} source={require('../assets/twitter.png')} />
            <Image style={{ width:30, height:30}} source={require('../assets/star.png')} />
            </View>
            <ScrollView style={styles.body}>
            {tweets.length > 0 && tweets.map((item,index) => (
              item.type === 'normal'?(<Tweets data={item} key={index.toString()}/>):(<Threads data={item} key={index.toString()} />)
             ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home