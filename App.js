

import React,{useState,useEffect} from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,TouchableOpacity,I18nManager
} from 'react-native';
import strings from './src/constatns/lang';
import { getLng, setLng } from './src/Helper/ChangeLng';
import  RNRestart from 'react-native-restart'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from './src/styles/ResponsiveScreen';




const App = () => {
      useEffect(()=>{
        selectedLng()
      })
  const selectedLng = async() =>{
      const lngData = await getLng()
      if(!!lngData){
        strings.setLanguage(lngData)
      }
      console.log("Selected Language",lngData)
  }
  const onChangeLng =  async(lng) => {
    if (lng === 'en') {
      //I18nManager.forceRTL(false)
      await I18nManager.forceRTL(false)
      //strings.setLanguage(lng)
      setLng('en')
      RNRestart.Restart()
      return;
    }
    if (lng === 'ol') {
       //I18nManager.forceRTL(true)
      await I18nManager.forceRTL(false)
      //strings.setLanguage(lng)
      
      setLng('ol')
      RNRestart.Restart()
      return;
    }
    if (lng === 'ar') {
      //I18nManager.forceRTL(true)
     await I18nManager.forceRTL(true)
     //strings.setLanguage(lng)
     
     setLng('ar')
     RNRestart.Restart()
     return;
   }
   
  }

  
  return (
  <View style={styles.container}>
    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
    <TouchableOpacity style={{width:wp('15%'),height:hp('5%'),backgroundColor:'yellow',alignItems:'center',justifyContent:"center"}}
     onPress={()=>onChangeLng('ar')}>
      <Text >Arabi</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:wp('15%'),height:hp('5%'),backgroundColor:'orange',alignItems:'center',justifyContent:'center'}}
    onPress={()=>onChangeLng('en')}>
      
      <Text>English</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:wp('15%'),height:hp('5%'),backgroundColor:'green',alignItems:'center',justifyContent:"center"}}
     onPress={()=>onChangeLng('ol')}>
      <Text>Hindi</Text>
    </TouchableOpacity>
    </View>
    <View style={{width:wp('100%'),height:hp('20%'),}}>
    <Text style={{fontSize:hp('5%'),}}>{strings.PRIVACY_POLICY}</Text>
    </View>
  <Text style={{fontSize:hp('5%'),}}>{strings.TAP_AGREE_AND_CONTINUE_TO_CEEPT_THE}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
 
  container:{
 flex:1,
 alignItems:'center',
 justifyContent:'center'
  }
});

export default App;
