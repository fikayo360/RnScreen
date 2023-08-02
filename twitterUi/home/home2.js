import { Text,Image,View,SafeAreaView } from "react-native"
import styles from "./styles"

const Home2 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header2}>
           <Image style={{ width:18, height:18}} source={require('../assets/back.png')} />
           <Text style={{fontWeight:'bold',fontSize:18,marginRight:'40%'}}>Tweet</Text>
            </View>
            <View style={{width:'100%',height:'90%'}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:10,marginLeft:20}}>
                <Image style={{ width:15, height:15,marginRight:5}} source={require('../assets/heart.png')} />
                <Text style={[styles.tweetNotification]}> kirra liked your post </Text>
                </View>

                <View style={{width:'95%',height:'13%',flexDirection:'row',justifyContent:'center',paddingLeft:10,alignItems:'center',alignSelf:'center'}}>
                <Image style={{ width:60, height:60,marginRight:10,borderRadius:50}} source={require('../assets/p5.jpg')} />
                <View style={{width:'80%'}}>
                    <Text style={{fontSize:15,fontWeight:'bold',marginBottom:5}}>KomolKucharovv</Text>
                    <Text style={{fontSize:13,color:'grey'}}>KomolKucharovv</Text>
                </View>
                </View>

                <View style={{width:'95%',alignSelf:"center",height:'30%'}}>
                    <Text style={{fontSize:20,lineHeight:30}}>quickly create a low-fi wireframe version of your projects with 
                    our ready to use layoutsschemes constructors.</Text>
                    <Text style={{fontSize:20}}>get it now.</Text>
                </View>
                <Image style={{ width:'95%', height:'53%',borderRadius:5,alignSelf:'center',marginBottom:10}} source={require('../assets/comp.jpg')} />

            </View>
        </SafeAreaView>
    )
}

export default Home2