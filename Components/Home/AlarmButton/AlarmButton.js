import React, { useEffect, useState } from "react";
import { Text,View, Pressable } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import styles from "./AlarmButton.style";
import Sound from "react-native-sound"



Sound.setCategory('Playback');
let music=new Sound("alarm.mp3", Sound.MAIN_BUNDLE,(error)=>{
if (error) {
         console.log('hata', error)
         return
        }      
        music.setNumberOfLoops(-1)     
 })

function AlarmButton(){
const [isPlaying,setIsPlaying]=useState(false)    
const [colors,setColors]=useState(["red","#850000"])


 useEffect(()=>{
    
    if(isPlaying){  
        music.play() 
        setColors(["#ed213a", "#93291e"])
        }
        else{
            music.stop()
            setColors(["red","#850000"])
        }
        
 },[isPlaying])

 PlayPause=()=>{
        setIsPlaying(!isPlaying)
 }

    return(
    <View style={styles.container}>
        <View style={styles.alarmEdge}>
            <Pressable onPress={PlayPause}  > 
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0.75}}  colors={colors} style={styles.alarm} >
                <Text style={styles.alarmTitle}>Emergency Button</Text>
            </LinearGradient>
            </Pressable>
        </View>   
    </View>
    )
}

export default AlarmButton