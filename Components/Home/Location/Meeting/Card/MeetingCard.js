import React from "react";
import { View,Text,Image, Linking} from "react-native";
import Button from "../../../../Button";
import styles from "./MeetingCard.style"
function MeetingCard({item}){
    return(
        <View style={styles.container}>
            <Text style={styles.Text}>{item.Location}</Text>
            <Image style={styles.Image} source={{uri:item.Image}}/>
            <Button onPress={()=>{Linking.openURL(item.Url)}} title="Adrese git"/>
        </View>
    )
}
export default MeetingCard 