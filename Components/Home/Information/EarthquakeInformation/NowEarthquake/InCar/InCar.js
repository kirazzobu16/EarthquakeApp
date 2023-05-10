import React from 'react'
import {View,Text,FlatList} from "react-native"
import styles from "./InCar.style"

function InCar() {
  return (
   <View style={styles.container}>
    <FlatList style={styles.List}
        data={[
          {key: '•	Sarsıntı sırasında karayolunda seyir halindeyseniz ve bulunduğunuz yer güvenli ise, yolu kapatmadan sağa yanaşıp durmanız gerekir. Kontak anahtarını yerinde bırakıp pencereler kapalı olarak araç içerisinde beklemeniz en güvenli yöntemdir. Sarsıntı durduktan sonra açık alanlara gidebilirsiniz.'},
          {key: '•	Aracınız meskûn mahalde, ağaç, enerji hatları veya direklerinin yanında ve köprü gibi güvenliksiz bir yerde ise, kontak anahtarını üzerinde bırakarak onu terk etmeli ve trafikten uzak açık alanlara gitmelisiniz.'},
          {key: '•	Sarsıntı sırasında bir tünelin içinde ve tünel çıkışına uzaktaysanız; aracı durdurup inmeli ve yanına yan yatarak ayaklarınızı karnınıza çekip ellerinizle baş ve boynunuzu korumalısınız. '},
          {key: '•	Kapalı bir otoparkta iseniz; araç dışına çıkmalı, aracın yanına yan yatarak ellerinizle baş ve boynunuzu korumalısınız. Yukarıdan düşebilecek tavan ya da tünel gibi büyük kütleler aracı belki ezecek ama yok etmeyecektir. Araç içinde olduğunuz takdirde, aracın üzerine düşen bir parça ile aracın içinde ezilebilirsiniz.'},
        ]}
        renderItem={({item}) => <Text style={styles.List}>{item.key}</Text>}
      />
   </View>
  )
}

export default InCar