import React from 'react'
import { View,Text,FlatList, Image } from 'react-native'
import styles from "./EarthquakeCase.style"
function EarthquakeCase() {

  const RenderItem=({item})=>(
    <View style={styles.container}>
      <Image style={styles.Image} source={{uri:item.image}} />
      <Text style={styles.List}>{item.key}</Text>
    </View>
  )
  return (
    <View style={styles.container}> 
    <FlatList
    data={[
      {
        key: 'Su',
        image:"https://images.freeimages.com/vhq/images/previews/709/water-bottle-vector-object-free-download-108362.jpg"
      },
      {
        key: 'Yiyecek',
        image:"https://media.istockphoto.com/id/513822840/tr/vekt%C3%B6r/vector-baby-food-jar-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=IB--U5OFhv84k89VSwpqKJfy5IdJros3y9Ym_WiZ868="
      },
      {
        key: 'İlk Yardım Çantası',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmPLg7DGxsooB9or0IRYfgxAiaZJqs5fedw&usqp=CAU"
      },
      {
        key: 'Radyo',
        image:"https://media.istockphoto.com/id/1254350303/tr/vekt%C3%B6r/vintage-radyo-al%C4%B1c%C4%B1s%C4%B1-vekt%C3%B6r-ill%C3%BCstrasyon-d%C3%BCz-tarz%C4%B1-retro-radyo.jpg?s=170667a&w=0&k=20&c=tTqskEOJbJ8VNxE_D_KTT_A30_gSM48CsAR3R25dJEk="
      },
      {
        key: 'Fener',
        image:"https://img2.pngindir.com/20180227/osq/kisspng-flashlight-computer-file-vector-flashlight-5a95838e8629d4.2473460915197479825495.jpg"
      },
      {
        key: 'Pil',
        image:"https://cdn.pixabay.com/photo/2012/04/10/17/36/battery-26613_960_720.png"
      },
      { 
        key: 'İş Eldiveni',
        image:"https://static6.depositphotos.com/1160142/644/v/950/depositphotos_6448264-stock-illustration-protective-gloves.jpg"
      },
      {
        key: 'Ev, İş Yeri ve Araç Yedek Anahtarları',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30jfloXiEzRyIOXr0gt6x9I-goU33zFQ7Dw&usqp=CAU"
      },
      {
        key: 'Nakit Para',
        image:"https://cdn.pixabay.com/photo/2016/03/31/21/41/cash-1296585_960_720.png"
      },
      {
        key: 'Kibrit veya Çakmak',
        image:"https://cdn.create.vista.com/api/media/small/397995340/stock-vector-burning-match-with-fire-opened"
      },
      {
        key: 'Toz Maskesi',
        image:"https://media.istockphoto.com/id/1257080475/tr/vekt%C3%B6r/t%C4%B1bbi-y%C3%BCz-maskesi-simge-coronavirus-vekt%C3%B6r-ill%C3%BCstrasyon.jpg?s=170667a&w=0&k=20&c=Ayt3-f3Tpy_eEuYZG-SPuUSf_hWGPRfPjGYTnNvVSgw="
      },
      {
        key: 'Not Defteri',
        image:"https://media.istockphoto.com/id/1026799922/tr/vekt%C3%B6r/not-defteri-vekt%C3%B6r-%C3%A7izimi.jpg?s=1024x1024&w=is&k=20&c=pwHKnabCS4PJT330S5CZZevvDyFk_yenidON3T9Tjyc="
      },
      {
        key: 'Düdük',
        image:"https://publicdomainvectors.org/tn_img/kelan-whistle.webp"
      },
      {
        key: 'Kıyafet',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3l-x-4rKAOD19-7eHWKdYPu2edVkibUKRQ&usqp=CAU"
      },
      {
        key: 'İp',
        image:"https://img2.pngindir.com/20180222/kuq/kisspng-rope-top-rope-png-vector-material-5a8f7eefad0506.8005669615193535837087.jpg"
      },
      {
        key: 'İlaçlar',
        image:"https://st4.depositphotos.com/3369547/24207/v/450/depositphotos_242070728-stock-illustration-set-of-bottles-medicines-probiotics.jpg"
      },
      {
        key: 'Battaniye',
        image:"https://media.istockphoto.com/id/1287618024/tr/vekt%C3%B6r/battaniye-beyaz-izole-yuvarlan%C4%B1r-rahat-bir-ev-kavram%C4%B1-rahatlama.jpg?s=612x612&w=0&k=20&c=3WxHIVWWN9ELofdojs9WjHp1f85ONcCNToyOHblpoA8="
      },
      {
        key: 'Önemli Telefon Numaraları',
        image:"https://img2.pngindir.com/20180427/pke/kisspng-encapsulated-postscript-telephone-computer-icons-phones-vector-5ae2c80e868ed4.5133217615248117905512.jpg"
      },
    ]}
    renderItem={RenderItem}
  /></View>
  )
}

export default EarthquakeCase