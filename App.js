import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

import Datetime from './components/Datetime'
import WeatherScroll from './components/WeatherScroll'


const apiKey = ["50b857753c980b99f5281bf0531b0e98"]




const img = require('./assets/testimage.jpg')
export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) => {
      let lati = success.coords.latitude
      let long = success.coords.longitude



      fetchapi(lati, long)
    })
  }, [])

  const fetchapi = (latitude, longitude) => {
    fetch( "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly" + "&appid=" + apiKey)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)
    

        
      })
  }




  
  return (
    <View style={styles.container}>

        <Text style={styles.Hello}>Good morning,</Text>
        <Text style={styles.name}>Max.</Text>
        

      

        <Datetime current={data.current} timezone={data.timezone}/> 
        <WeatherScroll weatherData={data.daily}/>

  

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
    
  },

  Hello: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginTop: 40
  },
  
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginTop: 5
  }
});
