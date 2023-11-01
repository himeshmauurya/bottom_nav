import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import IMAGES from '../../Assets'
 import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp,
 } from 'react-native-responsive-screen';
const Signup = () => {
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
     <Image source={IMAGES.SPOTIFY} style={{}} />
      <Text>Millions of songs.</Text>
      <Text>Free on Spotify</Text>
     <TouchableOpacity onPress={()=>{console.log("Sign up for free")}}>
      <Text>Sign up for free</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{console.log("Sign up for phone number")}}style={{flexDirection:'row',borderWidth:1,borderColor:'white',width:wp('80%'),alignItems:'space-between'}}>
     <Image source={IMAGES.PHONE} style={{height:30,width:30}} />
      <Text style={{color:'white'}}>Continue with phone number</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{console.log("Sign up for Google")}}style={{flexDirection:'row',borderWidth:1,borderColor:'white',width:wp('80%'),alignItems:'space-between'}}>
     <Image source={IMAGES.GOOGLE} style={{height:30,width:30}} />
      <Text style={{color:'white'}}>Continue with Google</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{console.log("Sign up for Facebook")}}style={{flexDirection:'row',borderWidth:1,borderColor:'white',width:wp('80%'),alignItems:'space-between'}}>
     <Image source={IMAGES.FACEBOOK} style={{height:30,width:30}} />
      <Text style={{color:'white'}}>Continue with Facebook</Text>
     </TouchableOpacity>
     <Text style={{color:'white'}}>Log in</Text>
    </View>
  )
}

export default Signup