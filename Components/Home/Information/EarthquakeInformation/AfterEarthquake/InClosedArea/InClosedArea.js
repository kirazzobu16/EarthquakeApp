import React from 'react'
import { View,Text,FlatList } from 'react-native'
import styles from "./InCLosedArea.style"
function InClosedArea() {
  return (
    <View style={styles.container}> 
    <FlatList
    data={[
      {key: '•  Depremlerden sonra çıkan yangınlar oldukça sık görülen ikincil afetlerdir. Bu nedenle eğer gaz kokusu alırsanız, doğal gaz vanasını kapatın. Camları ve kapıları açın. Binayı hemen terk edin. Eğer gaz kokusu almıyorsanız sırasıyla elektrik, doğal gaz ve su vanalarını kapatın, soba ve ısıtıcıları söndürün.  '},
      {key: '•	Dökülen tehlikeli maddeleri temizleyin.'},
      {key: '•	Yerinden oynayan telefon ahizelerini telefonun üstüne koyun.'},
      {key: '•	Acil durum çantanızı yanınıza alın ve acil durum eylem planı yaptıysanız bu plana sadık kalarak mahalledeki buluşma noktanıza gidin.'},
      {key: '•	Radyo ve televizyon gibi kitle iletişim araçlarıyla yapılacak uyarıları dinleyin.'},
      {key: '•	Cadde ve sokakları acil yardım araçları için boş bırakın.'},
      {key: '•	Her büyük depremden sonra mutlaka artçı depremler olur. Artçı depremler zaman içerisinde seyrekleşir ve büyüklükleri azalır. Artçı depremler hasarlı binalarda zarara yol açabilir. Bu nedenle sarsıntılar tamamen bitene kadar hasarlı binalara girmeyin. Artçı depremler sırasında da ana depremde yapılması gerekenleri uygulayın.'},
      {key: '•	Evinizi veya binanızı terk ederken kıymetli eşyalarınızı, kalın giyecek, battaniye gibi eşyaları yanınıza alın, kalın ayakkabılarınızı giyin, biraz yiyecek ve içme suyu temin edin.'}
    ]}
    renderItem={({item}) => <Text style={styles.List}>{item.key}</Text>}
  /></View>
  )
}

export default InClosedArea