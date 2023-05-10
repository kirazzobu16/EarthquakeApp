import React from 'react'
import {View,Text,Image,FlatList,ScrollView} from "react-native"
import styles from "./InHouse.style"
function InHouse() {
  return (
   <ScrollView style={styles.container}>
    <Text style={styles.text}>  Deprem sırasında yapılması gereken ilk şey emniyetli bir yere yatmak ya da çökmektir.Yat/Çök-Korun/Kapan-Tutun hareketleri yapılması gerekir.</Text>
    <Image style={styles.Image} source={{uri:"https://evrimagaci.org/public/content_media/e737b4a1f7e0812ad140f9ac9a6c9e24.png"}}/>

    <Text style={styles.text}>  Sabitlenmemiş dolap, raf, pencere ve diğer eşyalardan uzak durmalısınız. Bir eşyanın altına girmek yerine, ağırlık merkezi yere yakın olan eşyaların yanına yatmanızı öneririz.</Text>

    <Text style={styles.text}>  Sağlam sandalyelerle desteklenmiş veya dolgun ve hacimli koltuk, kanepe, içi dolu sandık, baza gibi koruma sağlayabilecek eşyaların yanına çömelerek hayat üçgeni oluşturabilirsiniz.</Text>

    <Text style={styles.text}>  Başınızı iki elinizin arasına alarak veya yastık ve kitap gibi koruyucu bir malzeme yardımıyla korumalısınız. Sarsıntı geçene kadar bu pozisyonda bekleyebilirsiniz.</Text>

    <Text style={styles.text}>  Binalarda en tehlikeli yerler balkon, merdiven ve asansörlerdir. Deprem sırasında yüksek risk oluşturan bu yerlerde bulunulmamalıdır.</Text>
    <FlatList
        data={[
          {key: '•	Merdivenlere ya da çıkışlara doğru koşulmamalıdır.'},
          {key: '•	Balkonlara çıkılmamalıdır.'},
          {key: '•	Balkonlardan ya da pencerelerden aşağıya atlanmamalıdır.'},
          {key: '•	Asansörler kesinlikle kullanılmamalıdır'},
          {key: '•	Telefonlar acil durum ve yangınları bildirmek dışında kullanılmamalıdır.'},
          {key: '•	Kibrit veya çakmak yakılmamalı, elektrik düğmelerine dokunulmamalıdır.'},
          {key: '•	Tekerlekli sandalyede isek tekerlekler kilitlenmeli, baş ve boyun korumaya alınmalıdır.'},
          {key: '•	İş aletlerinin bulunduğu mutfak, imalathane, laboratuvar gibi yerlerde; ocak, fırın ve benzeri cihazlar kapatılmalı, dökülebilecek malzeme ve maddelerden uzaklaşılmalıdır.'},
          {key: '•	Sarsıntı geçtikten sonra doğal gaz, elektrik ve su vanaları kapatılmalı, soba ve ısıtıcılar söndürülmelidir.'},
          {key: '•	Diğer güvenlik önlemleri uygulandıktan sonra, gerekli eşya ve malzemeler alınarak bina, daha önceden tespit edilmiş yoldan derhal terk edilerek toplanma bölgesine gidilmelidir.'},
          {key: '•	Okulda, sınıfta ya da büroda isek sağlam sıra ve masaların altında veya yanında; koridorda isek duvarın yanında hayat üçgeni oluşturacak biçimde ÇÖK-KAPAN-TUTUN hareketi yapılarak baş ve boyun korunmalıdır.'},
          {key: '•	Pencerelerden ve camdan yapılmış eşyalardan uzak durulmalıdır.'}
        ]}
        renderItem={({item}) => <Text style={styles.List}>{item.key}</Text>}
      />
   </ScrollView>
  )
}

export default InHouse