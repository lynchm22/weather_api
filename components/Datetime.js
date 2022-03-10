import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment-timezone'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const apiKey = ["50b857753c980b99f5281bf0531b0e98"]






const WeatherItem = ({title, value, unit}) => {
    return(
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle}>{title}</Text>
            <Text style={styles.weatherItemUnit}>{value}{unit}</Text>
        </View>
    )
}
const Datetime = ({current, timezone}) => {

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')


    useEffect (() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
            const minutes = time.getMinutes();
            const ampm = hour >=12 ? 'pm' : 'am'
        
            setTime((hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes) +ampm) 
        
            setDate(days[day] + ', ' + date+ ' ' + months[month]) 
        
        }, 1000);
    }, [])





    return (
    <View styles={styles.container}>

        <View style={styles.TimeDateItemcontainer}> 
            <View> 
                <Text style={styles.timeHeading}>{time}</Text>
            </View>                
            <View> 
                <Text style={styles.dateHeading}>{date}</Text>
            </View>
        </View>
        
        <View style={styles.weatherItemcontainer}>
                <WeatherItem title = "Wind Speed" value = {current? current.wind_speed : ""} unit = "km/s"/>
                <WeatherItem title = "Sunrise" value = {current? moment.tz(current.sunrise * 1000, timezone).format("HH:mm") : ""} unit = "am"/>
                <WeatherItem title = "Sunset" value = {current? moment.tz(current.sunset * 1000, timezone).format("HH:mm") : ""} unit = "pm"/>
        </View>

  
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1.5,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    timeHeading: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",

         
    },
    dateHeading: {
        fontSize: 15,
        fontWeight: "normal",
        color: "white"
    },
    rightAlign: {
        textAlign: "right"
    },
    TimeDateItemcontainer: {
        backgroundColor: "#16579c",
        borderRadius: 10,
        padding: 10,
        marginTop: 15
        
    },
    weatherItemcontainer: {
        backgroundColor: "#16579c",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginBottom: 10
        
      
        
    },

    weatherItem: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    weatherItemTitle: {
        fontSize: 15,
        fontWeight: "normal",
        color: "white"
    },
    weatherItemUnit: {
        fontSize: 15,
        fontWeight: "normal",




        color: "white",
        paddingRight:10
    }


})

export default Datetime