import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
        container:{   
            flexDirection:"column",
            alignItems:"center",
            marginBottom:20,
            marginTop:10
        },
        Image:{
            height:Dimensions.get("window").height/3,
            width:Dimensions.get("window").width,
            marginVertical:5,
            
        },
        Text:{
            fontWeight:"bold",
            fontSize:20,
            textAlign:"center",
            marginBottom:10
        }
})