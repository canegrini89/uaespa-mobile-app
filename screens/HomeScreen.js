import React from 'react';

import {
  StyleSheet,
  ScrollView ,
  FlatList,
} from 'react-native';
import Card from '../components/Card';
import {theme} from '../constants';
import Banner from '../components/Banner';

const HomeScreen = () => {

  const mock = [
    {
      id: '0',
      image: 'https://www.viajejet.com/wp-content/viajes/el-florido-jardin-publico-de-boston-massachusetts-818x460.jpg',
      phone: 31662616151,
      title: 'Sun City Luxury Club & Spa',
      whatsapp: '+541212131531',
      rating: 2350,
      km: 150,
      country: 'international city dubai,',
      textOne: 'Get 30% Discount on Hot',
      textTwo: 'Stone Messasge',
      status: 'open'
    },
    {
      id: '1',
      country: 'international city dubai,',
      image: 'https://i.pinimg.com/originals/55/d9/1a/55d91add5de21bd8b4c0ef24e34b3788.jpg',
      phone: 31662616151,
      title: 'Sun City Luxury Club & Spa',
      whatsapp: '+541212131531',
      rating: 2350,
      km: 150,
      textOne: 'Get 30% Discount on Hot',
      textTwo: 'Stone Messasge',
      status: 'close'
    },
    {
      id: '2',
      country: 'international city dubai,',
      image: 'https://live.staticflickr.com/6138/5922957840_2362afeb3e_b.jpg',
      phone: 31662616151,
      title: 'Sun City Luxury Club & Spa',
      whatsapp: '+541212131531',
      rating: 2350,
      km: 150,
      textOne: 'Get 30% Discount on Hot',
      textTwo: 'Stone Messasge',
      status: 'open'
    },
    {
      id: '3',
      image: 'https://i.pinimg.com/originals/e3/9b/1f/e39b1f3e2fd9b520f0320d5bac6d70d3.jpg',
      phone: 31662616151,
      title: 'Sun City Luxury Club & Spa',
      whatsapp: '+541212131531',
      rating: 2350,
      country: 'international city dubai,',
      km: 150,
      textOne: 'Get 30% Discount on Hot',
      textTwo: 'Stone Messasge',
      status: 'close'
    },
    {
      id: '4',
      country: 'international city dubai,',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Wwc6T2lParrVsukOwgxVVFhibEFwy2UibmfBG2WQ25iAgrxY&s',
      phone: 31662616151,
      title: 'Sun City Luxury Club & Spa',
      whatsapp: '+541212131531',
      rating: 2350,
      km: 150,
      textOne: 'Get 30% Discount on Hot',
      textTwo: 'Stone Messasge',
      status: 'open'
    }
  ]

  return (
    <ScrollView  style={styles.container}>
      <Banner 
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGlwVkH7hI01cWwOXJiY0d62rSjk8PtADvRsUPNxn_F7n4Qkg&s'
        textOne='Get 30% Discount on Hot'
        textTwo='Stone Massage'
        height={250}
        back='rgba(0, 0, 0, 0.6)'
      />
      <FlatList 
        data={mock}
        renderItem={({item}) => 
          <Card 
            title={item.title} 
            phone={item.phone} 
            image={item.image}
            whatsapp={item.whatsapp} 
            rating={item.rating} 
            km={item.km} 
            country={item.country} 
            textOne={item.textOne}
            textTwo={item.textTwo}  
            status={item.status}
          />}
        keyExtractor={item => item.id}
      />
    </ScrollView >
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroud,
  },
  header: {
    height: 250,
    width: '100%'
  },
});
