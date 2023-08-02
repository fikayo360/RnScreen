import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        position: 'relative',
        backgroundColor:'#FFFFFF',
    },
    header:{
        width:'100%',
        paddingTop:30,
        height:'10%',
        borderWidth:0.28,
        borderColor:'grey',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:14,
        flexDirection:'row'
    },
    body:{
        height:'89%',
        width:'100%',
        borderWidth:0.5
    },
    thread:{
        width:'100%',
        borderBottomWidth:0.5,
        borderBottomColor:'grey',
        maxHeight:'33%',
        paddingTop:6
    },
    tweet:{
        width:'100%',
        borderBottomWidth:0.5,
        borderBottomColor:'grey',
        maxHeight:'28%',
        paddingTop:6
    },
    tweetNotification:{
        color:'grey',
        fontSize:13
    },
    lowerContainer:{
        height:'80%',
        width:'100%',
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    tweetlowerContainer:{
        height:'80%',
        width:'100%',
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:5
    },
    threadColumn:{
        height:'100%',
        alignItems: 'center',
        width:'20%'
    },
    rightColumn:{
        width:'80%',
        height:'100%'
    },
    icons:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:7,
        marginBottom:7
    },
    iconContainer:{
        flexDirection:'row',
        alignItems:'center',
        width:"20%"
    }
})

export default styles