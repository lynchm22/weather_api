import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native'
import moment from 'moment-timezone'


import FutureWeather from './FutureWeather'

const WeatherScroll = ({weatherData}) => {
  return (
    <ScrollView horizontal={true} style={styles.ScrollView}>
        <CurrWeather temp={weatherData && weatherData.length > 0 ? weatherData[0].temp : {}} 
        data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}/>
        <FutureWeather data = {weatherData}/>
    </ScrollView>
  )
}

const CurrWeather = ({temp, data}) => {

    const img = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'} // images are bugging out - need to talk with group
    return (
        <View style={styles.currentTempcontainer}>
            <Image source={img} style={styles.image}/>
            <View style={styles.internalContainer}>
                <Text style={styles.currentTempDay}>{moment(data.dt * 1000).format('dddd')}</Text>
                <Text style={styles.currentTempDT}>Day - {Math.floor(temp.day-273)}&#176;C</Text>
                <Text style={styles.currentTempNT}>Night - {Math.floor(temp.night-273)}&#176;C</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

    ScrollView: {
        flex: 0.2,
        backgroundColor: '#16579c',
        padding:35,
        borderRadius: 10,

    },
    image: {
        width: 150,
        height: 150
    },

    internalContainer: {
        paddingRight: 40,
        

    },

    currentTempcontainer:{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'

    },

    currentTempDay: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,


    },

    currentTempDT: {
        fontSize: 15,
        fontWeight: '100',
        textAlign: 'center',
        marginBottom: 10,

    },
    currentTempNT: {
        fontSize: 15,
        fontWeight: '100',
        textAlign: 'center',
        marginBottom: 10,

    },

    
})

export default WeatherScroll