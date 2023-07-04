import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import VerticalDivider from '../components/verticalDivider';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.maincontainer}> 
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{fontSize:30, fontWeight: 700, flex: 1, textAlign: 'center'}}>Profile</Text>
        </View>
          {/* Profile Done */}

        <View style={styles.profilePicContainer}>
          <Image source={require('../assets/profile.png')}
            style={styles.profileimage}
          />
          <Text style={{fontSize: 20, fontWeight: 700, alignSelf: 'center'}}>
            Steve Lawrence
          </Text>
          <Text style={{fontSize: 15, fontWeight: 400, alignSelf: 'center', color:'gray'}}>
            @steve_77
          </Text>
        </View>

          {/* Daily Readings */}
        <View style={styles.userDetailContainer}>
          <View style={{ flexDirection: 'row', alignSelf: 'center', margin: '2%' }}>
            <Image source={require('../assets/weight.png')}
              style={{ height: 48, width: 48, borderRadius: 5 }}
            />
            <View style={{ flexDirection: 'column', marginStart:'6%', justifyContent:'center' }}>
              <Text style={{fontSize: 10, fontWeight: 700,  color:'gray'}}>
                Weight
              </Text>
              <Text style={{fontSize: 15, fontWeight: 700}}>
                78 kg
              </Text>
            </View>
          </View>
                                  
          <View style={{ flexDirection: 'row', alignSelf: 'center', margin: '2%' }}>
            <Image source={require('../assets/height.png')}
              style={{ height: 48, width: 48, borderRadius: 5 }}
            />
            <View style={{ flexDirection: 'column', marginStart:'6%', justifyContent:'center' }}>
              <Text style={{fontSize: 10, fontWeight: 700, color:'gray'}}>
                Height
              </Text>
              <Text style={{fontSize: 15, fontWeight: 700,}}>
                5ft 11"
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignSelf: 'center', margin: '2%' }}>
            <Image source={require('../assets/age.png')}
              style={{ height: 48, width: 48, borderRadius: 5 }}
            />
            <View style={{ flexDirection: 'column' ,marginStart:'6%', justifyContent:'center'}}>
              <Text style={{fontSize: 10, fontWeight: 700, color:'gray'}}>
                Age
              </Text>
              <Text style={{fontSize: 15, fontWeight: 700}}>
                26 yrs
              </Text>
            </View>
          </View>
        </View>

          {/* Readings  */}
        <View style={styles.currentReadings}>
          <View style={{ flex: 1, flexDirection: 'row'}}>
            <View style={{ flex: 1, alignSelf: 'center' }}>
              <Text style={{fontSize: 15, fontWeight: 700, marginStart:'6%'}}>
                Today
              </Text>
              <Text style={{fontSize: 12, fontWeight: 600, color:'gray', marginStart:'6%'}}>
                Budget 2600 Cal
              </Text>
              <Image source={require('../assets/cal.png')}
                style={{width: 120, height: 124, borderRadius: 1}}
              />
            </View>
            <VerticalDivider/>
            <View style={{ flex: 1, alignSelf: 'center'}}>
              <View style={{ flexDirection:'row', alignSelf:'center'}}>
                <AntDesign name="heart" size={24} color="#FF8A1F" />
                <Text style={{fontSize: 15, fontWeight: 700}}>
                  Heart Rate
                </Text>
              </View>
              <Image source={require('../assets/heartbeat.png')}
                style={{width: 114, height: 72, alignSelf:'center'}}
              />
              <Text style={{fontSize: 15, fontWeight: 600, alignSelf: 'center'}}>
                83.3
              </Text>
              <Text style={{fontSize: 12, fontWeight: 600, color:'gray', alignSelf: 'center'}}>
                bpm
              </Text>
            </View>
          </View>
        </View>
          {/* Done */}
        <View style={styles.otherReading}>
          <View style={styles.otherReadingContainer}>
            <Image source={require('../assets/timer1.png')}
              style={{ height: 40, width: 40, margin: '10%' }}
            />
            <Text style={{fontSize: 15, fontWeight: 600, marginLeft:'10%'}}>
              Running
            </Text>
            <Text style={{fontSize: 12, fontWeight: 600, color:'gray', marginLeft:'10%'}}>
              2.3 / 3km
            </Text>
          </View>
          <View style={styles.otherReadingContainer}>
            <Image source={require('../assets/timer2.png')}
              style={{ height: 40, width: 40, margin: '10%' }}
            />
            <Text style={{fontSize: 15, fontWeight: 600, marginLeft:'10%'}}>
              Push-ups
            </Text>
            <Text style={{fontSize: 12, fontWeight: 600, color:'gray', marginLeft:'10%'}}>
              72/ 100
            </Text>
          </View>
          <View style={styles.otherReadingContainer}>
            <Image source={require('../assets/timer3.png')}
              style={{ height: 40, width: 40, margin: '10%' }}
            />
            <Text style={{fontSize: 15, fontWeight: 600, marginLeft:'10%'}}>
              Cycling
            </Text>
            <Text style={{fontSize: 12, fontWeight: 600, color:'gray', marginLeft:'10%'}}>
              6.5 / 10km
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: '2%',
    backgroundColor: 'white',
  },
  header:{
    flex:1,
    flexDirection:'row',
    margin:'2%',
    alignItems:'center',
    //borderWidth: 1,
    //borderColor:'black',
  },
  profilePicContainer: {
    flex: 2,
    marginHorizontal: '2%',
    //borderWidth: 1,
    //borderColor:'black',
  },
  profileimage: {
    width: 103,
    height: 103,
    borderRadius: 20,
    alignSelf: 'center',
  },
  userDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: '2%',
    //borderWidth: 1,
    //borderColor:'black',
  },
  currentReadings: {
    flex: 2.5,
    marginHorizontal: '2%',
    elevation: 2,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  otherReading: {
    flex: 2,
    flexDirection: 'row',
    margin: '2%',
  },
  otherReadingContainer: { 
    flex: 1, 
    elevation: 1,
    backgroundColor:'#fff', 
    marginLeft:'2%', 
    borderRadius: 10,
  }
})