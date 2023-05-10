
import { View,Text } from "react-native"
import { SelectList } from "react-native-dropdown-select-list";
import {useState} from 'react';
import dataListDistrict from "./Datalist/District.json"
import styles from "./Location.style"
import Button from "../../Button";
import dataListVillage from "./Datalist/Village.json"
function Location({navigation}){

    
    const [district,setDistrict]=useState("Osmangazi")
    const [village,setVillage]=useState("")
    const LocationButtonPress=()=>{
        navigation.navigate("MeetingPlace",{District:district,Village:village})
    }
    return(
        <View style={{paddingHorizontal:10,paddingTop:30,flex:1}}>
            <Text style={styles.titleText}>Bursa Toplanma Alanları</Text>     
            <View style={styles.districtInput}>
                <Text style={styles.text}>İlçe:</Text>
                <SelectList
                setSelected={setDistrict}              
                data={dataListDistrict}
                placeholder={"İlçe seçiniz."}
                search={false}
                defaultOption={dataListDistrict[0]}
                dropdownTextStyles={{fontWeight:"bold"}}
                maxHeight={200}
                />
            </View>
            <View style={styles.districtVillageInput}>
                <Text style={styles.text}>Mahalle/Köy:</Text>
                <SelectList
                setSelected={setVillage}              
                data={dataListVillage[district]}
                placeholder={"Mahalle/Köy seçiniz."}
                search={false}
                defaultOption={dataListVillage[district][0]}
                dropdownTextStyles={{fontWeight:"bold"}}
                maxHeight={200}
                />
            </View>
            <Button title="Toplanma Alanlarını Bul" onPress={LocationButtonPress}/>
        </View>
   
    )
}
export default Location