import React from 'react'
import {View,Text,FlatList} from "react-native"
import styles from "./InTransport.style"

function InTransport() {
  return (
   <View style={styles.container}>
    <FlatList style={styles.List}
        data={[
          {key: '•	Gerekmedikçe, metro ve trenden kesinlikle inmemelisiniz. Çünkü metro ve tren hatlarında elektrik bulunur ve elektrik size ciddi sorunlar yaşatabilir. Ayrıca diğer hatlardan metro ya da tren gelmesi de olasıdır.'},
          {key: '•	Sarsıntı bitinceye kadar metro, otobüs ya da trenin içinde bulunan sıkıca tutturulmuş askı, korkuluk veya herhangi bir yere tutunmalısınız. Otobüs, metro veya tren personeli tarafından verilen talimatlara uymanız, olası problemlerin önüne geçebilir. '}
        ]}
        renderItem={({item}) => <Text style={styles.List}>{item.key}</Text>}
      />
   </View>
  )
}

export default InTransport