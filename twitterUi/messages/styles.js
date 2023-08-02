import { StyleSheet } from "react-native";

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

    export default styles