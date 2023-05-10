import {StyleSheet,Dimensions} from "react-native"
export default  StyleSheet.create({
    Maincontainer:{
        marginHorizontal:5     
    },
    Title:{
        fontSize:20,
        fontWeight:"bold"
    },
    text:{
        fontSize:17,
        textAlign:"justify",
    },
    TextContainer:{
        marginVertical:10
    },
    Image:{
        width:Dimensions.get("screen").width,
        height:Dimensions.get("screen").height/4,
    }
})