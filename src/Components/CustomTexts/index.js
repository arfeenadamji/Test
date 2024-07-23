import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/constants/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

export const TextNormal = props => {
  const {children, textStyle, color, center, bold, medium, semiBold, ...rest} =
    props;
  return (
    <Text
      style={[
        styles.text,
        styles.normal,
        textStyle,
        color && {color: color},
        center && {textAlign: 'center'},
        bold && {fontWeight: 'bold'},
        semiBold && {fontFamily: 'Poppins-SemiBold'},
        medium && {fontFamily: 'Poppins-Medium'},
      ]}
      {...rest}>
      {children}
    </Text>
  );
};

export const TextSmall = props => {
  const {children, textStyle, color, bold, medium, semiBold, ...rest} = props;
  return (
    <Text
      style={[
        styles.text,
        styles.small,
        textStyle,
        color && {color: color},
        bold && {fontWeight: 'bold'},
        semiBold && {fontFamily: 'Poppins-SemiBold'},
        medium && {fontFamily: 'Poppins-Medium'},
      ]}
      {...rest}>
      {children}
    </Text>
  );
};

export const TextSmaller = props => {
  const {children, textStyle, color, bold, medium, semiBold, ...rest} = props;
  return (
    <Text
      style={[
        styles.text,
        styles.smaller,
        textStyle,
        color && {color: color},
        bold && {fontWeight: 'bold'},
        semiBold && {fontFamily: 'Poppins-SemiBold'},
        medium && {fontFamily: 'Poppins-Medium'},
      ]}
      {...rest}>
      {children}
    </Text>
  );
};

export const TextBig = props => {
  const {children, textStyle, color, bold, medium, semiBold, ...rest} = props;
  return (
    <Text
      style={[
        styles.text,
        styles.big,
        textStyle,
        color && {color: color},
        bold && {fontWeight: 'bold'},
        semiBold && {fontFamily: 'Poppins-SemiBold'},
        medium && {fontFamily: 'Poppins-Medium'},
      ]}
      {...rest}>
      {children}
    </Text>
  );
};

export const TextBigger = props => {
  const {children, textStyle, color, bold, medium, semiBold, center} = props;
  return (
    <Text
      style={[
        styles.text,
        styles.bigger,
        textStyle,
        center && {textAlign: 'center'},
        color && {color: color},
        bold && {fontWeight: 'bold'},
        semiBold && {fontFamily: 'Poppins-SemiBold'},
        medium && {fontFamily: 'Poppins-Medium'},
      ]}>
      {children}
    </Text>
  );
};

export const TextHuge = props => {
  const {children, textStyle, color, bold, medium, semiBold} = props;
  return (
    <Text
      style={[
        styles.text,
        styles.huge,
        textStyle,
        color && {color: color},
        bold && {fontWeight: 'bold'},
        semiBold && {fontFamily: 'Poppins-SemiBold'},
        medium && {fontFamily: 'Poppins-Medium'},
      ]}>
      {children}
    </Text>
  );
};

// fontFamily:'Inter-Black'
// fontFamily:'Inter-Bold'
// fontFamily:'Inter-ExtraBold'
// fontFamily:'Inter-ExtraLight'
// fontFamily:'Inter-Light'
// fontFamily:'Inter-Medium'
// fontFamily:'Inter-Regular'
// fontFamily:'Inter-SemiBold'
// fontFamily:'Inter-Thin'

const styles = StyleSheet.create({
  text: {
    // color: COLORS.text,
    color: 'white',
    // backgroundColor:'red',
    // fontFamily:'Poppins Bold',
    // fontFamily: 'Poppins-Medium',
  },
  smaller: {
    // fontSize: wp(3),
    // fontSize: RFValue(11),
    fontSize: RFValue(11),
  },
  small: {
    // fontSize: wp(3.5),
    // fontSize: RFValue(12),
    fontSize: RFValue(13),
  },
  normal: {
    // fontSize: wp(4),
    // fontSize: RFValue(14)
    fontSize: RFValue(15),
  },

  big: {
    // fontSize: wp(5),
    fontSize: RFValue(18),
    // fontFamily: Platform.OS == 'android' ? 'baskerville bold bt' : 'Baskerville Bold',
  },
  bigger: {
    // fontSize: wp(5.5),
    fontSize: RFValue(20),
  },
  huge: {
    // fontSize: wp(6),
    fontSize: RFValue(21),
  },
});
