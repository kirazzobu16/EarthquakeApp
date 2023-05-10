import React from 'react'
import {View} from "react-native"
import Button from "../../../../Button"
import styles from "./AfterEarthquake.style"

function NowEarthquake({navigation}) {
  const InClosedArea=()=>{navigation.navigate("InClosedArea")}
  const InOut=()=>{navigation.navigate("InOut")}
  
  return (
   <View style={styles.container}>
        <Button title="Kapalı Alanda Neler Yapılmalıdır ?" onPress={InClosedArea}/>
        <Button title="Açık Alanda Neler Yapılmalıdır ?" onPress={InOut}/>
   </View>
  )
}

export default NowEarthquake