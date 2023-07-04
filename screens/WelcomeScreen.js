import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Card from '../components/card'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const userName = 'Mr. Steve,';
    const icon1 = require('../assets/training.png');
    const icon2 = require('../assets/nutrition.png');
    const icon3 = require('../assets/client.png');
    const icon4 = require('../assets/video.png');

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <View style={styles.textContainer}>
            <Text style={{fontSize:15, fontWeight:600}}>Welcome</Text>
            <Text style={{fontSize:20, fontWeight:700}}>{userName}</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')}>
                <Image style={styles.icon} source={require('../assets/profile.png')}/>
            </TouchableOpacity>
        </View>

        <View >
            <Text style={{fontSize: 40,fontWeight:700, padding: 30}}>Choose your focus</Text>
            <View style={styles.row}>
                <Card
                    title="Training"
                    image= {icon1}
                />
                
                <Card
                    title="Nutrition"
                    image={icon2}
                />
            </View>
            <View style={styles.row}>
                <Card
                    title="Client Communication"
                    image={icon3}
                />
                <Card
                    title="Video Coaching"
                    image={icon4}
                />
            </View>
                    
        </View>
        
  </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical:80,
        //justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingLeft: 30,
    },
    row: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: '5%',
      },
      textContainer: {
        flexDirection: 'column',
      },
})