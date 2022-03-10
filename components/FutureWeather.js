import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

const FutureWeather = () => {
  return (
    <View style={{flexDirection: "row"}}>
        <FutureDayItem />
        <FutureDayItem />
        <FutureDayItem />
        <FutureDayItem />
        <FutureDayItem />
        <FutureDayItem />
    </View>
  )
}

const FutureDayItem = () => {
    const img = {uri:"http://openweathermap.org/img/wn/10d@2x.png"}
    return (
        <View style={styles.FutureDayItemContainer}>
            <Image source={img} style = {styles.image}/>
            <View style={styles.FutureInternalContainer}>
                <Text style={styles.Day}>Friday</Text>
                <Text style={styles.Daytime}>Day - 13&#176;C</Text>
                <Text style={styles.Nighttime}>Night - 3&#176;C</Text>
            </View>

        </View>
    )
}
export default FutureWeather

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    },

    FutureDayItemContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginLeft: 5,
    

    },

    FutureInternalContainer: {
        paddingRight: 40,

    },

    Day: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,

    },

    Daytime: {
        fontSize: 15,
        fontWeight: '100',
        textAlign: 'center',
        marginBottom: 10,

    },

    Nighttime: {
        fontSize: 15,
        fontWeight: '100',
        textAlign: 'center',
        marginBottom: 10,

    }

})