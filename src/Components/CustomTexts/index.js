import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

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


const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  smaller: {
    fontSize: RFValue(11),
  },
  small: {
    fontSize: RFValue(13),
  },
  normal: {
    fontSize: RFValue(15),
  },

  big: {
    fontSize: RFValue(18),
  },
  bigger: {
    fontSize: RFValue(20),
  },
  huge: {
    fontSize: RFValue(21),
  },
});
