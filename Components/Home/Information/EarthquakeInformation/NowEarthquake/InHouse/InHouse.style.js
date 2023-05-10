import {StyleSheet,Dimensions} from "react-native"

export default StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        fontSize:17,
        marginHorizontal:5,
        textAlign:"justify",
        marginBottom:10
    },
    Image:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height/4,
        resizeMode:"contain"
    },
    List:{
        fontSize:15,
        fontWeight:"bold",
        marginHorizontal:5,
        textAlign:"justify"
    }
})