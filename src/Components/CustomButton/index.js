import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { COLORS } from '../../utils/constants/theme';
import { TextNormal, TextSmall } from '../CustomTexts';

const CustomButton = props => {
  const {
    title,
    onPress,
    secondary,
    primary,
    style,
    textColor,
    tertiary,
    textSmall,
    textStyle,
    isLoading,
    loaderColor,
    disabled,
    ...rest
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        styles.primary,

        secondary && styles.secondary,
        disabled && styles.disabled,
        style,
      ]}
      disabled={isLoading || disabled}
      onPress={onPress}
      {...rest}>
      {isLoading ? (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator color={loaderColor ? loaderColor : COLORS.white} />
        </View>
      ) : textSmall ? (
        <TextSmall
          color={
            !secondary
              ? tertiary
                ? COLORS.primary
                : COLORS.white
              : COLORS.black
          }
          textStyle={[{ fontWeight: 'bold', textAlign: 'center', ...textStyle }]}

        >
          {title.toUpperCase()}
        </TextSmall>
      ) : (
        <TextNormal
        bold
          color={
            textColor ? textColor : primary ? COLORS.white : COLORS.primary
          }
          textStyle={[{ textAlign: 'center', ...textStyle }]}>
          {title}
        </TextNormal>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: hp(7),
    borderRadius:50,
    borderWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  primary: {
    backgroundColor: COLORS.primary,
    // borderColor: COLORS.primary,
    borderColor: 'transparent',
    borderWidth: 1,
  },
  secondary: {
    backgroundColor: COLORS.white,
    borderColor: 'transparent',
        borderWidth: 1,
  },
  tertiary: {
    backgroundColor: COLORS.lightPrimary,
    borderColor: 'transparent',
    borderWidth: 1,
  },
  disabled: {
    backgroundColor: COLORS.disabledGrey,
  },
});
