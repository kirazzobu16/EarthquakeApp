import React from 'react'
import { View,Text,FlatList } from 'react-native'
import styles from "./InOut.styles"
function InOut() {
  return (
    <View style={styles.container}> 
    <FlatList
    data={[
      {key: '•  Çevrenizdeki hasara dikkat ederek bunları not edin.'},
      {key: '•	Hasarlı binalardan ve enerji nakil hatlarından uzak durun.'},
      {key: '•	Önce yakın çevrenizde acil yardıma gerek duyanlara yardım edin.'},
      {key: '•	Sonra mahalle toplanma noktanıza gidin.'},
      {key: '•	Yardım çalışmalarına katılın. Özel ilgiye ihtiyacı olan afetzedelere -yaşlılar, bebekler, hamileler, engelliler- yardımcı olun. Sağlık Bakanlığı tarafından verilen ilk yardım sertifikanız varsa yaralılara ilk yardım yapın.'},
      {key: '•	Kulaktan duyma sözlere itibar etmeyin, yerel yönetimlerin açıklamalarını takip edin; özellikle ilk üç gün içerisinde yetkililer izin vermedikçe, evlerinize girmeyin.'},
      {key: '•	Aile bireylerinizi bir arada tutun ve açık bir alanda bekleyin. '},
      {key: '•	Enkaz ve yıkıntılar arasında, cadde ve sokaklarda gelişigüzel dolaşmayın.'}
    ]}
    renderItem={({item}) => <Text style={styles.List}>{item.key}</Text>}
  /></View>
  )
}

export default InOut