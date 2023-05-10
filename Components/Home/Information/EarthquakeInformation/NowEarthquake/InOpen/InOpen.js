import React from 'react'
import {View,Text,FlatList} from "react-native"
import styles from "./InOpen.style"

function InOpen() {
  return (
   <View style={styles.container}>
    <FlatList style={styles.List}
        data={[
          {key: '•	Enerji hatları ve direklerinden, ağaçlardan, diğer binalardan ve duvar diplerinden uzaklaşmalısınız. Açık arazide çömelerek etraftan gelen tehlikelere karşı hazırlıklı olmanız önemlidir'},
          {key: '•	Toprak kayması oluşabilecek, taş veya kaya düşebilecek yamaç altlarında durmamalısınız. Böyle bir ortamdaysanız hızlı bir şekilde güvenli alana geçmeye çabalamalısınız.'},
          {key: '•	Binalardan düşebilecek baca, kiremit, cam kırıkları ve sıvalara karşı tedbirli olmalısınız.'},
          {key: '•	Toprak altındaki kanalizasyon, elektrik ve doğal gaz hatlarından gelecek tehlikelere karşı dikkatli olmalısınız.'},
          {key: '•	Deniz kıyısından mümkün olduğunca uzaklaşmalısınız.'},
        ]}
        renderItem={({item}) => <Text style={styles.List}>{item.key}</Text>}
      />
   </View>
  )
}

export default InOpen