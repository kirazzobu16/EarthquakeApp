import React from 'react'
import { View,Text,ScrollView,Image} from 'react-native'
import styles from "./Furniture.style"
function Furniture() {
  return (
    <ScrollView style={styles.Maincontainer}>
        <Text style={styles.Title}>Deprem Öncesinde Evdeki Eşyalar ile İlgili Alınacak Önlemler</Text>
        <View style={styles.TextContainer}>
            <Text style={styles.text}>   Gardırop ve kitaplık gibi yüksek mobilyalar ile ayna gibi eşyaları duvara sabitlemelisiniz. </Text>
            <Image style={styles.Image} source={{uri:'https://2.bp.blogspot.com/-M-JH2-s87DA/WDLS6NG6ZoI/AAAAAAAADNg/f2gH6IHGC00wzsrgg0bFhZid2P5cQzK3ACEw/w1200-h630-p-k-no-nu/monilyay%25C4%25B1-duvara-sabitleme.jpg'}}/>
        </View>
        <View style={styles.TextContainer}>
            <Text style={styles.text}>   Düşmesi halinde tehlike yaratabilecek cam veya porselen eşyalar ile ağır kitaplar gibi nesneleri ise yüksek raflara koymaktan mümkün olduğunca kaçınmalısınız. Bu önlem, özellikle koltuk ve yatakların üzerine denk gelen raflar açısından çok önemlidir.  </Text>
        </View>
        <View style={styles.TextContainer}>
            <Text style={styles.text}>   Deprem sırasında sıkça görülen olaylardan biri de, binanın hareketi sırasında camların kırılarak etrafa saçılmasıdır. Bunu önlemek için camlarınızı saydam film ile kaplayabilir ya da en azından tül perdelerinizi kapalı tutabilirsiniz.   </Text>
            <Image style={styles.Image} source={{uri:'https://camfilmcisiburada.com/wp-content/uploads/2015/07/Ev-Cam-Filmi-1.jpg'}}/>
        </View>
    </ScrollView>
  )
}

export default Furniture