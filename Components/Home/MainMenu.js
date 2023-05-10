import React,{ useState }  from "react";
import Button from "../Button";
import { View } from "react-native";
import styles from "./MainMenu.style"



function MainMenu({navigation}){
    const InformationPress=()=>{
      navigation.navigate("Information")   
    }
    const LocationPress=()=>{
        navigation.navigate("Location")
    }
    const AlarmButtonPress=()=>{
        navigation.navigate("AlarmButton")
    }
    return(
        <View style={styles.container}>
            <Button title="DEPREM HAKKINDA BİLGİLENDİRME" onPress={InformationPress}/>
            <Button title="TOPLANMA ALANLARI" onPress={LocationPress}/>
            <Button title="ACİL DURUM BUTONU" onPress={AlarmButtonPress}/>    
        </View>
    )
}

export default MainMenu