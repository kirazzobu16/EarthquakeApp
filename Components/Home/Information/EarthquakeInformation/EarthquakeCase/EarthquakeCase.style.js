import {StyleSheet,Dimensions} from "react-native"

export default StyleSheet.create({
    container:{
        flex:1,
        marginTop:15
    },
    List:{
        fontSize:15,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:6    
    },
    Image:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height/4,
        resizeMode:"contain"
    }
})