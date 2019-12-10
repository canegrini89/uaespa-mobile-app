import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { theme } from '../constants';
import { Rating } from 'react-native-ratings';
import SmallButtonGradient from './SmallButtonGradient';

const Card = () => {

  const ratingCompleted = rating => {
    console.log('rating' + rating)
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/twitter.png')} style={styles.logo} />
      <View style={styles.backCont}>
        <View style={styles.detailsCont}>
          <Text style={styles.title}>Sun City Luxury Club & Spa</Text>
          <Text style={styles.moreDetails}>International City, Dubai. <Text style={styles.fontColor}>150km</Text></Text>
          <Text style={styles.moreDetails}>Phone: +92555555555</Text>
          <Text style={styles.moreDetails}>WhatsApp: +9563132121321</Text>
          <View style={styles.rating}>
            <Rating
              type='custom'
              ratingColor={theme.colors.tertiary}
              ratingCount={5}
              imageSize={14}
              onFinishRating={ratingCompleted}
              style={{ paddingVertical: 8, paddingHorizontal: 3 }}
            />
            <Text style={styles.ratingText}>45454 Ratings</Text>
          </View>
        </View>
        <View style={styles.buttonCont}>
          <View style={styles.gradientCont}>
            <View style={styles.gradient}>
              <SmallButtonGradient text='Call' colors={[theme.colors.tertiary, theme.colors.secondary, theme.colors.primary]}/>
            </View>
            <View style={styles.gradient}>
              <SmallButtonGradient text='Book' colors={[theme.colors.tertiary, theme.colors.secondary, theme.colors.primary]}/>
            </View>
            <View style={styles.gradient}>
              <SmallButtonGradient text='Map' colors={[theme.colors.tertiary, theme.colors.secondary, theme.colors.primary]}/>
            </View>
            <Text style={styles.textTime}>Everyday From 10am to 10pm</Text>
          </View>
        </View>
      </View>

    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: '70%',
    marginVertical: 20,
    marginHorizontal: 12,
    borderRadius: 10,
    backgroundColor: theme.colors.white,
    elevation: 3,
  },
  tag: {
    position: 'absolute',
    width: 80,
    height: 50,
  },
  ratingText: {
    color: theme.colors.tertiary
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textTime: {
    width: 200,
    textAlign: 'right',
    marginVertical: 3,
    fontSize: 12,
  },
  gradientCont: {
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    width: 125,
    height: 140,
    paddingHorizontal: 10,
    marginVertical: 12,
  },
  gradient: {
    height: 25,
    width: 80,
  },
  logo: {
    height:'50%',
    width: '100%',
  },
  fontColor: {
    color: theme.colors.tertiary,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  moreDetails: {
    fontSize: 12,
    color: theme.colors.gray,
    marginVertical: 5
  },
  backCont: {
    flexDirection: 'row'
  },
  buttonCont: {
    width: 120,
  },
  detailsCont: {
    alignItems: 'flex-start',
    width: 260,
    height: 140,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
