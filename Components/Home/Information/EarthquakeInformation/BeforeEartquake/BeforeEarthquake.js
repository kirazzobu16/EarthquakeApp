import React from 'react'
import {View,Text,ScrollView} from "react-native"
import styles from "./BeforeEarthquake.style"
import Button from '../../../../Button'
function BeforeEarthquake({navigation}) {
  const Furniture=()=>{navigation.navigate("Furniture")}


  return (
    <ScrollView style={styles.Maincontainer}>
      <View style={styles.TextContainer}>
        <Text style={styles.Title}>Deprem Öncesinde Evinizi Kontrol Ettirin</Text>
        <Text style={styles.text}>   Binaların inşaat standartlarına uygunluğu sağlanmalıdır. Eğer yeni bir ev alınacaksa, yasa ve yönetmeliklerle belirlenen şartlara uygun olarak inşa edilip edilmediği öğrenilmelidir. Eğer bilgi bulunmuyorsa, depreme dayanıklılığının uzmanlar tarafından denetlenmesi gerekir. Bu konuda Çevre ve Şehircilik Bakanlığından yardım alınabilir.
        </Text>
        <Text style={styles.text}>   Deprem öncesinde evin depreme dayanıklılığı kadar tahliyeye uygun olup olmadığı da kontrol edilmelidir. Evde çocuk, engelli veya yaşlılar ikamet ediyorsa, bu kişilerin özel ihtiyaçları göz önünde bulundurulmalı ve bunlara uygun olarak kolayca tahliye edilebilen evler tercih edilmelidir. 
        </Text>
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.Title}>Deprem İçin Sigorta Yaptırın</Text>
        <Text style={styles.text}>    Sadece deprem değil, tüm afetlerde meydana gelebilecek olası kayıplarınızı güvence altına alabilmek için sigorta yaptırmalısınız. Bu, ilk etapta mali bir yük gibi görünse de afetlere karşı sigorta yaptırmak, yaşayabileceğiniz acı olaylardan sonra size ciddi bir destek sağlayabilir.
        </Text>
      </View >
      <View style={styles.TextContainer}>
        <Text style={styles.Title}>Depreme Karşı Acil Durum Planı Yapın</Text>
        <Text style={styles.text}>   Evde yaşayan herkesin aktif olarak katılımı ile afet ve acil durum planı hazırlamalısınız. Bu plan evde yaşayan herkes tarafından ezberlenmelidir. Planda temel olarak acil durum sonrası aile fertleriyle nerede ve nasıl buluşacağınız, buluşma yerine hangi yollardan gideceğiniz, hangi malzemeleri kimin yanına alacağı ve diğer önemli konular yer almalıdır. Buna ek olarak, okul çağında bir çocuğunuz var ise, olası bir afet durumunda okulda bulunabileceği göz önüne alınmalı ve buna uygun olarak alternatif bir plan daha oluşturulmalıdır. Afet ve acil durum planını hazırladıktan sonra, bunu belirli aralıklarla değerlendirmeniz gerekir. Böylece hem herkesin planı hatırlaması hem de planda daha önce farkedilmemiş bir hata varsa düzeltilmesi sağlanır.
        </Text>
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.Title}>Depremden Önce Tesisat Kontrolü Yapın</Text>
        <Text style={styles.text}>   Deprem sonrasına binayı hızla tahliye etmelisiniz. Ancak bunu güvenli olarak yapabilmeniz için doğal gaz, elektrik ve su gibi tesisatların yeri ile vanalarının açılıp kapanma yönlerinin iyi bilinmesi gerekir. Eğer oturduğunuz yere yeni taşındıysanız ya da bu bilgiye daha önce hiç ihtiyaç duymadıysanız, işe ilk olarak tesisat bağlantılarının yerini öğrenmek ile başlayın. Tesisatların yerini öğrendikten sonra vanalarının kapanma yönlerini ezberleyin. Ayrıca sizin dışınızda evde yaşayanlar varsa, tesisatların yeri ve açılıp kapanma yönlerini onlara da göstermeniz faydalı olacaktır.
        </Text>
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.Title}>Evde Bulunan Kimyasallara Karşı Önlem Alın</Text>
        <Text style={styles.text}>   Ev içerisinde kullanılan deterjan, çamaşır suyu, boya, tiner, benzin, gazyağı ve motorin gibi kimyasal maddeler fazla miktarda bulundurulmamalıdır. Ayrıca evde bulundurulan maddeler izole edilerek çevreden yalıtılmalı, kullanılmayacak olanlar yok edilmeli ve depolanacaklar ise mutlaka birbirine karışmayacak şekilde saklanmalıdır.
        </Text>
      </View>
      <Button title="Evdeki Eşyalar ile alınacak önlemler için tıklayın" onPress={Furniture}/>
    </ScrollView>
  )
}

export default BeforeEarthquake