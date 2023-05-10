import React, { useEffect } from "react";
import { View,Text, FlatList,Image, StyleSheet } from "react-native";
import MeetingCard from "./Card/MeetingCard";
import MeetingData from "./Meeting.json"
function Meeting({route}){
    
    const District=route.params.District
    const Village=route.params.Village

    const renderList=({item})=> <MeetingCard item={item}/>
      
    return(
    <View>
          <Text style={styles.title} >{District}/{Village} Toplanma Alanları</Text>
          <FlatList
            keyExtractor={item=>item.id}
            data={MeetingData[District][Village]}
            renderItem={renderList}
          />
    </View>
)
}

const styles= StyleSheet.create({
  title:{
    fontWeight:"bold",
    fontSize:15
  }
}
) 

export default Meeting