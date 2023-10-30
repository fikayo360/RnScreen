import { SafeAreaView,View,Text,Dimensions } from "react-native"
import styles from "./mediaplayerStyles"
import { AntDesign } from '@expo/vector-icons'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Tab1 from "../components/mediaTab1";
import Tab2 from "../components/mediaTab2";
import Tab3 from "../components/mediaTab3";
import Tab4 from "../components/mediaTab4";

const MediaPlayer = () => {
    const windowWidth = Dimensions.get('window').width
    const Tab = createMaterialTopTabNavigator();

    return (
        <SafeAreaView style={[styles.container,{paddingTop:windowWidth*0.07}]}>
            <View style={[styles.header,{paddingHorizontal:windowWidth*0.05}]}>
            <AntDesign name="arrowleft" size={windowWidth * 0.052} color="white" style={{marginRight:windowWidth*0.1}} />
            <Text style={[styles.headerText,{fontSize:windowWidth*0.053}]}>MUSIC</Text>
            </View>
           

            <Tab.Navigator
                screenOptions={{
                tabBarLabelStyle: { fontSize: windowWidth*0.03, fontWeight: 'bold',color:'white'},
                tabBarStyle: { backgroundColor: '#1B2E4E', borderTopLeftRadius:20, borderTopRightRadius:20 },
                tabBarIndicatorStyle: { backgroundColor: '#2B59C3',height:4 },
                 }}>
            <Tab.Screen name="Tracks" component={Tab1} />
            <Tab.Screen name="Albums" component={Tab2} />
            <Tab.Screen name="Artists" component={Tab3} />
            <Tab.Screen name="Playlists" component={Tab4} />

            </Tab.Navigator>
          
        </SafeAreaView>
    )
}

export default MediaPlayer