import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    alarm:{
      width: Dimensions.get('window').width * 0.5,
      height: Dimensions.get('window').width * 0.5,
      justifyContent:"center",
      alignItems:"center",
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,   
    },

    alarmEdge:{
        width: Dimensions.get('window').width * 0.55,
        height: Dimensions.get('window').width * 0.55,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        backgroundColor:"#850000",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"   
    },
    alarmTitle:{
        fontFamily:"Helvetica Neue Medium Extended",
        fontSize:15,
        color:"#FFF6C3",
    },
    alarmActive: {
      color:"yellow",
      width: Dimensions.get('window').width * 0.5,
      height: Dimensions.get('window').width * 0.5,
      justifyContent:"center",
      alignItems:"center", 
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
      },

})