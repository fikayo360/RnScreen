import { View,Image,Text,TouchableHighlight,Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import styles from './tabstyle';
const Song = ({data}) => {
    const windowWidth = Dimensions.get('window').width

    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
          return text;
        }
      
        return text.slice(0, maxLength) + "...";
      }

    return(
        <View style={{flexDirection:'row',width:'100%',height:windowWidth*0.17,paddingHorizontal:windowWidth*0.03,alignItems:'center',marginBottom:windowWidth*0.02}}>
        <Image source={{uri:data.img}} style={{width:windowWidth*0.145,height:windowWidth*0.145,borderRadius:windowWidth*0.015,marginRight:windowWidth*0.03}} />
        <View style={{width:'70%',height:'100%',paddingVertical:windowWidth*0.02}}>
            <Text style={{fontSize:windowWidth*0.04,color:'white',marginBottom:windowWidth*0.01}}>{truncateText(data.title,28)} </Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <AntDesign name="folder1" size={windowWidth*0.03} color="white" style={{marginRight:windowWidth*0.02}} />
            <Text style={{fontSize:windowWidth*0.03,color:'white'}}>{data.source}</Text>
            </View>
        </View>
        <TouchableHighlight
           onPressIn={()=>{}}
           underlayColor={'#A5A5B6'}
           activeOpacity={0.7}
           style={[styles.iconWrapper,{width:windowWidth*0.1,height:windowWidth*0.1,borderRadius:windowWidth*0.5}]}>
          <Entypo name="dots-three-vertical" size={windowWidth*0.05} color="white" />
        </TouchableHighlight>
 
     </View>
    )
}

export default Song