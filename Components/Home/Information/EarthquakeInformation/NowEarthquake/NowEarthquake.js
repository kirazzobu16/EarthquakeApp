import React from 'react'
import {View} from "react-native"
import Button from '../../../../Button'
import styles from "./NowEarthquake.style"

function NowEarthquake({navigation}) {
  const InHouse=()=>{navigation.navigate("InHouse")}
  const InOpen=()=>{navigation.navigate("InOpen")}
  const InCar=()=>{navigation.navigate("InCar")}
  const InTransport=()=>{navigation.navigate("InTransport")}
  return (
   <View style={styles.container}>
        <Button title="Bina İçerisinde Yakalananlar Neler Yapmalıdır ?" onPress={InHouse}/>
        <Button title="Açık Alanda Yakalananlar Neler Yapmalıdır ?" onPress={InOpen}/>
        <Button title="Araçta Yakalananlar Neler Yapmalıdır ?" onPress={InCar}/>
        <Button title="Toplu Taşıma Araçlarında Yakalananlar Neler Yapmalıdır ?" onPress={InTransport}/>
   </View>
  )
}

export default NowEarthquake