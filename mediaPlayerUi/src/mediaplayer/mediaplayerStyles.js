import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0C1B33',
    },
    header:{
        width:'100%',
        height:'8%',
        flexDirection:'row',
        alignItems:'center',
    },

    headerText:{
        color:'white',
        fontWeight:'bold'
    },
    body:{
        width:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        height:'92%',
        backgroundColor:'#1B2E4E',
    }
})

export default styles