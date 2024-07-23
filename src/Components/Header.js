import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import {
    heightPercentageToDP,
    heightPercentageToDP as hp,
    widthPercentageToDP
} from 'react-native-responsive-screen';
import { TextBig } from './CustomTexts';
import CustomIcon from './CustomIcon';

const CustomHeader = props => {
  const {title, type, onPressBack,onBack,menuIcon,style} = props;
  const navigation = useNavigation();
  const onPress = () => {
    onPressBack();
  };
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View style={[styles.container,style]}>
      <Pressable style={styles.backContainer}   
      onPress={() => { navigation.goBack()}}>
      <CustomIcon
      disabled
      icon="chevron-left"
      type="material-icons"
      color="white"
      size={heightPercentageToDP(5)}
    />
      
      </Pressable>
      <View style={styles.centerCont}>
      <TextBig >{title}</TextBig>
      </View>
      <View style={styles.rightContainer} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(6),
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'red'
    // paddingHorizontal: wp(5),
  },
  backContainer: {
    justifyContent: 'center',
    height: heightPercentageToDP(3),
    width: widthPercentageToDP(8),
    height:'100%',
    width:'12%',
  },
  rightContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height:'100%',
    
    width:'12%',
  },
  centerCont:{
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    // padding: 5,
    height:'100%',
    width:'76%',
  },
  profileHeader: {
    flexDirection: 'row',
  },
});