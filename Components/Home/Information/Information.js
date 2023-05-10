import React from "react";
import { Text,View } from "react-native";
import Button from "../../Button";
import styles from "./Information.style"
function Information({navigation}){

    const BeforeEarthquake=()=>{navigation.navigate('BeforeEarthquake')}
    const NowEarthquake=()=>{navigation.navigate('NowEarthquake')}
    const AfterEarthquake=()=>{navigation.navigate('AfterEarthquake')}
    const EarthquakeCase=()=>{navigation.navigate('EarthquakeCase')}
    return(
    <View style={styles.container}>
        <Button title="Deprem öncesinde neler yapılmalı ?" onPress={BeforeEarthquake}/>
        <Button title="Deprem sırasında neler yapılmalı ?" onPress={NowEarthquake}/>
        <Button title="Deprem sonrasında neler yapılmalı ?" onPress={AfterEarthquake}/>
        <Button title="Deprem çantasında olması gerekenler ?" onPress={EarthquakeCase}/>
    </View>
    )
}

export default Information