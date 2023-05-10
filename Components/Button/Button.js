import React from "react";
import { Pressable,Text } from "react-native";
import styles from "./Button.style"

function Button({title,onPress}){
    return(
    <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable> 
    )
}

export default Button